
#
#
#
#
"""
Module bundling all functions needed to scrape metadata from webpages.
"""

import json
import logging
import re

from copy import deepcopy

from courlan.clean import normalize_url
from courlan.core import extract_domain
from courlan.filters import validate_url
from htmldate import find_date
from lxml.html import tostring

from .json_metadata import extract_json, extract_json_parse_error
from .metaxpaths import author_xpaths, categories_xpaths, tags_xpaths, title_xpaths, author_discard_xpaths
from .utils import check_authors, line_processing, load_html, normalize_authors, normalize_tags, trim, unescape, uniquify_list
from .htmlprocessing import prune_unwanted_nodes

LOGGER = logging.getLogger(__name__)
logging.getLogger('htmldate').setLevel(logging.WARNING)


class Document:
	"Defines a class to store all necessary data and metadata fields for extracted information."
	__slots__ = [
		'title', 'author', 'url', 'hostname', 'description', 'sitename',
		'date', 'categories', 'tags', 'fingerprint', 'id', 'license',
		'body', 'comments', 'commentsbody', 'raw_text', 'text'
	]
	# consider dataclasses for Python 3.7+
	def __init__(self):
		for slot in self.__slots__:
			setattr(self, slot, None)

	def clean_and_trim(self):
		'Limit text length and trim the attributes.'
		for slot in self.__slots__:
			value = getattr(self, slot)
			if isinstance(value, str):
				# length
				if len(value) > 10000:
					new_value = value[:9999] + '…'
					setattr(self, slot, new_value)
					value = new_value
				# HTML entities, remove spaces and control characters
				value = line_processing(unescape(value))
				setattr(self, slot, value)


HTMLDATE_CONFIG_FAST = {'extensive_search': False, 'original_date': True}
HTMLDATE_CONFIG_EXTENSIVE = {'extensive_search': True, 'original_date': True}

JSON_MINIFY = re.compile(r'("(?:\\"|[^"])*")|\s')

HTMLTITLE_REGEX = re.compile(r'^(.+)?\s+[-|]\s+(.+)$')  # part without dots?
URL_COMP_CHECK = re.compile(r'https?://|/')
HTML_STRIP_TAG = re.compile(r'(<!--.*?-->|<[^>]*>)')

LICENSE_REGEX = re.compile(r'/(by-nc-nd|by-nc-sa|by-nc|by-nd|by-sa|by|zero)/([1-9]\.[0-9])')
TEXT_LICENSE_REGEX = re.compile(r'(cc|creative commons) (by-nc-nd|by-nc-sa|by-nc|by-nd|by-sa|by|zero) ?([1-9]\.[0-9])?', re.I)

METANAME_AUTHOR = {
	'article:author','author', 'byl', 'citation_author',
	'dc.creator', 'dc.creator.aut', 'dc:creator',
	'dcterms.creator', 'dcterms.creator.aut', 'parsely-author',
	'sailthru.author', 'shareaholic:article_author_name'
}  # questionable: twitter:creator
METANAME_DESCRIPTION = {
	'dc.description', 'dc:description',
	'dcterms.abstract', 'dcterms.description',
	'description', 'sailthru.description', 'twitter:description'
}
METANAME_PUBLISHER = {
	'article:publisher', 'citation_journal_title', 'copyright',
	'dc.publisher', 'dc:publisher', 'dcterms.publisher',
	'publisher'
}  # questionable: citation_publisher
METANAME_TAG = {
	'citation_keywords', 'dcterms.subject', 'keywords', 'parsely-tags',
	'shareaholic:keywords', 'tags'
}
METANAME_TITLE = {
	'citation_title', 'dc.title', 'dcterms.title', 'fb_title',
	'parsely-title', 'sailthru.title', 'shareaholic:title',
	'title', 'twitter:title'
}
OG_AUTHOR = {'og:author', 'og:article:author'}
PROPERTY_AUTHOR = {'author', 'article:author'}
TWITTER_ATTRS = {'twitter:site', 'application-name'}

# also interesting: article:section & og:type

EXTRA_META = {'charset', 'http-equiv', 'property'}


def extract_meta_json(tree, metadata):
	'''Parse and extract metadata from JSON-LD data'''
	for elem in tree.xpath('.//script[@type="application/ld+json" or @type="application/settings+json"]'):
		if not elem.text:
			continue
		element_text = JSON_MINIFY.sub(r'\1', elem.text)
		try:
			schema = json.loads(element_text)
			metadata = extract_json(schema, metadata)
		except json.JSONDecodeError:
			metadata = extract_json_parse_error(element_text, metadata)
	return metadata


def extract_opengraph(tree):
	'''Search meta tags following the OpenGraph guidelines (https://ogp.me/)'''
	title, author, url, description, site_name = (None,) * 5
	# detect OpenGraph schema
	for elem in tree.xpath('.//head/meta[starts-with(@property, "og:")]'):
		# safeguard
		if not elem.get('content'):
			continue
		# site name
		if elem.get('property') == 'og:site_name':
			site_name = elem.get('content')
		# blog title
		elif elem.get('property') == 'og:title':
			title = elem.get('content')
		# orig URL
		elif elem.get('property') == 'og:url':
			if validate_url(elem.get('content'))[0] is True:
				url = elem.get('content')
		# description
		elif elem.get('property') == 'og:description':
			description = elem.get('content')
		# og:author
		elif elem.get('property') in OG_AUTHOR:
			author = elem.get('content')
	# og:type
	# elif elem.get('property') == 'og:type':
	#    pagetype = elem.get('content')
	# og:locale
	# elif elem.get('property') == 'og:locale':
	#    pagelocale = elem.get('content')
	return title, author, url, description, site_name


def examine_meta(tree):
	'''Search meta tags for relevant information'''
	metadata = Document()  # alt: Metadata()
	# bootstrap from potential OpenGraph tags
	title, author, url, description, site_name = extract_opengraph(tree)
	# test if all return values have been assigned
	if all((title, author, url, description, site_name)):  # if they are all defined
		metadata.title, metadata.author, metadata.url, metadata.description, metadata.sitename = title, author, url, description, site_name
		return metadata
	tags, backup_sitename = [], None
	# skim through meta tags
	for elem in tree.iterfind('.//head/meta[@content]'):
		# content
		if not elem.get('content'):
			continue
		content_attr = HTML_STRIP_TAG.sub('', elem.get('content'))
		# image info
		# ...
		# property
		if 'property' in elem.attrib:
			# no opengraph a second time
			if elem.get('property').startswith('og:'):
				continue
			if elem.get('property') == 'article:tag':
				tags.append(normalize_tags(content_attr))
			elif elem.get('property') in PROPERTY_AUTHOR:
				author = normalize_authors(author, content_attr)
			elif elem.get('property') == 'article:publisher':
				site_name = site_name or content_attr
		# name attribute
		elif 'name' in elem.attrib:
			name_attr = elem.get('name').lower()
			# author
			if name_attr in METANAME_AUTHOR:
				author = normalize_authors(author, content_attr)
			# title
			elif name_attr in METANAME_TITLE:
				title = title or content_attr
			# description
			elif name_attr in METANAME_DESCRIPTION:
				description = description or content_attr
			# site name
			elif name_attr in METANAME_PUBLISHER:
				site_name = site_name or content_attr
			elif name_attr in TWITTER_ATTRS or 'twitter:app:name' in elem.get('name'):
				backup_sitename = content_attr
			# url
			elif name_attr == 'twitter:url':
				if url is None and validate_url(content_attr)[0] is True:
					url = content_attr
			# keywords
			elif name_attr in METANAME_TAG:  # 'page-topic'
				tags.append(normalize_tags(content_attr))
		elif 'itemprop' in elem.attrib:
			if elem.get('itemprop') == 'author':
				author = normalize_authors(author, content_attr)
			elif elem.get('itemprop') == 'description':
				description = description or content_attr
			elif elem.get('itemprop') == 'headline':
				title = title or content_attr
		# to verify:
		# elif elem.get('itemprop') == 'name':
		#    if title is None:
		#        title = elem.get('content')
		# other types
		elif all(
				key not in elem.attrib
				for key in EXTRA_META
		):
			LOGGER.debug('unknown attribute: %s',
			             tostring(elem, pretty_print=False, encoding='unicode').strip())
	# backups
	if site_name is None and backup_sitename is not None:
		site_name = backup_sitename
	# copy
	metadata.title, metadata.author, metadata.url, metadata.description, metadata.sitename, metadata.tags = title, author, url, description, site_name, tags
	return metadata


def extract_metainfo(tree, expressions, len_limit=200):
	'''Extract meta information'''
	# try all XPath expressions
	for expression in expressions:
		# examine all results
		i = 0
		for elem in tree.xpath(expression):
			content = trim(' '.join(elem.itertext()))
			if content and 2 < len(content) < len_limit:
				# LOGGER.debug('metadata found in: %s', expression)
				return content
			i += 1
		if i > 1:
			LOGGER.debug('more than one invalid result: %s %s', expression, i)
	return None


def examine_title_element(tree):
	'''Extract text segments out of main <title> element.'''
	title, first, second = None, None, None
	try:
		title = trim(tree.xpath('//head//title')[0].text_content())
		mymatch = HTMLTITLE_REGEX.match(title)
		if mymatch is not None:
			first = mymatch.group(1) or None
			second = mymatch.group(2) or None
	except IndexError:
		LOGGER.warning('no main title found')
	return title, first, second


def extract_title(tree):
	'''Extract the document title'''
	# only one h1-element: take it
	h1_results = tree.xpath('//h1')
	if len(h1_results) == 1:
		title = trim(h1_results[0].text_content())
		if len(title) > 0:
			return title
	# extract using x-paths
	title = extract_metainfo(tree, title_xpaths)
	if title is not None:
		return title
	# extract using title tag
	title, first, second = examine_title_element(tree)
	if first is not None and '.' not in first:
		return first
	if second is not None and '.' not in second:
		return second
	# take first h1-title
	if h1_results:
		return h1_results[0].text_content()
	# take first h2-title
	try:
		title = tree.xpath('//h2')[0].text_content()
	except IndexError:
		LOGGER.warning('no h2 title found')
	return title


def extract_author(tree):
	'''Extract the document author(s)'''
	subtree = prune_unwanted_nodes(deepcopy(tree), author_discard_xpaths)
	author = extract_metainfo(subtree, author_xpaths, len_limit=120)
	if author:
		author = normalize_authors(None, author)
	# copyright?
	return author


def extract_url(tree, default_url=None):
	'''Extract the URL from the canonical link'''
	# https://www.tutorialrepublic.com/html-reference/html-base-tag.php
	# default url as fallback
	url = default_url
	# try canonical link first
	element = tree.find('.//head//link[@rel="canonical"][@href]')
	if element is not None and URL_COMP_CHECK.match(element.attrib['href']):
		url = element.attrib['href']
	# try default language link
	else:
		for element in tree.iterfind('.//head//link[@rel="alternate"][@hreflang]'):
			if (
					element.attrib['hreflang'] == 'x-default'
					and URL_COMP_CHECK.match(element.attrib['href'])
			):
				LOGGER.debug(tostring(element, pretty_print=False, encoding='unicode').strip())
				url = element.attrib['href']
	# add domain name if it's missing
	if url is not None and url.startswith('/'):
		for element in tree.iterfind('.//head//meta[@content]'):
			if 'name' in element.attrib:
				attrtype = element.attrib['name']
			elif 'property' in element.attrib:
				attrtype = element.attrib['property']
			else:
				continue
			if attrtype.startswith('og:') or attrtype.startswith('twitter:'):
				domain_match = re.match(r'https?://[^/]+', element.attrib['content'])
				if domain_match:
					# prepend URL
					url = domain_match.group(0) + url
					break
	# sanity check: don't return invalid URLs
	if url is not None:
		validation_result, parsed_url = validate_url(url)
		url = None if validation_result is False else normalize_url(parsed_url)
	return url


def extract_sitename(tree):
	'''Extract the name of a site from the main title (if it exists)'''
	_, first, second = examine_title_element(tree)
	if first is not None and '.' in first:
		return first
	if second is not None and '.' in second:
		return second
	return None


def extract_catstags(metatype, tree):
	'''Find category and tag information'''
	results = []
	regexpr = '/' + metatype + '[s|ies]?/'
	xpath_expression = categories_xpaths if metatype == 'category' else tags_xpaths
	# search using custom expressions
	for catexpr in xpath_expression:
		results.extend(
			elem.text_content()
			for elem in tree.xpath(catexpr)
			if re.search(regexpr, elem.attrib['href'])
		)
		if results:
			break
	# category fallback
	if metatype == 'category' and not results:
		for element in tree.xpath('.//head//meta[@property="article:section" or contains(@name, "subject")][@content]'):
			results.append(element.attrib['content'])
	# optional: search through links
	#if not results:
	#    for elem in tree.xpath('.//a[@href]'):
	#        search for 'category'
	results = [line_processing(x) for x in results if x is not None]
	return uniquify_list([x for x in results if x is not None])


def parse_license_element(element, strict=False):
	'''Probe a link for identifiable free license cues.
	   Parse the href attribute first and then the link text.'''
	# look for Creative Commons elements
	match = LICENSE_REGEX.search(element.get('href'))
	if match:
		return 'CC ' + match.group(1).upper() + ' ' + match.group(2)
	if element.text is not None:
		# just return the anchor text without further ado
		if strict is False:
			return trim(element.text)
		# else: check if it could be a CC license
		match = TEXT_LICENSE_REGEX.search(element.text)
		if match:
			return match.group(0)
	return None


def extract_license(tree):
	'''Search the HTML code for license information and parse it.'''
	result = None
	# look for links labeled as license
	for element in tree.xpath('//a[@rel="license"][@href]'):
		result = parse_license_element(element, strict=False)
		if result is not None:
			break
	# probe footer elements for CC links
	if result is None:
		for element in tree.xpath(
				'//footer//a[@href]|//div[contains(@class, "footer") or contains(@id, "footer")]//a[@href]'
		):
			result = parse_license_element(element, strict=True)
			if result is not None:
				break
	return result


def extract_metadata(filecontent, default_url=None, date_config=None, fastmode=False, author_blacklist=None):
	"""Main process for metadata extraction.

	Args:
		filecontent: HTML code as string.
		default_url: Previously known URL of the downloaded document.
		date_config: Provide extraction parameters to htmldate as dict().
		author_blacklist: Provide a blacklist of Author Names as set() to filter out authors.

	Returns:
		A dict() containing the extracted metadata information or None.

	"""
	# init
	if author_blacklist is None:
		author_blacklist = set()
	# load contents
	tree = load_html(filecontent)
	if tree is None:
		return None
	# initialize dict and try to strip meta tags
	metadata = examine_meta(tree)
	# to check: remove it and replace with author_blacklist in test case
	if metadata.author is not None and ' ' not in metadata.author:
		metadata.author = None
	# fix: try json-ld metadata and override
	try:
		metadata = extract_meta_json(tree, metadata)
	# todo: fix bugs in json_metadata.py
	except TypeError as err:
		LOGGER.warning('error in JSON metadata extraction: %s', err)
	# try with x-paths
	# title
	if metadata.title is None:
		metadata.title = extract_title(tree)
	# check author in blacklist
	if metadata.author is not None and len(author_blacklist) > 0:
		metadata.author = check_authors(metadata.author, author_blacklist)
	# author
	if metadata.author is None:
		metadata.author = extract_author(tree)
	# recheck author in blacklist
	if metadata.author is not None and len(author_blacklist) > 0:
		metadata.author = check_authors(metadata.author, author_blacklist)
	# url
	if metadata.url is None:
		metadata.url = extract_url(tree, default_url)
	# hostname
	if metadata.url is not None:
		metadata.hostname = extract_domain(metadata.url)
	# extract date with external module htmldate
	if date_config is None:
		# decide on fast mode
		if fastmode is False:
			date_config = HTMLDATE_CONFIG_EXTENSIVE
		else:
			date_config = HTMLDATE_CONFIG_FAST
	date_config['url'] = metadata.url
	metadata.date = find_date(tree, **date_config)
	# sitename
	if metadata.sitename is None:
		metadata.sitename = extract_sitename(tree)
	if metadata.sitename is not None:
		if metadata.sitename.startswith('@'):
			# scrap Twitter ID
			metadata.sitename = re.sub(r'^@', '', metadata.sitename)
		# capitalize
		try:
			if (
					'.' not in metadata.sitename
					and not metadata.sitename[0].isupper()
			):
				metadata.sitename = metadata.sitename.title()
		# fix for empty name
		except IndexError as err:
			LOGGER.warning('error in sitename extraction: %s', err)
	# use URL
	elif metadata.url:
		mymatch = re.match(r'https?://(?:www\.|w[0-9]+\.)?([^/]+)', metadata.url)
		if mymatch:
			metadata.sitename = mymatch.group(1)
	# categories
	if not metadata.categories:
		metadata.categories = extract_catstags('category', tree)
	# tags
	if not metadata.tags:
		metadata.tags = extract_catstags('tag', tree)
	# license
	metadata.license = extract_license(tree)
	# safety checks
	metadata.clean_and_trim()
	# return result
	return metadata


#
def tree_cleaning(tree, include_tables, include_images=False):
	'''Prune the tree by discarding unwanted elements'''
	# determine cleaning strategy, use lists to keep it deterministic
	cleaning_list, stripping_list = \
		MANUALLY_CLEANED.copy(), MANUALLY_STRIPPED.copy()
	if include_tables is False:
		cleaning_list.extend(['table', 'td', 'th', 'tr'])
	if include_images is True:
		# Many websites have <img> inside <figure> or <picture> or <source> tag
		cleaning_list = [e for e in cleaning_list if e
		                 not in ('figure', 'picture', 'source')]
		stripping_list.remove('img')
	# delete targeted elements
	for expression in cleaning_list:
		for element in tree.getiterator(expression):
			try:
				element.drop_tree() # faster when applicable
			except AttributeError:
				element.getparent().remove(element)
	HTML_CLEANER.kill_tags, HTML_CLEANER.remove_tags = cleaning_list, stripping_list
	# save space and processing time
	return HTML_CLEANER.clean_html(prune_html(tree))

#
def convert_tags(tree, include_formatting=False, include_tables=False, include_images=False, include_links=False):
	'''Simplify markup and convert relevant HTML tags to an XML standard'''
	# ul/ol → list / li → item
	for elem in tree.iter('ul', 'ol', 'dl'):
		elem.tag = 'list'
		for subelem in elem.iter('dd', 'dt', 'li'):
			subelem.tag = 'item'
	# images
	if include_images is True:
		for elem in tree.iter('img'):
			elem.tag = 'graphic'
	# delete links for faster processing
	if include_links is False:
		if include_tables is True:
			xpath_expr = '//div//a|//list//a|//table//a'
		else:
			xpath_expr = '//div//a|//list//a'
		# necessary for further detection
		for elem in tree.xpath(xpath_expr):
			elem.tag = 'ref'
		# strip the rest
		strip_tags(tree, 'a')
	else:
		for elem in tree.iter('a', 'ref'):
			elem.tag = 'ref'
			# replace href attribute and delete the rest
			target = elem.get('href') # defaults to None
			elem.attrib.clear()
			if target is not None:
				elem.set('target', target)
	# head tags + delete attributes
	for elem in tree.iter('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
		elem.attrib.clear()
		elem.set('rend', elem.tag)
		elem.tag = 'head'
	# br → lb
	for elem in tree.iter('br', 'hr'):
		elem.tag = 'lb'
	# wbr
	# blockquote, pre, q → quote
	for elem in tree.iter('blockquote', 'pre', 'q'):
		elem.tag = 'quote'
	# include_formatting
	if include_formatting is False:
		strip_tags(tree, 'em', 'i', 'b', 'strong', 'u', 'kbd', 'samp', 'tt', 'var', 'sub', 'sup')
	else:
		# italics
		for elem in tree.iter('em', 'i'):
			elem.tag = 'hi'
			elem.set('rend', '#i')
		# bold font
		for elem in tree.iter('b', 'strong'):
			elem.tag = 'hi'
			elem.set('rend', '#b')
		# u (very rare)
		for elem in tree.iter('u'):
			elem.tag = 'hi'
			elem.set('rend', '#u')
		# tt (very rare)
		for elem in tree.iter('kbd', 'samp', 'tt', 'var'):
			elem.tag = 'hi'
			elem.set('rend', '#t')
		# sub and sup (very rare)
		for elem in tree.iter('sub'):
			elem.tag = 'hi'
			elem.set('rend', '#sub')
		for elem in tree.iter('sup'):
			elem.tag = 'hi'
			elem.set('rend', '#sup')
	# del | s | strike → <del rend="overstrike">
	for elem in tree.iter('del', 's', 'strike'):
		elem.tag = 'del'
		elem.set('rend', 'overstrike')
	# details + summary
	for elem in tree.iter('details'):
		elem.tag = 'div'
		for subelem in elem.iter('summary'):
			subelem.tag = 'head'
	return tree


if include_comments is True:
	commentsbody, temp_comments, len_comments, cleaned_tree = extract_comments(cleaned_tree, deduplicate,
	                                                                           config)

def extract_comments(tree, dedupbool, config):
	'''Try and extract comments out of potential sections in the HTML'''
	comments_body = Element('body')
	# define iteration strategy
	potential_tags = set(TAG_CATALOG)  # 'span'
	# potential_tags.add('div') trouble with <div class="comment-author meta">
	for expr in COMMENTS_XPATH:
		# select tree if the expression has been found
		subtree = tree.xpath(expr)
		if not subtree:
			continue
		subtree = subtree[0]
		# prune
		subtree = prune_unwanted_nodes(subtree, COMMENTS_DISCARD_XPATH)
		# todo: unified stripping function, taking include_links into account
		strip_tags(subtree, 'a', 'ref', 'span')
		# extract content
		# for elem in subtree.xpath('.//*'):
		#    processed_elem = process_comments_node(elem, potential_tags)
		#    if processed_elem is not None:
		#        comments_body.append(processed_elem)
		processed_elems = (process_comments_node(elem, potential_tags, dedupbool, config) for elem in
		                   subtree.xpath('.//*'))
		comments_body.extend(elem for elem in processed_elems if elem is not None)
		# control
		if len(comments_body) > 0:  # if it has children
			LOGGER.debug(expr)
			# remove corresponding subtree
			subtree.getparent().remove(subtree)
			break
	# lengths
	temp_comments = trim(' '.join(comments_body.itertext()))
	return comments_body, temp_comments, len(temp_comments), tree

def prune_unwanted_nodes(tree, nodelist, with_backup=False):
	'''Prune the HTML tree by removing unwanted sections.'''
	if with_backup is True:
		old_len = len(tree.text_content())  # ' '.join(tree.itertext())
		backup = deepcopy(tree)
	for expr in nodelist:
		for subtree in tree.xpath(expr):
			# preserve tail text from deletion
			if subtree.tail is not None:
				previous = subtree.getprevious()
				if previous is None:
					previous = subtree.getparent()
				if previous is not None:
					# There is a previous node, append text to its tail
					if previous.tail is not None:
						previous.tail = ' '.join([previous.tail, subtree.tail])
					else:
						previous.tail = subtree.tail
			# remove the node
			subtree.getparent().remove(subtree)
	if with_backup is False:
		return tree
	# else:
	new_len = len(tree.text_content())
	# todo: adjust for recall and precision settings
	if new_len > old_len/7:
		return tree
	return backup

def strip_tags(tree_or_element, *tag_names): # real signature unknown; restored from __doc__
	"""
	strip_tags(tree_or_element, *tag_names)

		Delete all elements with the provided tag names from a tree or
		subtree.  This will remove the elements and their attributes, but
		*not* their text/tail content or descendants.  Instead, it will
		merge the text content and children of the element into its
		parent.

		Tag names can contain wildcards as in `_Element.iter`.

		Note that this will not delete the element (or ElementTree root
		element) that you passed even if it matches.  It will only treat
		its descendants.

		Example usage::

			strip_tags(some_element,
				'simpletagname',             # non-namespaced tag
				'{http://some/ns}tagname',   # namespaced tag
				'{http://some/other/ns}*'    # any tag from a namespace
				Comment                      # comments (including their text!)
				)
	"""
	pass


def extract_content(tree, favor_precision=False, favor_recall=False, include_tables=False, include_images=False,
                    include_links=False, deduplicate=False, config=None):
	'''Find the main content of a page using a set of XPath expressions,
	   then extract relevant elements, strip them of unwanted subparts and
	   convert them'''
	# backup
	backup_tree = deepcopy(tree)
	# init
	result_body = Element('body')
	potential_tags = set(TAG_CATALOG)
	if include_tables is True:
		potential_tags.update(['table', 'td', 'th', 'tr'])
	if include_images is True:
		potential_tags.add('graphic')
	if include_links is True:
		potential_tags.add('ref')
	# iterate
	for expr in BODY_XPATH:
		# select tree if the expression has been found
		try:
			subtree = tree.xpath(expr)[0]
		except IndexError:
			continue
		# prune the subtree
		subtree = prune_unwanted_sections(subtree, potential_tags, favor_recall, favor_precision)
		subtree = delete_by_link_density(subtree, 'list', backtracking=False, favor_precision=favor_precision)
		if 'table' in potential_tags or favor_precision is True:
			for elem in subtree.iter('table'):
				if link_density_test_tables(elem) is True:
					elem.getparent().remove(elem)
		# skip if empty tree
		if len(subtree) == 0:
			continue
		# no paragraphs containing text, or not enough
		ptest = subtree.xpath('//p//text()')
		if favor_recall is True:
			factor = 5
		elif favor_precision is True:
			factor = 1
		else:
			factor = 3
		if not ptest or len(''.join(ptest)) < config.getint('DEFAULT', 'MIN_EXTRACTED_SIZE') * factor:
			potential_tags.add('div')
		# polish list of potential tags
		if 'ref' not in potential_tags:
			strip_tags(subtree, 'ref')
		if 'span' not in potential_tags:
			strip_tags(subtree, 'span')
		LOGGER.debug(sorted(potential_tags))
		# proper extraction
		subelems = subtree.xpath('.//*')
		# e.g. only lb-elems in a div
		if set(e.tag for e in subelems) == {'lb'}:
			subelems = [subtree]
		# extract content # list(filter(None.__ne__, processed_elems)) ?
		result_body.extend(e for e in
		                   [handle_textelem(e, potential_tags, deduplicate, config) for e in subelems]
		                   if e is not None)
		# remove trailing titles
		while len(result_body) > 0 and (result_body[-1].tag in NOT_AT_THE_END):
			result_body[-1].getparent().remove(result_body[-1])
		# exit the loop if the result has children
		if len(result_body) > 1:
			LOGGER.debug(expr)
			break
	temp_text = trim(' '.join(result_body.itertext()))
	# try parsing wild <p> elements if nothing found or text too short
	# todo: test precision and recall settings here
	if len(result_body) == 0 or len(temp_text) < config.getint('DEFAULT', 'MIN_EXTRACTED_SIZE'):
		result_body = recover_wild_text(backup_tree, result_body, favor_precision=favor_precision,
		                                favor_recall=favor_recall, potential_tags=potential_tags,
		                                deduplicate=deduplicate, config=config)
		temp_text = trim(' '.join(result_body.itertext()))
	# filter output
	strip_elements(result_body, 'done')
	strip_tags(result_body, 'div')
	# return
	return result_body, temp_text, len(temp_text)

@lru_cache(maxsize=32)
def sanitize(text):
	'''Convert text and discard incompatible and invalid characters'''
	try:
		#returnlines = []
		#for line in text.splitlines():
		#    returnlines.append(line_processing(line))
		# return '\n'.join(list(filter(None.__ne__, returnlines)))
		return '\n'.join([l for l in (line_processing(l) for l in text.splitlines()) if l is not None])
	# return '\n'.join([l for l in map(line_processing, text.splitlines()) if l is not None])
	except AttributeError:
		return None





class Sanitizer:
	from html.entities import html5 as _html5

	_charref = re.compile(r'&(#[0-9]+;?'
	                      r'|#[xX][0-9a-fA-F]+;?'
	                      r'|[^\t\n\f <&#;]{1,32};?)')

	_invalid_charrefs = {
		0x00: '\ufffd',  # REPLACEMENT CHARACTER
		0x0d: '\r',      # CARRIAGE RETURN
		0x80: '\u20ac',  # EURO SIGN
		0x81: '\x81',    # <control>
		0x82: '\u201a',  # SINGLE LOW-9 QUOTATION MARK
		0x83: '\u0192',  # LATIN SMALL LETTER F WITH HOOK
		0x84: '\u201e',  # DOUBLE LOW-9 QUOTATION MARK
		0x85: '\u2026',  # HORIZONTAL ELLIPSIS
		0x86: '\u2020',  # DAGGER
		0x87: '\u2021',  # DOUBLE DAGGER
		0x88: '\u02c6',  # MODIFIER LETTER CIRCUMFLEX ACCENT
		0x89: '\u2030',  # PER MILLE SIGN
		0x8a: '\u0160',  # LATIN CAPITAL LETTER S WITH CARON
		0x8b: '\u2039',  # SINGLE LEFT-POINTING ANGLE QUOTATION MARK
		0x8c: '\u0152',  # LATIN CAPITAL LIGATURE OE
		0x8d: '\x8d',    # <control>
		0x8e: '\u017d',  # LATIN CAPITAL LETTER Z WITH CARON
		0x8f: '\x8f',    # <control>
		0x90: '\x90',    # <control>
		0x91: '\u2018',  # LEFT SINGLE QUOTATION MARK
		0x92: '\u2019',  # RIGHT SINGLE QUOTATION MARK
		0x93: '\u201c',  # LEFT DOUBLE QUOTATION MARK
		0x94: '\u201d',  # RIGHT DOUBLE QUOTATION MARK
		0x95: '\u2022',  # BULLET
		0x96: '\u2013',  # EN DASH
		0x97: '\u2014',  # EM DASH
		0x98: '\u02dc',  # SMALL TILDE
		0x99: '\u2122',  # TRADE MARK SIGN
		0x9a: '\u0161',  # LATIN SMALL LETTER S WITH CARON
		0x9b: '\u203a',  # SINGLE RIGHT-POINTING ANGLE QUOTATION MARK
		0x9c: '\u0153',  # LATIN SMALL LIGATURE OE
		0x9d: '\x9d',    # <control>
		0x9e: '\u017e',  # LATIN SMALL LETTER Z WITH CARON
		0x9f: '\u0178',  # LATIN CAPITAL LETTER Y WITH DIAERESIS
	}

	_invalid_codepoints = {
		# 0x0001 to 0x0008
		0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8,
		# 0x000E to 0x001F
		0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19,
		0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f,
		# 0x007F to 0x009F
		0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a,
		0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96,
		0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f,
		# 0xFDD0 to 0xFDEF
		0xfdd0, 0xfdd1, 0xfdd2, 0xfdd3, 0xfdd4, 0xfdd5, 0xfdd6, 0xfdd7, 0xfdd8,
		0xfdd9, 0xfdda, 0xfddb, 0xfddc, 0xfddd, 0xfdde, 0xfddf, 0xfde0, 0xfde1,
		0xfde2, 0xfde3, 0xfde4, 0xfde5, 0xfde6, 0xfde7, 0xfde8, 0xfde9, 0xfdea,
		0xfdeb, 0xfdec, 0xfded, 0xfdee, 0xfdef,
		# others
		0xb, 0xfffe, 0xffff, 0x1fffe, 0x1ffff, 0x2fffe, 0x2ffff, 0x3fffe, 0x3ffff,
		0x4fffe, 0x4ffff, 0x5fffe, 0x5ffff, 0x6fffe, 0x6ffff, 0x7fffe, 0x7ffff,
		0x8fffe, 0x8ffff, 0x9fffe, 0x9ffff, 0xafffe, 0xaffff, 0xbfffe, 0xbffff,
		0xcfffe, 0xcffff, 0xdfffe, 0xdffff, 0xefffe, 0xeffff, 0xffffe, 0xfffff,
		0x10fffe, 0x10ffff
	}

	@classmethod
	def _replace_charref(cls,s):
		s = s.group(1)
		if s[0] == '#':
			# numeric charref
			if s[1] in 'xX':
				num = int(s[2:].rstrip(';'), 16)
			else:
				num = int(s[1:].rstrip(';'))
			if num in cls._invalid_charrefs:
				return cls._invalid_charrefs[num]
			if 0xD800 <= num <= 0xDFFF or num > 0x10FFFF:
				return '\uFFFD'
			if num in cls._invalid_codepoints:
				return ''
			return chr(num)
		else:
			# named charref
			if s in cls._html5:
				return cls._html5[s]
			# find the longest matching name (as defined by the standard)
			for x in range(len(s)-1, 1, -1):
				if s[:x] in cls._html5:
					return cls._html5[s[:x]] + s[x:]
			else:
				return '&' + s


	@classmethod
	def unescape(cls,s):
		"""
		Convert all named and numeric character references (e.g. &gt;, &#62;,
		&x3e;) in the string s to the corresponding unicode characters.
		This function uses the rules defined by the HTML 5 standard
		for both valid and invalid character references, and the list of
		HTML 5 named character references defined in html.entities.html5.
		"""
		if '&' not in s:
			return s
		return cls._charref.sub(cls._replace_charref, s)

	@classmethod
	def escape(cls, s, quote=True):
		"""
		Replace special characters "&", "<" and ">" to HTML-safe sequences.
		If the optional flag quote is true (the default), the quotation mark
		characters, both double quote (") and single quote (') characters are also
		translated.
		"""
		s = s.replace("&", "&amp;") # Must be done first!
		s = s.replace("<", "&lt;")
		s = s.replace(">", "&gt;")
		if quote:
			s = s.replace('"', "&quot;")
			s = s.replace('\'', "&#x27;")
		return s



class Serializer:
	TEI_SCHEMA = str(Path(__file__).parent / 'data/tei-schema-pickle.lzma')
	TEI_VALID_TAGS = {'body', 'cell', 'code', 'del', 'div', 'fw', 'graphic', 'head', 'hi', \
	                  'item', 'lb', 'list', 'p', 'quote', 'ref', 'row', 'table'}
	TEI_VALID_ATTRS = {'rend', 'rendition', 'role', 'target', 'type'}
	TEI_RELAXNG = None # to be downloaded later if necessary

	CONTROL_PARSER = XMLParser(remove_blank_text=True)

	NEWLINE_ELEMS = {'code', 'fw', 'graphic', 'head', 'lb', 'list', 'p', 'quote', 'row', 'table'}
	SPECIAL_FORMATTING = {'del', 'head', 'hi'}


	@classmethod
	def xmltotxt(cls, xmloutput, include_formatting):
		'''Convert to plain text format and optionally preserve formatting as markdown.'''
		returnlist = []
		# strip_tags(xmloutput, 'div', 'main', 'span')
		# iterate and convert to list of strings
		for element in xmloutput.iter('*'):
			if element.text is None and element.tail is None:
				if element.tag == 'graphic':
					# add source, default to ''
					text = element.get('title', '')
					if element.get('alt') is not None:
						text += ' ' + element.get('alt')
					returnlist.extend(['![', text, ']', '(', element.get('src', ''), ')'])
				# newlines for textless elements
				if element.tag in ('graphic', 'row', 'table'):
					returnlist.append('\n')
				continue
			# process text
			textelement = replace_element_text(element, include_formatting)
			# common elements
			if element.tag in NEWLINE_ELEMS:
				returnlist.extend(['\n', textelement, '\n'])
			# particular cases
			elif element.tag == 'item':
				returnlist.extend(['\n- ', textelement, '\n'])
			elif element.tag == 'cell':
				returnlist.extend(['|', textelement, '|'])
			elif element.tag == 'comments':
				returnlist.append('\n\n')
			else:
				if element.tag not in SPECIAL_FORMATTING:
					LOGGER.debug('unprocessed element in output: %s', element.tag)
				returnlist.extend([textelement, ' '])
		return unescape(sanitize(''.join(returnlist)))

	def replace_element_text(element, include_formatting):
		'''Determine element text based on text and tail'''
		full_text = ''
		# handle formatting: convert to markdown
		if include_formatting is True:
			if element.tag in ('del', 'head') and element.text is not None:
				if element.tag == 'head':
					try:
						number = int(element.get('rend')[1])
					except (TypeError, ValueError):
						number = 2
					element.text = ''.join(['='*number, ' ', element.text, ' ', '='*number])
				elif element.tag == 'del':
					element.text = ''.join(['~~', element.text, '~~'])
			elif element.tag == 'hi':
				if element.get('rend') == '#b':
					element.text = ''.join(['**', element.text, '**'])
				elif element.get('rend') == '#i':
					element.text = ''.join(['*', element.text, '*'])
				elif element.get('rend') == '#u':
					element.text = ''.join(['__', element.text, '__'])
				elif element.get('rend') == '#t':
					element.text = ''.join(['`', element.text, '`'])
		# handle links
		if element.tag == 'ref':
			try:
				element.text = ''.join(['[', element.text, ']', '(', element.get('target'), ')'])
			except TypeError:
				LOGGER.warning('missing link attribute: %s %s', element.text, element.attrib)
				try:
					element.text = ''.join(['[', element.text, ']'])
				except TypeError:
					LOGGER.error('empty link: %s %s', element.text, element.attrib)
		# handle text
		if element.text is not None and element.tail is not None:
			full_text = ''.join([element.text, element.tail])
		elif element.text is not None:
			full_text = element.text
		elif element.tail is not None:
			full_text = element.tail
		return full_text




strip_tags(subtree, 'a', 'ref', 'span')

if favor_precision is True:
	cleaned_tree = prune_unwanted_nodes(cleaned_tree, REMOVE_COMMENTS_XPATH)


postbody, temp_text, len_text = extract_content(cleaned_tree, favor_precision, favor_recall, include_tables,
                                                include_images, include_links, deduplicate, config)

document.text = xmltotxt(postbody, include_formatting)
document = {slot: getattr(document, slot, None) for slot in document.__slots__}