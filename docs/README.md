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

- `npm run extract-from-source`: analyses the source code in `../src/lib` and - for each analysed file - writes meta data to `data/meta`. The directory structure of `data/meta` mirrors the structure of `../src/lib` exactly. You can specify a list of folders to exclude from documentation by specifying `ignoreFolders` in `docs.config.json`.
- `npm run generate-pages`: generates documentation pages in `src/routes` using the template files defined in `src/routes/_templates`. Each documentation page pulls in the relevant data from `data/meta` and displays some basic information, such as the name of the component/action/store, a general description and an API table (this information has been recovered from the source files). Each documentation page also imports and renders a custom documentation component that is set up in `src/lib/custom` as an empty file. Again, the directory structure of `src/routes` and `src/lib/custom` mirrors the structure of `../src/lib`. Note that files in `src/routes` are overwritten each time `generate-pages` is run. Custom documentation files (in `src/lib/custom`) are preserved however.
- `npm run update-navigation`: populates the navigation bar by populating `data/nav.json` that is consumed by the layout page (defined at `src/routes/__layout.svelte`). Components/actions/stores that live in the same folder are assumed to belong to the same section. Specifying `sections` in `docs.config.js` allows to name sections by matching the directory path to the desired name.

## Build and deploy

`npm run build` builds the app into `./build` and `npm run deploy` deploys the app to GitHub pages.

## Why do this ourselves?

### Why not [Storybook](https://storybook.js.org/)?

- If the documented module lives outside of the Storybook workspace[^1], Storybook does not pick up types defined in the source code (there is a workaround for React libraries but not for Svelte). Defining types twice, once in the source and again in the documentation, is tedious, and will almost certainly lead to a mismatch between the code and the documentation eventually.
- Storybook and SvelteKit specifically do not integrate well. Storybook bundles code with webpack, SvelteKit integrates deeply with Vite. As a result, Storybook can't make sense of some features that are Vite-dependent, such as environment variables. Though it is possible to bundle Storybook code with Vite, this doesn't support some Storybook features (e.g. component-level descriptions).
- Finally, Storybook documents _component_ libraries but Svelte needs more than that. Documenting stores and actions is possible in Storybook (stories can be anything really) but it's awkward

### What about Storybook alternatives?

There aren't many documenting tools that focus on Svelte and SvelteKit (to be fair, at the time of writing SvelteKit hasn't even hit 1.0). There is [svench](https://github.com/rixo/svench) but it's very early stages, more like a proof of concept at the moment. There are few libraries that generate documentation from source files in the form of json and/or markdown files but none support both, typescript and jsdoc.

[^1]: Separating the starter template from its documentation is important for many reasons: (i) someone who's using this template for their work is not interested in cloning documentation that comes along with it (esp. if the documentation dependencies are as heavy as Storybook's); (ii) the documentation convolutes the "actual" template code (this is especially true for `package.json`); (iii) most importantly, dependencies are mixed up which makes it very difficult to make informed decisions about the severity of a vulnerability
