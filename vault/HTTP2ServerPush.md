---
created_on: 2023/01/05 22:34
kind:
tags:
---

# Http2ServerPush

[[ServerPush]] is also a feature of [[HTTP2]]

It enables the server to send yet-unrequested information, that is usually fetched together.

For example, The server can send both index.html, main.js and global.css when requested for index.html.

- Server push can be abused when configured incorrectly, as it needs a server-push-aware client.
