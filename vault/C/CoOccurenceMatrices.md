[GLCMs — a Great Tool for Your ML Arsenal - Towards Data Science](https://towardsdatascience.com/glcms-a-great-tool-for-your-ml-arsenal-7a59f1e45b65)

Gray level co-occurence matrices

    extract texture features from images
        
    isnt this just convolutions? and the positional operator is your kernel?
    
    whoever, it raises some good points:
        . We can calculate the entropy of a matrix 
            -sum( c[i,j] * log( c[i,j]) )
        . We can calculate the correlation of a matrix
            -sum( 
                ( i-u[i] * ( j - u[j]) * c[i,j]) /
                (theta[i] * theta[j]) 
                 )
                where 
                u[k] = sum( k * c[i, j])
                theta^2[k]  = sum( (c[i , j ]  * u[k] )**2)
        . And also , the homogeneity and contrast

    associated with texture == repetition of visual patterns == repetition ofcombinations fo values with a certain orientations 



    separate rgb AND  hsv channels
        hsv channels are closer to how humans interpret vision 
            => Here we can put a link to that image compression video from irreducible


        assymetrical costs of classification
    
    what i found interesting here is the transformation  from matrices to individual numbers:
        
        R-Matrix
        G-Matrix
        B-Matrix
        
        GrayScaleMatrix ( By Averaging RGB )

        H-Matrix
        S-Matrix
        V-Matrix
        
        \/ Calculate a GLCM of each , and for each glcm, compute its 4 metrics ( homogoneity , contrast, energy , correlation )
            > Which are analogous to mean, std, entropy and correlation . 
        
        7 * 4 = 28 numerical features
