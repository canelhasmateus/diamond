# Browsers and default HTTPS

<https://www.youtube.com/watch?v=XrlfX0duLKQ>

Usually, when specifying a schemaless origin, ( no HTTP:// or HTTPS://), #browsers defaulted to using HTTP://, for historical reasons.

To deal with this, service providers usually implement [[Redirection]] Chains.
This is not the best approach, since it requires establishing multiple connections, alongside multiple round trips.

It is also not secure, since for at least one request we're not using [[ProtocolHTTP]]s. This opens an opportunity for [[MITM]] Attacks, since the first #request can be intercepted by "bad" parties, and redirected to [[Phishing]] domains.

Recently, browsers have decided to default to #HTTPS.
