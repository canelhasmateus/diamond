# bitwise operations


when working with numbers, we can assign a maximum and 

# XOR

    . XOR can be use to implement some cyclical behaviour:
        
        1 ^ 2 ^ 1  ^ 1 ^ 1 ... 
        1 -> 3 -> 2 -> 3 -> 2 ...
    . This happens because
    
        if x = y ^ z then
        z = x ^ y and y = x ^ z
        
    
    . Note that the maximum possible XOR result is always 2^(maximumBit) - 1.
    to achieve the highest number, we find the bitwise difference between the number and the maximum.

                
        MAX    = 11111111111 ==  2047 ( this is the maximum result with 11 bits )
        NUMBER = 11101010001 ==  1873 ( consider a random number.)
        ______________________________________________________________
    
        NEEDED = 00010101110 == 174 ( this is the bitwise difference )

        Ref: https://leetcode.com/problems/maximum-xor-for-each-query/
        
    Thinking in "Two's complements"


