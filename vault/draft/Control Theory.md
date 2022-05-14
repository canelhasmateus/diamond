# Control Theory

Control Schemes

    Proportional Control

Poles

Zeros

S Plane

Root Locus

Control Theory

    Sketch a root locus

    Proportional COntroll is the simplest control
        .Not necessarily solves all porbolems
        .sometimes you can move root to the left half plane or have a negative real part
        . interesting to understand how poles and zeros affect the root locus. 
         
         in transfer functions, the numerator controls the system behave different due to force inputs. 
    
        when nPoles <> nZeroes :
            if nPoles > nZeroes, the extra poles goes to infinity
            if nPoles < nZeroes, the extra zeros comes from infinity

<https://www.youtube.com/watch?v=eTVddYCeiKI>

###

Control system
    Root Locus Method

    System
        Known Parameters
        Unknown Parameter K
            Changing this affects poles
                Poles are the values of s that make the G(s) to blow up to infinity
    
    There are two questions here
        
        Design
            what value of K should we choose to meet my system performance requirements?

        Effect of variation
            What are the effect of a variation?
            How sensible is your system to slight deviations to k

        
    The S -plane is drawn in a x-y plane, with the real part in the x axis and the imaginary part in the Y axis. 
    Each location in the s plane correspond to a waveform in the time domain, characterized by e^st
        The left part of the plane cahacterizes exponential decay ; 
        the right part of the plane characterizes exponential growth;
        the vertical part characterizes the oscilation of the signal. 

    A system is characterized by both its zeroes and poles, but only the poles dictate the behaviour to unforced responses

<https://www.youtube.com/watch?v=CRvVDoQJjYI>
