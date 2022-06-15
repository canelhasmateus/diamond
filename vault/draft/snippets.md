___

Its possible to decompile scala to java in IJ, by right-clicking the .class generated.

 Simply add 'ext:nix' to google query and you should be good.

___

"Friendships do'nt form over shared interest, they form over shared context."

___

I have fear that the cathartic pessimism we sometimes enjoy ironically is turning into a chronic fatalism. It's like a habit that has become an addiction.

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




___

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


"
Transparency isn't a blanket for forgiveness.
"



___


SSLKEYLOGFILE environment variable is a path of textfile we can acces.
Software that implements tls with typically write keys and others tls secrets to this file. This applies to curl chrome firefox and other desktop apps that use opensll libs.

We can configure wireshark to read this file and decrypt the intercepted tls packets.

<https://www.trickster.dev/post/decrypting-your-own-https-traffic-with-wireshark/>
