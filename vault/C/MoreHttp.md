
<https://www.youtube.com/watch?v=FUL_Buud7jY>

<https://www.youtube.com/watch?v=4HlNv1qpZFY>

http

    1.0 : one tcp connection for each request
1.1: quickly resolved that ( keep alive time) , but still have only one outstanding request.

websockets
    client sends Get 1.1 upgrade ;
    server return returns with 101 such as switching protocols; a completely different protocol

sse
    client sends ; Get text/event-stream
    server returns ; content = event-stream , transfer-encoding=chunked

        use cases: LIve feed ; SHowing client progress ; Logging 

