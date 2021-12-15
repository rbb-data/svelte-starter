# Documentation: @rbb-data/svelte-starter

This package documents code that is part of [@rbb-data/svelte-starter](https://github.com/rbb-data/svelte-starter). Documented are stores, actions, and components.

**Live at:** https://rbb-data.github.io/svelte-starter/

## Development

Assuming your current working directory is `/path/to/svelte-starter/docs`, install and start the development server via:

```bash
npm install
(cd .. && npm run package) && npm link ../package  # packages the starter's code and links it to this module
npm run dev
```

If you head to http://localhost:3000/, you'll see an empty layout page. To pull in documentation from `svelte-starter`, run

```bash
npm run update
```

The documentation at http://localhost:3000/ should now be populated with content.

## How this works

`npm run update` does three things:

- `npm run extract-from-source`: analyses the source code in `../src/lib` and - for each analysed file - writes meta data to `data/meta`. The directory structure of `data/meta` mirrors the structure of `../src/lib` exactly. You can choose to exclude folders in `../src/lib` from the documentation by specifying `ignoreFolders` in `docs.config.json`.
- `npm run generate-pages`: generates documentation pages in `src/routes/docs` using the template files defined in `src/routes/_templates`. Each documentation page pulls in the relevant data from `data/meta` and displays some basic information, such as the name, a general description and an API table (this information has been recovered from the source files). Each documentation page also imports and renders a custom documentation component that is set up in `src/routes/docs/path/to/MyComponent/_/Custom.svelte.md` as an empty file. Note the file's extensions, `.svelte.md`; this means you can use markdown as well as Svelte code in these files. **Note**: Index files in `src/routes/doc` are overwritten each time `generate-pages` is run. Custom documentation components however are preserved over time.
- `npm run update-navigation`: populates the navigation bar by writing to `data/nav.json` that is consumed by the layout page (defined at `src/routes/__layout.svelte`). Components/actions/stores that live in the same folder are assumed to belong to the same section. Specifying `sections` in `docs.config.js` allows to name sections by matching the directory path to the desired name.

## How to add documentation

Let's say you implemented a new shared component `MyComponent` that you want to document. For the most basic (automatically generated) documentation, run:

```
npm run update
```

Done! At this point, the documentation page will list your component and render an automatically created documentation page with some basic information about your component (recovered from its source). To reiterate, this is what `npm run update` does for you:

- writes a file with relevant meta information sourced from `MyComponent.svelte` to `data/meta/components/shared/MyComponent.json`
- adds an entry for `MyComponent` in `data/nav.json` that controls the navigation sidebar on the documentation page
- creates a pre-filled route at `src/routes/docs/components/shared/MyComponent/index.svelte` and an empty customization component at `src/routes/docs/components/shared/MyComponent/_/Custom.svelte.md`

If you want to add some custom documentation, edit `src/routes/docs/components/shared/MyComponent/_/Custom.svelte.md`. This is a [`MDsveX`](https://github.com/pngwn/MDsveX) file (note its extension `.svelte.md`), which means you can conveniently use Markdown as well as Svelte syntax. The docs' component library at `src/lib/components` provides a handful of components that help you write meaningful documentation, including code samples and snippets.

## Build and deploy

`npm run build` builds the app into `./build` and `npm run deploy` deploys the app to GitHub pages.

## Why do this ourselves?

### Why not [Storybook](https://storybook.js.org/)?

- If the documented module lives outside of the Storybook workspace[^1], Storybook does not pick up types defined in the source code (there is a workaround for React libraries but not for Svelte). Defining types twice, once in the source and again in the documentation, is tedious, and will almost certainly lead to a mismatch between code and documentation eventually.
- Storybook and SvelteKit do not integrate well. Storybook bundles code with webpack, SvelteKit integrates deeply with Vite. As a result, Storybook can't make sense of some features that are Vite-dependent, such as environment variables. Though it is possible to bundle Storybook code with Vite, this comes at the expense of some missing Storybook features (e.g. component-level descriptions).
- Finally, Storybook documents _component_ libraries but this starter template is more than that. Documenting stores and actions in Storybook is possible (stories can be anything really) but it's awkward.

### What about Storybook alternatives?

There aren't many documenting tools that focus on Svelte and SvelteKit specifically (to be fair, at the time of writing SvelteKit hasn't even hit 1.0). There is [svench](https://github.com/rixo/svench) but it's very early stages, more like a proof of concept at this time. There are few other libraries that generate documentation from source files in the form of json and/or markdown files but none support both, typescript and jsdoc. Also, seeing a component in action (rather than just reading its spec) is a documentation feature that is important to us.

[^1]: Separating the starter template from its documentation is important for many reasons: (i) someone who's using this template for their work is not interested in cloning the documentation that comes along with it (esp. if the documentation's dependencies are as heavy as Storybook's); (ii) the documentation convolutes the "actual" template code and unnecessarily adds to the complexity of the project; (iii) most importantly, the documentation's dependencies and the starter's dependencies are managed in the same `package.json` file, which makes it very difficult to make informed decisions about the severity of a vulnerability.
