---
created_on: 2023/01/05 22:33
kind:
tags:
---

# ServerSentEvents

Offers a uni-directional stream of data, from the server to the client. To create:

1. client sends : [[HTTP]] Get { Content-Type = text/event-stream }
2. server returns : { Content-Type = event-stream ; Transfer-encoding = chunked }

Use Cases:

- Live feeds
- Showing client progress
- Logging

## References

- [Wiresharking Server-Sent Events](https://www.youtube.com/watch?v=FUL_Buud7jY)
- [Server-Sent Events Crash Course](https://www.youtube.com/watch?v=4HlNv1qpZFY)
