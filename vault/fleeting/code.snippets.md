
using Pkg;
Pkg.add("PkgTemplates")
using PkgTemplates;

template = Template(;
    user="canelhasmateus",
    license="MIT",
    authors=["Mateus Canelhas"],
    dir=".",
    julia_version=v"1.7",
    plugins=[
        TravisCI(),
        Coveralls(),
        GitHubPages(),
    ]
)
generate("dixie" , template)


___


<https://raisedbyturtles.org/view-unlabeled-gmail#label-manager>

-has:userlabels -in:sent -in:chat -in:draft -in:inbox
