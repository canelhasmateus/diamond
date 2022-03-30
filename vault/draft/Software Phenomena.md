



# Head of line blocking



# Tail Latencies



# Cascading Failures



# Coordinated Omission


[[todo]]
check HdrHistogram
            
            . coordinated omission problem
                .. accidental conspiracy
                example:
                    
                    start = time()
                        do
                    finish = time()
                        return finish - start
                the trouble is that long operations onlu get measured once
                delay outside of timing window do not get measured at all
                
                "vertical rises in the latency tend to indicate omission"

                very few tools deal with it correctly.

