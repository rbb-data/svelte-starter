# Documentation: @rbb-data/svelte-starter

This package documents code that is part of [@rbb-data/svelte-starter](https://github.com/rbb-data/svelte-starter). This includes stores, actions, and components.

**Live at:** https://rbb-data.github.io/svelte-starter/

## Development

Assuming your current working directory is `/path/to/svelte-starter/docs`, install and start the development server via:

```bash
npm install
npm run dev
```

If you head to http://localhost:3000/, you'll see an empty layout page. To pull in documentation from `svelte-starter`, run

```bash
npm run update
```

The documentation at http://localhost:3000/ should now be populated with content.

## How this works

`npm run update` does three things:

- `npm run extract-from-source`: analyses the source code in `../src/lib` and - for each analysed file - writes meta data to `data/meta`. The directory structure of `doc/meta` mirrors the structure of `../src/lib` exactly. You can specify a list of folders to exclude from documentation by specifying `ignoreFolders` in `docs.config.json`.
- `npm run generate-pages`: generates documentation pages in `src/routes` using the template files defined in `src/routes/_templates`. Each documentation page pulls in the relevant data from `data/meta` and displays some basic information, such as the name of the component/action/store, a general description and an API table (this information has been recovered from the source files). A documentation page also imports and renders a custom documentation component that is set up in `src/lib/custom` as an empty file. The directory structure of `src/routes` and `src/lib/custom` mirror the structure of `../src/lib`. Files in `src/routes` are overwritten each time `generate-pages` is run, custom documentation files in `src/lib/custom` are preserved.
- `npm run update-navigation`: populates the navigation bar by populating `data/nav.json` that is consumed by the layout page, `src/routes/__layout.svelte`. Components/actions/stores that live in the same folder (in `../src/lib`) are assumed to belong to the same section. Specifying `sections` in `docs.config.js` allows to name sections by matching the directory path to the desired name.

## Build and deploy

`npm run build` builds the app into `./build` and `npm run deploy` deploys the app to GitHub pages.
