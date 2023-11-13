---
created_on: 2023/01/02 15:03
kind:
tags:
---

# LearnVim

```
This plugin adds four main commands in normal mode
```

cs: To change the surroundings.
ds: To delete the surroundings.
ys: To add surroundings.
S: To surround the currently selected text.
The following are some commands that I usually use. However, you can check the documentation for more:

cs”’: Change the surrounding from double quotes to single quotes.
ds”: Delete the closest double-quotes surroundings.
ysiw<b>: Surround the current word with <b> tag (iw means inner word.)

Plug 'terryma/vim-multiple-cursors'

This plugin adds three main commands in normal mode

<ALT-n>: Start multi cursor mode, select the current word, or select the next occurrence. <ALT-x>: deselect the current occurrence and go to the next one. <ALT-p>: deselect the current occurrence and go to the previous one.
C-c/Esc: to exit the mode

___

Usage
This plugin adds three main commands in normal mode

cx + motion: Select the first bloc to swap or select the second, and perform the swap.
cxx : Similar to cx but for the current line.
X: Similar to cx but for the select text.
cxc: Cancel pending exchange.

Plug 'tommcdo/vim-exchange'

___

Plug ‘michaeljsmith/vim-indent-object’

This plugin adds three text objects:

ii: Indent level.
ai: Indent level plus one line above
aI: Indent level plus one line above and below.

gcii: Comment all the instructions inside the same indent level.
cxii: Exchange an indent level.
dai: To delete an if statement and all its instructions.

Plug 'vim-scripts/argtextobj.vim'

___

Plug 'vim-scripts/ReplaceWithRegister'
\_\_
Plug 'machakann/vim-highlightedyank'
let g:highlightedyank\_highlight\_duration = DURATION\_IN\_MILLISECONDS

___

nnoremap <c-t> :action ActivateTerminalToolWindow<CR>
nnoremap <leader>t :action Terminal.OpenInTerminal<CR>

set ideajoin
set idearefactormode=keep
vnoremap < <gv
vnoremap > >gv
nnoremap [[ :action MethodUp<CR>
nnoremap ]] :action MethodDown<CR>
nnoremap zc :action CollapseRegion<CR>
nnoremap zo :action ExpandRegion<CR>
nnoremap <leader>zc :action CollapseAllRegions<CR>
nnoremap <leader>zo :action ExpandAllRegions<CR>
nnoremap <leader>c :action CommentByLineComment<CR>
nnoremap <leader>r :action Refactorings.QuickListPopupAction<CR>
nnoremap <Leader>=  :action ReformatCode<CR>
nnoremap <leader>o :action OptimizeImports<CR>
nnoremap <c-r> :action RecentFiles<CR>
nnoremap <leader>l :action RecentLocations<CR>
nnoremap <leader>h  :action LocalHistory.ShowHistory<CR>
nnoremap ge :action GotoNextError<CR>
nnoremap gE :action GotoPreviousError<CR>

___

set incsearch
nnoremap <c-/> :action FindInPath<CR>
nnoremap <c-a> :action GotoAction<CR>
nnoremap <c-f> :action GotoFile<CR>
nnoremap <leader>u :action FindUsages<CR>
nnoremap <leader>s :action GotoRelated<CR>
nnoremap <leader>h :action CallHierarchy<CR>
nnoremap <leader>b :action ShowNavBar<CR>
nnoremap <c-s> :action FileStructurePopup<CR>
nnoremap <c-o> :action GotoSymbol<CR>
nnoremap gc :action GotoClass<CR>
nnoremap gi :action GotoImplementation<CR>
nnoremap gd :action GotToDeclaration<CR>
nnoremap gp :action GotToSuperMethod<CR>
nnoremap gt :action GotoTest<CR>
nnoremap gb :action Back<CR>
nnoremap gf :action Forward<CR>

___

nnoremap ,r :action ContextRun<CR>
nnoremap ,c :action RunClass<CR>
nnoremap ,f :action ChooseRunConfiguration<CR>
nnoremap ,t :action ActivateRunToolWindow<CR>
nnoremap ,u :action Rerun<CR>
nnoremap ,f :action RerunFailedTests<CR>

___

Unquote a word that's enclosed in single quotes\
`di'hPl2x`

- `di'` - Delete the word enclosed by single quotes.
- `hP` - Move the cursor left one place (on top of the opening quote) and put the just deleted text before the quote.
- `l` - Move the cursor right one place (on top of the opening quote).
- `2x` - Delete the two quotes.

___

<https://learnvimscriptthehardway.stevelosh.com/chapters/06.html>

<https://learnvimscriptthehardway.stevelosh.com/chapters/08.html>

:inoremap jk <esc>

<https://learnvimscriptthehardway.stevelosh.com/chapters/12.html>

<https://learnvimscriptthehardway.stevelosh.com/chapters/13.html>

<https://learnvimscriptthehardway.stevelosh.com/chapters/15.html>

<https://learnvimscriptthehardway.stevelosh.com/chapters/16.html>

<https://learnvimscriptthehardway.stevelosh.com/chapters/50.html>

<http://vimdoc.sourceforge.net/htmldoc/digraph.html>

<https://github.com/JetBrains/ideavim/wiki/Emulated-plugins>

here are no such commands as dd, yy, or cc. For example, dd is not a separate command for deleting the line, but a d command with a d motion.
Wait, but there isn't a d motion in Vim! That’s right, and that’s why Vim has a dedicated set of commands for which it checks whether the command equals to motion and if so, it executes *motion instead.
\_ is an interesting motion that isn't even documented in vi, and it refers to the current line. So, commands like dd, yy, and similar ones are simply translated to d*, y\_, etc. Here is the source of this knowledge.

You can use g- or g+ to go between text-states. To go to a text state 1 minute earlier, you can use:

Vim has some special marks which it sets automatically. Here are some of the most useful:

| Command              | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| `` `. ``             | jump to position where last change occurred in current buffer |
| `` `" ``             | jump to position where last exited current buffer             |
| `` `0 ``             | jump to position in last file edited (when exited Vim)        |
| `` `1 ``             | like `` `0 `` but the previous file (also `` `2 `` etc)       |
| `''`                 | jump back (to line in current buffer where jumped from)       |
| ` `` `               | jump back (to position in current buffer where jumped from)   |
| `` `[ `` or `` `] `` | jump to beginning/end of previously changed or yanked text    |
| `` `< `` or `` `> `` | jump to beginning/end of last visual selection                |

___

<https://www.reddit.com/r/vim/comments/o8k0xd/is_there_a_modification_to_make_the_dot_command/>

___

<https://plugins.jetbrains.com/plugin/19162-ideavimmulticursor>

___

todo:

alt + setas == move

___

## Not sure

WTF

|gi|  change.insert.InsertAtPreviousInsertAction
|c\_CTRL-\[|  com.maddyhome.idea.vim.ui.ex.EscapeCharAction
|c\_<Esc>|  com.maddyhome.idea.vim.ui.ex.EscapeCharAction
|gn|  motion.gn.GnNextTextObject
|gN|  motion.gn.GnPreviousTextObject
|gn|  motion.gn.VisualSelectNextSearch
|gh|  motion.select.SelectEnableCharacterModeAction
|CTRL-M|  motion.updown.MotionDownFirstNonSpaceAction

## Good

Leader Key

|<Space>|  motion.leftright.MotionRightWrapAction

___

Text Nav

|u|  change.UndoAction
|c|  change.change.ChangeMotionAction
|d|  change.delete.DeleteMotionAction
|a|  change.insert.InsertAfterCursorAction
|p|  copy.PutTextAfterCursorAction
|gp|  copy.PutTextAfterCursorActionMoveCursor
|P|  copy.PutTextBeforeCursorAction
|gP|  copy.PutTextBeforeCursorActionMoveCursor
|gp|  copy.PutVisualTextAfterCursorMoveCursorAction
|gP|  copy.PutVisualTextBeforeCursorMoveCursorAction
|y|  copy.YankMotionAction
|T|  motion.leftright.MotionLeftTillMatchCharAction
|t|  motion.leftright.MotionRightTillMatchCharAction
|gD|  motion.search.GotoDeclarationAction
|gd|  motion.search.GotoDeclarationAction
|gE|  motion.text.MotionBigWordEndLeftAction
|E|  motion.text.MotionBigWordEndRightAction
|B|  motion.text.MotionBigWordLeftAction
|W|  motion.text.MotionBigWordRightAction
|go|  motion.text.MotionNthCharacterAction
|ge|  motion.text.MotionWordEndLeftAction
|e|  motion.text.MotionWordEndRightAction
|b|  motion.text.MotionWordLeftAction
|w|  motion.text.MotionWordRightAction
|v|  motion.visual.VisualToggleCharacterModeAction
|cc| translated to c\_
|dd| translated to d\_
|yy| translated to y\_

___

Directionals

|i\_<NL>|  change.insert.InsertEnterAction
|i\_<CR>|  change.insert.InsertEnterAction
|i\_<Esc>|  change.insert.InsertExitModeAction
|i\_<Insert>|  change.insert.InsertInsertAction
|i\_<Down>|  editor.VimEditorDown
|i\_<Up>|  editor.VimEditorUp
|<Left>|  motion.leftright.MotionArrowLeftAction
|<Right>|  motion.leftright.MotionArrowRightAction

|i\_<Left>|  motion.leftright.MotionLeftInsertModeAction
|i\_<Right>|  motion.leftright.MotionRightInsertAction
|<ESC>|  motion.select.SelectEscapeAction
|<Left>|  motion.select.motion.SelectMotionLeftAction
|<Right>|  motion.select.motion.SelectMotionRightAction
|<C-Left>|  motion.text.MotionWordLeftAction
|i\_<C-Left>|  motion.text.MotionWordLeftInsertAction
|<C-Right>|  motion.text.MotionWordRightAction
|i\_<C-Right>|  motion.text.MotionWordRightInsertAction
|g<Up>|  motion.updown.MotionUpNotLineWiseAction
|gk|  motion.updown.MotionUpNotLineWiseAction

___

These are navigations that i'd rather have operate slightly different.
|<End>|  motion.leftright.MotionEndAction
|<Home>|  motion.leftright.MotionHomeAction
|i\_<Home>|  motion.leftright.MotionFirstColumnInsertModeAction
|i\_<End>|  motion.leftright.MotionLastColumnInsertAction
|<S-End>|  motion.leftright.MotionShiftEndAction
|<S-Home>|  motion.leftright.MotionShiftHomeAction
|<S-Left>|  motion.leftright.MotionShiftLeftAction
|<S-Left>|  motion.leftright.MotionShiftLeftAction
|<S-Right>|  motion.leftright.MotionShiftRightAction
|<S-Right>|  motion.leftright.MotionShiftRightAction
|<C-Down>|  motion.scroll.CtrlDownAction
|<C-Up>|  motion.scroll.CtrlUpAction
|CTRL-D|  motion.scroll.MotionScrollHalfPageDownAction
|CTRL-U|  motion.scroll.MotionScrollHalfPageUpAction
|i\_<S-Down>|  motion.scroll.MotionScrollPageDownInsertModeAction
|i\_<S-Up>|  motion.scroll.MotionScrollPageUpInsertModeAction
|i\_<S-Left>|  motion.text.MotionWordLeftInsertAction
|i\_<S-Right>|  motion.text.MotionWordRightInsertAction
|<Down>|  motion.updown.MotionArrowDownAction
|<Down>|  motion.updown.MotionArrowDownAction
|<Up>|  motion.updown.MotionArrowUpAction
|<Up>|  motion.updown.MotionArrowUpAction
|<C-Home>|  motion.updown.MotionGotoLineFirstAction
|i\_<C-Home>|  motion.updown.MotionGotoLineFirstInsertAction
|<C-End>|  motion.updown.MotionGotoLineLastEndAction
|i\_<C-End>|  motion.updown.MotionGotoLineLastEndInsertAction
|<S-Down>|  motion.updown.MotionShiftDownAction
|<S-Down>|  motion.updown.MotionShiftDownAction
|<S-Up>|  motion.updown.MotionShiftUpAction
|<S-Up>|  motion.updown.MotionShiftUpAction

___

Search and Jump

|''|
|g&|  change.change.ChangeLastGlobalSearchReplaceAction
|&|  change.change.ChangeLastSearchReplaceAction
|;|  motion.leftright.MotionLastMatchCharAction
|,|  motion.leftright.MotionLastMatchCharReverseAction
|'|  motion.mark.MotionGotoMarkLineAction
|/|  motion.search.SearchEntryFwdAction
|?|  motion.search.SearchEntryRevAction
|#|  motion.search.SearchWholeWordBackwardAction
|star|  motion.search.SearchWholeWordForwardAction
|g#|  motion.search.SearchWordBackwardAction
|gstar|  motion.search.SearchWordForwardAction
|%|  motion.updown.MotionPercentOrMatchAction

___

Visual

|v\_<Esc>|  motion.visual.VisualExitModeAction
|v\_O|  motion.visual.VisualSwapEndsBlockAction
|v\_o|  motion.visual.VisualSwapEndsAction
|v\_p|  copy.PutVisualTextAfterCursorAction
|v\_P|  copy.PutVisualTextBeforeCursorAction
|v\_c|  change.change.ChangeVisualAction
|v\_d|  change.delete.DeleteVisualAction
|v\_y| copy.YankVisualAction

___

Meta

|.|  change.RepeatChangeAction
\|:|  ExEntryAction
\|:map|  commands.mapping.MapCommand
\|:nmap| ...
\|:vmap| ...
\|:omap| ...
\|:imap| ...
\|:cmap| ...
\|:noremap| ...
\|:nnoremap| ...
\|:vnoremap| ...
\|:onoremap| ...
\|:inoremap| ...
\|:cnoremap| ...

## Suboptimal

___

These premium spots should not be 1 char.

|f|  motion.leftright.MotionRightMatchCharAction
|F|  motion.leftright.MotionLeftMatchCharAction
|n|  motion.search.SearchAgainNextAction
|N|  motion.search.SearchAgainPreviousAction

___

More cohesive groups

|K|  editor.VimQuickJavaDoc
|zC|  fold.VimCollapseRegionRecursively
|zM|  fold.VimCollapseAllRegions
|zR|  fold.VimExpandAllRegions
|zO|  fold.VimExpandRegionRecursively
|zc|  fold.VimCollapseRegion
|zo|  fold.VimExpandRegion
|gq|  change.change.ReformatCodeMotionAction
|v\_gq|  change.change.ReformatCodeVisualAction
|J|  change.delete.DeleteJoinLinesSpacesAction
|gJ|  change.delete.DeleteJoinLinesAction
|v\_J|  change.delete.DeleteJoinVisualLinesSpacesAction
|v\_gJ|  change.delete.DeleteJoinVisualLinesAction

___

___

## Motions

|\[p|  copy.PutTextAfterCursorNoIndentAction
|]p|  copy.PutTextAfterCursorNoIndentAction
|\[P|  copy.PutTextBeforeCursorNoIndentAction
|]P|  copy.PutTextBeforeCursorNoIndentAction
|\[p|  copy.PutVisualTextAfterCursorNoIndentAction
|]p|  copy.PutVisualTextAfterCursorNoIndentAction
|\[P|  copy.PutVisualTextBeforeCursorNoIndentAction
|]P|  copy.PutVisualTextBeforeCursorNoIndentAction
|v\_iW|  motion.object.MotionInnerBigWordAction
|v\_i<|  motion.object.MotionInnerBlockAngleAction
|v\_i>|  motion.object.MotionInnerBlockAngleAction
|v\_i`|  motion.object.MotionInnerBlockBackQuoteAction
|v_iB|  motion.object.MotionInnerBlockBraceAction
|v_i{|  motion.object.MotionInnerBlockBraceAction
|v_i}|  motion.object.MotionInnerBlockBraceAction
|v_i[|  motion.object.MotionInnerBlockBracketAction
|v_i]|  motion.object.MotionInnerBlockBracketAction
|v_iquote|  motion.object.MotionInnerBlockDoubleQuoteAction
|v_i(|  motion.object.MotionInnerBlockParenAction
|v_i)|  motion.object.MotionInnerBlockParenAction
|v_ib|  motion.object.MotionInnerBlockParenAction
|v_i'|  motion.object.MotionInnerBlockSingleQuoteAction
|v_it|  motion.object.MotionInnerBlockTagAction
|v_ip|  motion.object.MotionInnerParagraphAction
|v_is|  motion.object.MotionInnerSentenceAction
|v_iw|  motion.object.MotionInnerWordAction
|v_aW|  motion.object.MotionOuterBigWordAction
|v_a<|  motion.object.MotionOuterBlockAngleAction
|v_a>|  motion.object.MotionOuterBlockAngleAction
|v_a`|  motion.object.MotionOuterBlockBackQuoteAction
|v\_aB|  motion.object.MotionOuterBlockBraceAction
|v\_a{|  motion.object.MotionOuterBlockBraceAction
|v\_a}|  motion.object.MotionOuterBlockBraceAction
|v\_a\[|  motion.object.MotionOuterBlockBracketAction
|v\_a]|  motion.object.MotionOuterBlockBracketAction
|v\_aquote|  motion.object.MotionOuterBlockDoubleQuoteAction
|v\_a(|  motion.object.MotionOuterBlockParenAction
|v\_a)|  motion.object.MotionOuterBlockParenAction
|v\_ab|  motion.object.MotionOuterBlockParenAction
|v\_a'|  motion.object.MotionOuterBlockSingleQuoteAction
|v\_at|  motion.object.MotionOuterBlockTagAction
|v\_ap|  motion.object.MotionOuterParagraphAction
|v\_as|  motion.object.MotionOuterSentenceAction
|v\_aw|  motion.object.MotionOuterWordAction
|]b|  motion.text.MotionCamelEndLeftAction
|]w|  motion.text.MotionCamelEndRightAction
|\[b|  motion.text.MotionCamelLeftAction
|\[w|  motion.text.MotionCamelRightAction
|]M|  motion.text.MotionMethodNextEndAction
|\[M|  motion.text.MotionMethodPreviousEndAction
|]m|  motion.text.MotionMethodNextStartAction
|\[m|  motion.text.MotionMethodPreviousStartAction
|}|  motion.text.MotionParagraphNextAction
|{|  motion.text.MotionParagraphPreviousAction
|\[]|  motion.text.MotionSectionBackwardEndAction
|[[|  motion.text.MotionSectionBackwardStartAction
|]\[|  motion.text.MotionSectionForwardEndAction
|]]|  motion.text.MotionSectionForwardStartAction
|g)|  motion.text.MotionSentenceNextEndAction
|)|  motion.text.MotionSentenceNextStartAction
|g(|  motion.text.MotionSentencePreviousEndAction
|(|  motion.text.MotionSentencePreviousStartAction
|]}|  motion.text.MotionUnmatchedBraceCloseAction
|\[{|  motion.text.MotionUnmatchedBraceOpenAction
|])|  motion.text.MotionUnmatchedParenCloseAction
|\[(|  motion.text.MotionUnmatchedParenOpenAction
|\_|  motion.updown.MotionDownLess1FirstNonSpaceAction

## ??? Whatever

Good to know, but i use only during macros / mappings.

|gu|  change.change.ChangeCaseLowerMotionAction
|g\~|  change.change.ChangeCaseToggleMotionAction
|gU|  change.change.ChangeCaseUpperMotionAction
|gI|  change.insert.InsertLineStartAction
|i\_CTRL-A|  change.insert.InsertPreviousInsertAction
|i\_CTRL-@|  change.insert.InsertPreviousInsertExitAction
|@|  macro.PlaybackRegisterAction
|gN|  motion.gn.VisualSelectPreviousSearch
|bar|  motion.leftright.MotionColumnAction
|0|  motion.leftright.MotionFirstColumnAction
|^|  motion.leftright.MotionFirstNonSpaceAction
|g0|  motion.leftright.MotionFirstScreenColumnAction
|g<Home>|  motion.leftright.MotionFirstScreenColumnAction
|[[2022-07-31]]|  motion.leftright.MotionFirstScreenNonSpaceAction
|$|  motion.leftright.MotionLastColumnAction
|g\_|  motion.leftright.MotionLastNonSpaceAction
|g$|  motion.leftright.MotionLastScreenColumnAction
|g<End>|  motion.leftright.MotionLastScreenColumnAction
|v\_`|  motion.mark.MotionGotoFileMarkAction
|v_'|  motion.mark.MotionGotoFileMarkLineAction
|v_g'|  motion.mark.MotionGotoFileMarkLineNoSaveJumpAction
|v_g`|  motion.mark.MotionGotoFileMarkNoSaveJumpAction
|`|  motion.mark.MotionGotoMarkAction
|g'|  motion.mark.MotionGotoMarkLineNoSaveJumpAction
|g`|  motion.mark.MotionGotoMarkNoSaveJumpAction
|CTRL-I|  motion.mark.MotionJumpNextAction
|CTRL-O|  motion.mark.MotionJumpPreviousAction
|m|  motion.mark.MotionMarkAction
|H|  motion.screen.MotionFirstScreenLineAction
|L|  motion.screen.MotionLastScreenLineAction
|M|  motion.screen.MotionMiddleScreenLineAction
|H|  motion.screen.MotionOpPendingFirstScreenLineAction
|L|  motion.screen.MotionOpPendingLastScreenLineAction
|g\_CTRL-H|  motion.select.SelectEnableBlockModeAction
|CTRL-N|  motion.updown.MotionDownCtrlNAction
|+|  motion.updown.MotionDownFirstNonSpaceAction
|gg|  motion.updown.MotionGotoLineFirstAction
|G|  motion.updown.MotionGotoLineLastAction
|CTRL-P|  motion.updown.MotionUpCtrlPAction
\|-|  motion.updown.MotionUpFirstNonSpaceAction
|gv|  motion.visual.VisualSelectPreviousAction
|v\_gv|  motion.visual.VisualSwapSelectionsAction

___

Not sure why these default exists, but whatever

|i\_CTRL-\_CTRL-N|  ResetModeAction
|v\_u|  change.change.ChangeCaseLowerVisualAction
|v\_U|  change.change.ChangeCaseUpperVisualAction
|<Insert>|  change.insert.InsertBeforeCursorAction
|c\_CTRL-C|  com.maddyhome.idea.vim.ui.ex.CancelEntryAction
|c\_CTRL-J|  com.maddyhome.idea.vim.ui.ex.CompleteEntryAction
|c\_<CR>|  com.maddyhome.idea.vim.ui.ex.CompleteEntryAction
|c\_<NL>|  com.maddyhome.idea.vim.ui.ex.CompleteEntryAction
|c\_CTRL-H|  com.maddyhome.idea.vim.ui.ex.DeletePreviousCharAction
|c\_<BS>|  com.maddyhome.idea.vim.ui.ex.DeletePreviousCharAction
|c\_CTRL-W|  com.maddyhome.idea.vim.ui.ex.DeletePreviousWordAction
|c\_CTRL-U|  com.maddyhome.idea.vim.ui.ex.DeleteToCursorAction
|c\_<PageDown>|  com.maddyhome.idea.vim.ui.ex.HistoryDownAction
|c\_<S-Down>|  com.maddyhome.idea.vim.ui.ex.HistoryDownAction
|c\_CTRL-N|  com.maddyhome.idea.vim.ui.ex.HistoryDownAction
|c\_<Down>|  com.maddyhome.idea.vim.ui.ex.HistoryDownFilterAction
|c\_<PageUp>|  com.maddyhome.idea.vim.ui.ex.HistoryUpAction
|c\_<S-Up>|  com.maddyhome.idea.vim.ui.ex.HistoryUpAction
|c\_CTRL-P|  com.maddyhome.idea.vim.ui.ex.HistoryUpAction
|c\_<Up>|  com.maddyhome.idea.vim.ui.ex.HistoryUpFilterAction
|c\_CTRL-R|  com.maddyhome.idea.vim.ui.ex.InsertRegisterAction
|c\_<Insert>|  com.maddyhome.idea.vim.ui.ex.ToggleInsertReplaceAction
|c\_CTRL-M|  ex.ProcessExEntryAction
|ga|  file.FileGetAsciiAction
|g8|  file.FileGetHexAction
|g\_CTRL-G|  file.FileGetLocationInfoAction
|ZZ|  file.FileSaveCloseAction
|ZQ|  file.FileSaveCloseAction
|c\_<Left>|  javax.swing.text.DefaultEditorKit#backwardAction
|c\_CTRL-B|  javax.swing.text.DefaultEditorKit#beginLineAction
|c\_<Home>|  javax.swing.text.DefaultEditorKit#beginLineAction
|c\_<Del>|  javax.swing.text.DefaultEditorKit#deleteNextCharAction
|c\_CTRL-E|  javax.swing.text.DefaultEditorKit#endLineAction
|c\_<End>|  javax.swing.text.DefaultEditorKit#endLineAction
|c\_<Right>|  javax.swing.text.DefaultEditorKit#forwardAction
|c\_<C-Right>|  javax.swing.text.DefaultEditorKit#nextWordAction
|c\_<S-Right>|  javax.swing.text.DefaultEditorKit#nextWordAction
|c\_<C-Left>|  javax.swing.text.DefaultEditorKit#previousWordAction
|c\_<S-Left>|  javax.swing.text.DefaultEditorKit#previousWordAction
|gm|  macro.MotionMiddleColumnAction
|<PageDown>|  motion.scroll.MotionScrollPageDownAction
|i\_<PageDown>|  motion.scroll.MotionScrollPageDownInsertModeAction
|<PageUp>|  motion.scroll.MotionScrollPageUpAction
|i\_<PageUp>|  motion.scroll.MotionScrollPageUpInsertModeAction
|<BS>|  motion.select.SelectDeleteAction
|<DEL>|  motion.select.SelectDeleteAction
|gH|  motion.select.SelectEnableLineModeAction
|<CR>|  motion.select.SelectEnterAction
|<NL>|  motion.updown.MotionDownNotLineWiseAction
|v\_CTRL-\_CTRL-N|  motion.visual.VisualExitModeAction
|gt|  window\.tabs.NextTabAction
|gT|  window\.tabs.PreviousTabAction
|i\_<Insert>| IntelliJ editor toggle insert/replace
|i\_<F1>| IntelliJ help
|<F1>| IntelliJ help

___

Don't really use scrolling

|zl|  motion.scroll.MotionScrollColumnLeftAction
|z<Right>|  motion.scroll.MotionScrollColumnLeftAction
|zh|  motion.scroll.MotionScrollColumnRightAction
|z<Left>|  motion.scroll.MotionScrollColumnRightAction
|zs|  motion.scroll.MotionScrollFirstScreenColumnAction
|z+|  motion.scroll.MotionScrollFirstScreenLinePageStartAction
|z<CR>|  motion.scroll.MotionScrollFirstScreenLineStartAction
|zH|  motion.scroll.MotionScrollHalfWidthLeftAction
|zL|  motion.scroll.MotionScrollHalfWidthRightAction
|ze|  motion.scroll.MotionScrollLastScreenColumnAction
|z^|  motion.scroll.MotionScrollLastScreenLinePageStartAction
|z-|  motion.scroll.MotionScrollLastScreenLineStartAction
|z.|  motion.scroll.MotionScrollMiddleScreenLineStartAction

___

## Harmful -

Don't override my modifier keys with junk

|i\_CTRL-Y|  change.insert.InsertCharacterAboveCursorAction
|i\_CTRL-E|  change.insert.InsertCharacterBelowCursorAction
|i\_CTRL-U|  change.insert.InsertDeleteInsertedTextAction
|i\_CTRL-W|  change.insert.InsertDeletePreviousWordAction
|i\_CTRL-M|  change.insert.InsertEnterAction
|i\_CTRL-\[|  change.insert.InsertExitModeAction
|i\_CTRL-D|  change.shift.ShiftLeftLinesAction
|i\_CTRL-T|  change.shift.ShiftRightLinesAction
|i\_<Tab>|  editor.VimEditorTab
|CTRL-G|  file.FileGetFileInfoAction
|CTRL-6|  file.FilePreviousAction
|CTRL-H|  motion.leftright.MotionLeftWrapAction
|CTRL-E|  motion.scroll.MotionScrollLineDownAction
|CTRL-Y|  motion.scroll.MotionScrollLineUpAction
|CTRL-F|  motion.scroll.MotionScrollPageDownAction
|CTRL-B|  motion.scroll.MotionScrollPageUpAction
|CTRL-]|  motion.search.GotoDeclarationAction
|v\_CTRL-C|  motion.visual.VisualExitModeAction
|i\_CTRL-H| IntelliJ editor backspace
|i\_CTRL-I| IntelliJ editor tab

___

Don't waste my keyboard space.

|\~|  change.change.ChangeCaseToggleCharacterAction
|r|  change.change.ChangeCharacterAction
|s|  change.change.ChangeCharactersAction
|S|  change.change.ChangeLineAction
|v\_s|  change.change.ChangeVisualAction
|v\_r|  change.change.ChangeVisualCharacterAction
|v\_R|  change.change.ChangeVisualLinesAction
|v\_S|  change.change.ChangeVisualLinesAction
|X|  change.delete.DeleteCharacterLeftAction
|x|  change.delete.DeleteCharacterRightAction
|v\_x|  change.delete.DeleteVisualAction
|v\_X|  change.delete.DeleteVisualLinesAction
|q|  macro.ToggleRecordingAction

___

## Harmful

Blocks from using ijkl instead of hjkl.

|i|  change.insert.InsertBeforeCursorAction
|h|  motion.leftright.MotionLeftAction
|j|  motion.updown.MotionDownAction
|k|  motion.updown.MotionUpAction
|l|  motion.leftright.MotionRightAction

___

Pollute my registers. make them use the blackhole register.

|i\_<Del>|  editor.VimEditorDelete
|<Del>|  change.delete.DeleteCharacterAction
|<BS>|  motion.leftright.MotionLeftWrapAction
|<CR>|  motion.updown.EnterNormalAction

I Actively dislike these bindings.

|C|  change.change.ChangeEndOfLineAction
|R|  change.change.ChangeReplaceAction
|v\_C|  change.change.ChangeVisualLinesEndAction
|D|  change.delete.DeleteEndOfLineAction
|v\_D|  change.delete.DeleteVisualLinesEndAction
|Y|  copy.YankLineAction
|v\_Y|  copy.YankVisualLinesAction

## Get Better

Ocasional Normal mode
|CTRL-R|  change.RedoAction
|v\_=|  change.change.AutoIndentLinesVisualAction
|CTRL-X|  change.change.number.ChangeNumberDecAction
|CTRL-A|  change.change.number.ChangeNumberIncAction
|v\_gCTRL-X|  change.change.number.ChangeVisualNumberAvalancheDecAction
|v\_gCTRL-A|  change.change.number.ChangeVisualNumberAvalancheIncAction
|v\_CTRL-X|  change.change.number.ChangeVisualNumberDecAction
|v\_CTRL-A|  change.change.number.ChangeVisualNumberIncAction
|A|  change.insert.InsertAfterLineEndAction
|I|  change.insert.InsertBeforeFirstNonBlankAction
|O|  change.insert.InsertNewLineAboveAction
|o|  change.insert.InsertNewLineBelowAction
|i\_CTRL-O|  change.insert.InsertSingleCommandAction
|v\_b\_A|  change.insert.VisualBlockAppendAction
|v\_b\_I|  change.insert.VisualBlockInsertAction
|=|  change.shift.AutoIndentMotionAction
|<|  change.shift.ShiftLeftMotionAction
|v\_<|  change.shift.ShiftLeftVisualAction
|>|  change.shift.ShiftRightMotionAction
|v\_>|  change.shift.ShiftRightVisualAction
|zt|  motion.scroll.MotionScrollFirstScreenLineAction
|zb|  motion.scroll.MotionScrollLastScreenLineAction
|zz|  motion.scroll.MotionScrollMiddleScreenLineAction
|v\_CTRL-G|  motion.select.SelectToggleVisualMode
|<C-G>|  motion.select.SelectToggleVisualMode
|CTRL-V|  motion.visual.VisualToggleBlockModeAction
|V|  motion.visual.VisualToggleLineModeAction
|<<| translated to <\_
|==| translated to =\_
|>>| translated to >\_

___

___

Experiment More

|v\_\~|  change.change.ChangeCaseToggleVisualAction
|CTRL-W\_c|  window\.CloseWindowAction
|CTRL-W\_S|  window\.HorizontalSplitAction
|CTRL-W\_s|  window\.HorizontalSplitAction
|CTRL-W\_v|  window\.VerticalSplitAction
|CTRL-W\_j|  window\.WindowDownAction
|CTRL-W\_<Down>|  window\.WindowDownAction
|CTRL-W\_CTRL-J|  window\.WindowDownAction
|CTRL-W\_h|  window\.WindowLeftAction
|CTRL-W\_<Left>|  window\.WindowLeftAction
|CTRL-W\_CTRL-H|  window\.WindowLeftAction
|CTRL-W\_w|  window\.WindowNextAction
|CTRL-W\_o|  window\.WindowOnlyAction
|CTRL-W\_W|  window\.WindowPrevAction
|CTRL-W\_l|  window\.WindowRightAction
|CTRL-W\_<Right>|  window\.WindowRightAction
|CTRL-W\_CTRL-L|  window\.WindowRightAction
|CTRL-W\_k|  window\.WindowUpAction
|CTRL-W\_<Up>|  window\.WindowUpAction
|CTRL-W\_CTRL-K|  window\.WindowUpAction

___

Investigate

|g@|  change.OperatorAction
|v\_g@|  change.VisualOperatorAction
|i\_CTRL-K|  change.insert.InsertCompletedDigraphAction
|i\_CTRL-V|  change.insert.InsertCompletedLiteralAction
|i\_CTRL-V\_digit|  change.insert.InsertCompletedLiteralAction
|i\_CTRL-R|  change.insert.InsertRegisterAction
|i\_CTRL-N|  window\.LookupDownAction
|i\_CTRL-P|  window\.LookupUpAction
|i\_digraph| IdeaVim enter digraph
|c\_digraph| {char1} <BS> {char2}

___

Vim Section Motion
Vim file type based motions
Vim create 'to-\*-case' motioin
vim usemore pipe operator ( :! )
vim use moore operator pending mode
vim investigate +- mottions
vim investigate the difference between sentecs, paragraphs and sections
