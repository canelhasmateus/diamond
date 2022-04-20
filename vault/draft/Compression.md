Png have no such problems of loss-y compression

LossLess Compression -> Exploit redundancy
    . Huffman codes -  Use smaller 'Ids' to represent more frequent values.
        .. However, it treat values independently of each other : Images often are spacially correlated.
    . Run-Length encoding
    . Lempel-Zib Schemes / LZSS 
        .. Allowing the length to be greater than the offset gives us run-length encoding for free. 
        .. Gradient breaks it. 

When encountering a hard problem, we can either think of a new solution, or transfrom the problem into one for which we already know the solution. 
    . Png chooses to  transform , by defining a filtering step ( Either None, Sub, Up , Avg , Paeth ) before LZSS encoding.
    . Usually, these are done separately in each of the RGB Channels.
    . How to choose? Heuristic -> Mimimum sum of absolute differences
    
        

QOI
    . Comparable to png, up to 50x faster
