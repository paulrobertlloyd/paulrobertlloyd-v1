# v1.paulrobertlloyd.com

*My personal website. There are many like it, but this was mine (2008-2011).*

Originallly managed by [Movable Type](https://movabletype.org), this repo contains all the source files required to build the site using that software. Originally served using PHP, files in `www` have been rebuilt so they can be served as static HTML. Search results and tag archives relied on Movable Type’s internal CGI scripts, so these pages no longer work.

CSS and JavaScript files were originally concatonated dynamically using [Minify](http://groups.google.com/group/minify). These assets have been replaced by pre-compiled static files.

## Repo structure

```
v1.paulrobertlloyd.com
├── src             # SOURCE
|   ├── css         # Non-concatonated CSS
|   ├── js          # Non-concatonated JavaScript
|   └── mtml        # Movable Type templates
│
├── www             # COMPILED
│
├── .gitattributes  # Files tracked by Git LFS
├── netlify.toml    # Netlify configuration
└── README.md       # This file
```

© [Paul Robert Lloyd](https://paulrobertlloyd.com)
