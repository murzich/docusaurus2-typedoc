# Website

This website is built using Docusaurus 2, a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=1 yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## My changes to source code

- Moved *blog*, *src* & *static* directories & *docusaurus.config.js* & *sidebar.js* to new *website* directory to split **docs** & **docs-website** from main source. Added directory part to docusaurus scripts in *package.json*.

- Specified link to *docs* directory `path` in *docusaurus.config.js*

- Added configuration for `typedoc` doc-generator with `typedoc-plugin-markdown`. Used example for docusaurus v1 from https://github.com/tgreyuk/typedoc-plugin-markdown-examples. Used *src* files from there. To generate typedoc run:

```sh
yarn docs
```

- Manualy moved headings data from autogenerated *sidebars.json* to *sidebar.js*. Used category nesting.

- Added `/docs/myapi` to *.gitignore* file