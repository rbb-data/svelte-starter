# svelte-stories

This repository documents the component library defined in `../src/lib/components/shared`. It is published to https://rbb-data.github.io/svelte-starter/.

## Development

To make components from the starter available to this code base, `@rbb-data/svelte-starter` is packaged and installed _locally_ using [`install-local`](https://www.npmjs.com/package/install-local).

Assuming your current working directory is `/path/to/svelte-starter/doc`, then install and start the development server via:

```bash
npm install
npm run storybook
```

Storybook then runs at http://localhost:6006/.

Stories for each documented component live at `src/stories`.

## Update `@rbb-data/svelte-starter`

`npm run update-doc` packages `@rbb-data/svelte-starter` and re-installs it locally via `install-local`.

## Build and deploy

`npm run build-storybook` builds the app for production and `npm run deploy-storybook` deploys the storybook to GitHub pages.

If the build fails, re-running `npm run update-doc` usually does the trick.
