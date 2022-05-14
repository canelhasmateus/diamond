# Browsers and default https

<https://www.youtube.com/watch?v=XrlfX0duLKQ>&

Usually, when specifying a schemaless origin, ( no http:// or https://), browsers default to using http://, for historical reasons.

To deal with this, service providers usually implement Redirection Chains.
This is not performatic, since it requires the stablishment of multiple connections, along with multiple round trips.

It is also not secure, since for at least one request we're not using https.

This opens a opportunity for Man In the Middle Attacks, since the first request can be intercepted by "bad" parties, and redirected to phishing domains.

Recently, browsers have decided to default to https.
