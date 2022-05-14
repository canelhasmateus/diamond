
    Diffie Helman 
        Key Exchange Algorithmn 
            Enables to exhange keys without middle parts knwing 

The client comes up with a private number X, and a public number G.

The client will send the "Client Hello". It contains
G and G^X , alongside its supported encryptions, and some tsl extensions ( ALNP ) , such as http 2, stapling , sni, encrypted sni.

The  server then creates a number, Y, and replies with G^Y, alogside the agreed encryption scheme.

Then , both server and client use ( G^x ) ^ y = ( G ^ y) ^ x = G^( x * y  ) as a secret number.

there is something to do with another variable used to take the modulo that makes it impossible to derive x back from G and G ^ x. [[expand]]
Public-Key Encryption schemes can be MITM , but we solve this here by the use of certificates [[expand]]

<https://www.youtube.com/watch?v=IE0QLCcOr0I>
<https://www.youtube.com/watch?v=rKVCTVAHK7k>
