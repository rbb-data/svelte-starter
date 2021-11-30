# rbb-data svelte-starter

> 🚧🚧🚧 **Under construction** 🚧🚧🚧

This template serves as a starting point to create data visualizations with [Svelte](https://svelte.dev/). It is built on top of [SvelteKit](https://kit.svelte.dev/).

**Features:**

- Server-side rendered builds that can be hosted on a static file server
- Data imports on the server (json, yaml and csv)
- Fetching content from [ArchieML](http://archieml.org)-formatted Google docs
- [Style Dictionary](https://amzn.github.io/style-dictionary/#/) as a single source of truth for design tokens
- Easy deployment to rbb’s static servers
- Pre-generated iframe snippet to embed build into a foreign website with [David J. Bradshaw's iFrame Resizer script](https://github.com/davidjbradshaw/iframe-resizer) supported by default
- (Component library, documented at https://rbb-data.github.io/svelte-starter/)

## Get started

To create a new project, click the `Use this template` button above. You can then clone into your new project by running

```bash
git clone https://github.com/rbb-data/cool-project-name.git
```

assuming you named your repo `cool-project-name`.

Install the app and start the development server:

```bash
cd cool-project-name
npm install
npm run dev
```

Your app is then available at http://localhost:3000/. Edit `src/routes/index.svelte`.

**Note:** SvelteKit requires `node>=14.13`. If you get an error message on `npm install` that an "engine is unsupported", update your node version and try again.

### Alternatively, do it the old school way

If you don't want to automatically link a GitHub repo, you can instead run

```bash
npx degit rbb-data/svelte-starter cool-project-name
```

To add a remote, create an empty GitHub repo named `cool-project-name` and run

```bash
cd cool-project-name

# initialize git and commit content
git init
git add --all
git commit -m "Initial commit"

# add a remote and push
git remote add origin https://github.com/rbb-data/cool-project-name.git
git branch -M main
git push -u origin main
```

## Loading data

- Move your data file to `./data`
- Fetch `/load/data/my-data-file.csv` in SvelteKit's [`load`](https://kit.svelte.dev/docs#loading) function (see `src/routes/index.svelte`)

Supported file formats are `*.json`, `*.yaml` and `*.csv`. If you want to add support for another format, just add an appropriate parser in `src/routes/load/data/[filename].ts`.

## Connect to Google doc

- Create a google doc
- Grant read access to _connect@rbb-datenteam.iam.gserviceaccount.com_
- Grab the doc's id from its url
- Fetch `/load/google-doc/my-google-doc-id` in SvelteKit's [`load`](https://kit.svelte.dev/docs#loading) function (see `src/routes/index.svelte`)

By default any formatting is ignored when loading the doc. To preserve some formatting fetch from `/load/google-doc/my-google-doc-id?preserve-styles` instead. Supported styles are: bold, italic, underline, superscript, subscript. As well as linked content. Anything else is stripped ("sanitized") for security reasons.

The response is a json object with the contents of your doc parsed as [ArchieML](http://archieml.org).

The Google credentials necessary to access docs that are shared with _connect@rbb-datenteam.iam.gserviceaccount.com_ should be stored in a json file named `google-credentials.json`. Secrets are not stored in version control; let one of your colleagues know, if you need them :)

## Helpers

This repo provides some useful helpers to quickly build interactive interfaces. The [Wiki](https://github.com/rbb-data/svelte-starter/wiki) provides a more in-depth description of each helper.

### Stores (`src/lib/stores`)

- `prefersReducedMotion`: true if a user has requested to minimize the amount of non-essential motion

### Actions (`src/lib/actions`)

- `use:css`: dynamically sets CSS variables
- `use:fuzzysearch`: fuzzy searches input from a user against a dataset (using [`fuzzysort`](https://github.com/farzher/fuzzysort))
- `use:pannable`: makes an element "pannable", i.e. recognizes when an element is interacted with and tracks a pointer's position
- `use:tooltip`: creates and destroys a (tooltip) component on interaction with an element

### Headless components (`src/lib/components/shared/headless`)

Headless components are essentially unstyled, higher-order components that "orchestrate" provided content in a specific way. They typically consume other components (either through slots or props) and connect them in useful ways.

- `Search`: implements an input field that facilitates client-side fuzzy searching
- `Slider`: renders a single slide at a time and allows to navigate back and forth through swipe gestures or mouse clicks
- `Svg`: simple SVG container that implements a common chart sizing pattern
- `Tabs`: makes content selectable

## Environment variables

Environment variables are handled by Vite, the behind-the-scenes frontend tooling that powers SvelteKit. See [Vite's documentation](https://vitejs.dev/guide/env-and-mode.html) for more information.

Variables in `.env` are public and loaded in all cases. Sensitive variables should live in a `.env.local` file that is ignored by git.

If you use a Bing layer in a Leaflet map, you'll need to set the Bing API key. Bing has different keys for development and production, so you'll need to set the appropriate keys in `.env.development.local` (loaded in development) and `.env.production.local` (loaded in production). This repo contains examples files for both, `.env.development.example` and `.env.production.example`. Simply rename `.env.*.example` to `.env.*.local` and add the keys.

## Build and deploy

### `npm run build`

Builds the app as a collection of static files into `./build`. Base path and build directory are both read as environment variables from `.env`.

### `npm run build:rbb-online`

Creates a build that can be deployed to rbb's static server.

### `npm run deploy`

Builds the app for production and uploads the build to the `dj1` dev server. The deployed file will be available at https://dj1.app.rbb-cloud.de/cool-project-name (assuming you named your project `cool-project-name`).

## Embed as iframe

`iframe.html` contains a snippet for you to copy-paste into your article. Make sure to give the iframe an appropriate title.

[David J. Bradshaw's iFrame Resizer script](https://github.com/davidjbradshaw/iframe-resizer) is supported by default. If you don't need this, simply remove the corresponding script tags in `iframe.html` and `src/app.html`.

## Design tokens

Design tokens live in `style-dictionary/tokens.json`. `npm run style-dictionary` builds CSS and javascript files into `src/style` (powered by [Style Dictionary](https://amzn.github.io/style-dictionary/#/)).
