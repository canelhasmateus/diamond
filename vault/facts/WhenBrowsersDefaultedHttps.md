---
tags:
    - network
    - security
    - fact
---

# Browsers and default HTTPS

Usually, when specifying a schemaless origin, ( no HTTP:// or HTTPS://), browsers defaulted to using HTTP://, for historical reasons.

To deal with this, service providers usually implement [[Redirection]] Chains.
This is not the best approach, since it requires establishing multiple connections, alongside multiple round trips.

It is also not secure, since for at least one request we're not using [[HTTP]]s. This opens an opportunity for [[AttackMitM]] Attacks, since the first request can be intercepted by "bad" parties, and redirected to [[AttackPhishing]] domains.

Recently, browsers have decided to default to HTTPS.

## References

- [Chrome 90 will use HTTPS (port 443) by Default](https://www.youtube.com/watch?v=XrlfX0duLKQ)
