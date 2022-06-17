
Osi model

open system interconnections

layer 7 applicatoin
layer 6 presentatoin -> Encrypt if necessary
layer 5 Session -> Establish session ; tag it.
Layer 4 Transport -> Add ports/seq ; Break into segments;
Layer 3 Network -> Adds IP ; Now, called a packet.
Layer 2 Data Link -> Breaks packets and adds the Target Mac ADdresses  ; Now Called Frames, have basic error detection
Layer 1 Physical -> Tranforms into 1 and 0, into electric / optical / radio waves

frames are fixed size
frames are received by everyone in the same broadcast domain, but the network card just discards it ( unless its a broadcast or multicase addressed) . It can be configured to not do so, and forward every packet: This is called promiscuous mode.

where does the tcp buffer enter her?? [[expand]]


# Layer 4

ALso knwon as the transport layer

# Layer 6

Also known as the presentation layer

# Layer 7

Also knwon as the application layer.

____


OSI Model
    Every Network provider uses the same system, which helps troubleshooting.

    Layers
        1 - Physical Layer ( Electrons / Photons over copper / Optical ) - Bits 
        2 - Datalink ( Hardware : Network cards , Addresses ) - Frames
        3 - Network  ( Logical Address : Ip Address ) - Packets
        4 - Transport ( Protocol Selectrion : TCP , UDP) - Segments 
        ## Networking ends here 
        5 - Session ( Controls Connection : Sockets ) - Data
        6 - Presentation ( Presentation and Data : TLS ) - Data 
        7 - Application ( User Interface : HTTP , DNS , SSH ) - Data
    
    Ip Address:
        Needed for every device that wants to communicate in an network.

        IPV4 / IPV6 : Mostly PCs vs Mostly Mobiles
            . IPV4  have very few addresses. Which is why private ip addresses were created. 
            They occur at the 10.0.0/8 ;  140~172.0.0.0/16; 192.168.0.0/16 
                > Not Routable. Can use internally but not externally
        We used to have a idea of these Class address.
            A: Each subnet would handle 16M.
            B: 65k hosts
            C: 253 hosts
            D: Multicast reserved
IPV4: 32bit.
IPV6: 128bit  ->

Subnetting:
    Breaking down networks into smaller ones or group smaller network
    CIDR
What if we wanted  to create greater subnets (aggregating small ones) ?
    This is called supernetting
    Can be used to do network summarization
        Good to create smaller routes
