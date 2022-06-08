
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



___

Unquote a word that's enclosed in single quotes  
`di'hPl2x`

- `di'` - Delete the word enclosed by single quotes.
- `hP` - Move the cursor left one place (on top of the opening quote) and put the just deleted text before the quote.
- `l` - Move the cursor right one place (on top of the opening quote).
- `2x` - Delete the two quotes.
