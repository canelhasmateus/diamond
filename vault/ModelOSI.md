---
tags:
    - network
    - fact
---

# OSIModel

The open system interconnections present a model for computer networking.

Every Network provider uses the same system, which helps troubleshooting.

Layers

1. Physical Layer ( Electrons / Photons over copper / Optical ) - Bits
2. Datalink ( Hardware : Network cards , Addresses ) - Frames
3. Network  ( Logical Address : Ip Address ) - Packets
4. Transport ( Protocol Selectrion : TCP , UDP) - Segments

> Networking ends here

5. Session ( Controls Connection : Sockets ) - Data
6. Presentation ( Presentation and Data : TLS ) - Data
7. Application ( User Interface : HTTP , DNS , SSH ) - Data

layer 7 applicatoin
layer 6 presentatoin -> Encrypt if necessary
layer 5 Session -> Establish session ; tag it.
Layer 4 Transport -> Add ports/seq ; Break into segments;
Layer 3 Network -> Adds IP ; Now, called a packet.
Layer 2 Data Link -> Breaks packets and adds the Target Mac ADdresses  ; Now Called Frames, have basic error detection
Layer 1 Physical -> Tranforms into 1 and 0, into electric / optical / radio waves

frames are fixed size
frames are received by everyone in the same broadcast domain, but the network card just discards it ( unless its a broadcast or multicase addressed) . It can be configured to not do so, and forward every packet: This is called promiscuous mode.

where does the tcp buffer enter her??
