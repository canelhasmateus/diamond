# HiveMetastore


HIve

    Query Interface to hadoop ( HDFS)
        . Query ENgine
        . Metastore


    With time, other technologies dismantled there

    HDFS -> Object Storage ( AWS S3)
    Map Reduce -> Spark 
    Yarn -> Kubernetes
    Query Engine -> Presto / Trino

When saving new data, we register it into hive metastore
    . Maps a set of objects in the objsect store to a table exposed by hive
        .. Schema of the table held in the file, with metadata
    . Leads to
        .. Virtualization
        When using sql, not interested in the detail of object stora.

        .. Discoverability
        Becomes a catalog of all the collections held in object storage 
        Can also add supplemental: Update frequency, owners
        .. Schema Evolution
        Mutability is a challenge of managing data sets ; 
            Records may change over time with respect to the existing columns describing their attributes 
            The set attributes itself changes, resulting in a change to the schema
        


        .. Performance
            . Parition prunning? 

POssible replacements
    . Difficult to install and maintain
    . Not architected cloud-native, complicating managed service implementations
    . Scalability 5restrictions from relational db relianceow
    . No direct, but  . .. | specially because the metastore is a general interface supported by all applications.

Open Table Formats
    . Iceberg
        efficiency in large tables
    . Hudi
        mutability
    . delta lkae
        mutability
        schema enforcement and evolution

Data Catalogs
    Many open source discovery tools
        acryl
        data portal
        amundsen
        apache atlas
        atlan
        azure purview
        castordoc
        collibra
        data galaxy
        data world
        databricks unity catalog
        datahub
        facebook nemo
        google data catalog
        metaphor
        netflix metacat
        secode
        select start
        shopify artifact
        spotryify lexicon
        stemma
        uber databook
        zeenea
Observability
    monitoring the quality of the data pipelines oeprationally, or the data itself
        . Databand

        . great expectations
        . monte carlo ( https://www.montecarlodata.com/ )

___
