
Durability is the guarantee that data can be accesses after a failure. It is not a vinary property, but should be defined as the "kinds" of failures you want your data to survive.
    . Usually, there is some performance penalty for durability;
    . Rarely testing - involves cutting power, which is distruptiver and hard to automate.

___

# Cloud

Storage on the cloud.
    What is storage
        Where a organization keep its data
            . Volatile
                Something that goes away when you reboot. Storage that is attached to your instance:
                When your instance is terminated, you lose all of this data.

            . Non-Volatile
                Survives a reboot. Hard disk.

    Block Storage
        .  Network attached. So your network becomes a bottleneck.
        . Breaks data into blocks
        . Can be placed wherever it makes more sense, such as attached directly to an instance. 
        . Can save whatever, such as operating systems, frequently changed files.

    Object storage
        . Another type of storage. 
        . Breaks data into objects
        . An object has an unique id, and metadata. 
        . Metadata enables interesting things, such Can create a data lake, run sql queries, integrate into environemnts
        . Not too fast, compared to other 
        . Absolutely Terrible for files that change quickly
            .. Everytime you modify a file, we create a new version, which means more space, which means more costs.

    File storage
        . In your computer, we have a hard drive. Into it we put files. 
        . Think 'Drives' 

