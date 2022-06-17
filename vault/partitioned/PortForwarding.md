
Port forward

Can be done in the router.
    . Ugly,

iptables

nat

transparent proxying

why don't we just run the app in port 80?
    . ports 0 to 1024, these are system ports,
    . cant listen on then unless root
        -> Security concerns.

insert rows in the nat table.
    . "please forward to me , on this other port"
    . uses iptables -> System call , need sudo
        -> sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 192.168.254.47:8080

    |> needs to be a ip, cant be dns
when routing to another machine, we need to use maskarade
    . sudo iptables -t nat -A postrouting -p tcp --dport 80 -j MASQUERADE --to-destination ....

these are session only. to persist,  need to use apt-get install iptables-persistent

clearing
    sudo iptables -t nat -F

#

your router is the one who has the public ip address
    . How does it knows to forward the requests?

    . There are many, for example
        .. Port Forwarding

Port Forward is a table configured inside the router, which allows it to forward the requests
    . However, your ip must be static , because the ip in the table is static.
