SQS
    . Simple Queueing Service
    . Decouple Application Architectures
    . Transient Place to Put Messages
        .. Can be placed there from 4 to 14 days
    . Helps Right-Sizing
        .. Smooths out peak loads
    . At least once delivery
    . StandardQueue
        .. No ordering guaranteed
    . FifoQueue
        .. Ordering Garantees
    . Can trigger auto-scaling, via queue depth.
        .. CPU load is just a proxy.
        .. Reduces write load
