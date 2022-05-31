# rbb-data/svelte-starter

This template serves as a starting point to create data visualizations with [Svelte](https://svelte.dev/). It is built on top of [SvelteKit](https://kit.svelte.dev/).

**Features:**

- Static builds that can be hosted on a static file server
- Fetching content from [ArchieML](http://archieml.org)-formatted Google docs and Google sheets
- Easy deployment to rbb’s static servers and Google Cloud Storage
- Supports [SCSS](https://sass-lang.com/) and [PostCSS](https://postcss.org/)+[Autoprefixer](https://github.com/postcss/autoprefixer)
- Pre-generated iframe snippet to embed build into a foreign website with [a resizer script](https://github.com/rbb-data/iframe-sizer-script) supported by default
- [Style Dictionary](https://amzn.github.io/style-dictionary/#/) as a single source of truth for design tokens
- Component library, documented at https://rbb-data.github.io/svelte-starter/

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

Your app is then available at http://localhost:3000/. Edit `src/routes/index.svelte` to see changes.

> **Note**
>
> The starter references fonts that are not stored in version control. You can download them from the [wiki](https://docs.rbb-online.de/wiki/pages/viewpage.action?pageId=470686647).

> **Note**
>
> SvelteKit requires `node>=14.13`. If you get an error message on `npm install` that an "engine is unsupported", update your node version and try again.

### Alternatively, do it the old school way

If you don't want to automatically link a GitHub repo, you can instead run

```bash
npx degit rbb-data/svelte-starter cool-project-name
```

and obtain a local copy of the repo.

## Connect to Google doc

- Create a Google doc
- Grant read access to _connect@rbb-datenteam.iam.gserviceaccount.com_
- Grab the doc's id from its url and set `GOOGLE_DOC_ID` in `.env`
- Add credentials by setting `GOOGLE_CONNECT_KEY` in `.env.local` (see [Environment variables](https://github.com/rbb-data/svelte-starter#environment-variables))
- Run `npm run update-google-doc` (will parse Google doc content as [ArchieML](http://archieml.org) and write structured data to `src/data/google-doc.json`)
- Import data from `src/data/google-doc.json`

By default, some formatting is preserved when loading the doc, including: bold, italic, underline, superscript, subscript and links. Anything else is stripped ("sanitized") for security reasons.

## Connect to Google sheet

- Create a Google sheet
- Grant read access to _connect@rbb-datenteam.iam.gserviceaccount.com_
- Grab the sheet's id from its url and set `GOOGLE_SHEET_ID` in `.env`
- Add credentials by setting `GOOGLE_CONNECT_KEY` in `.env.local` (see [Environment variables](https://github.com/rbb-data/svelte-starter#environment-variables))
- Run `npm run update-google-sheets` (will parse the spreadsheet and write data to `src/data/google-sheets-{sheet-name}.csv`, one file is generated for every sheet in the given spreadsheet)
- Import data from `src/data/google-sheets-{sheet-name}.csv`

## Helpers

This repo provides some useful helpers to quickly build interactive interfaces. The [documentation](https://rbb-data.github.io/svelte-starter/) provides a more in-depth description of each helper.

### Stores (`src/lib/stores`)

- `prefersReducedMotion`: true if a user has requested to minimize the amount of non-essential motion

### Actions (`src/lib/actions`)

- `use:css`: dynamically sets CSS variables
- `use:focus`: sets focus or blur on an element
- `use:fuzzysearch`: fuzzy searches input from a user against a dataset (using [`fuzzysort`](https://github.com/farzher/fuzzysort))
- `use:geolocalization`: allows to search and geocode locations
- `use:pannable`: makes an element "pannable", i.e. recognizes when an element is interacted with and tracks a pointer's position
- `use:tooltip`: creates and destroys a (tooltip) component on interaction with an element

### Components (`src/lib/components/shared`)

- `LocalMap.svelte`: Bing map of Berlin or Brandenburg

### Headless components (`src/lib/components/shared/headless`)

Headless components are essentially unstyled, higher-order components that "orchestrate" provided content in a specific way. They typically consume other components (either through slots or props) and connect them in useful ways.

- `LocalSearch`: implements a search field that allows to search and geocode a location in Berlin or Brandenburg
- `Search`: implements a search field
- `Slider`: renders a single slide at a time and allows to navigate back and forth through swipe gestures or mouse clicks
- `Svg`: simple SVG container that implements a common chart sizing pattern
- `Tabs`: makes content selectable

## Environment variables

Environment variables are handled by [Vite](https://vitejs.dev), the behind-the-scenes frontend tooling that powers SvelteKit. See [Vite's documentation](https://vitejs.dev/guide/env-and-mode.html) for more information on how Vite treats environment variables. Environment variables prefixed with `VITE_` are exposed to client-side code.

| Environment variable       | Description                                                            | Default                                             | File                     | Sensitive? |
| -------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------- | ------------------------ | ---------- |
| `BASE_PATH`                | Specifies where the app is served from                                 | /{project-name}                                     | `.env`                   | no         |
| `BUILD_DIR`                | The directory to write prerendered pages to                            | build                                               | `.env`                   | no         |
| `GOOGLE_CONNECT_EMAIL`     | Email address to share Google doc/sheet with                           | connect@rbb-data-api-access.iam.gserviceaccount.com | `.env`                   | no         |
| `GOOGLE_DOC_ID`            | Id of the connected Google doc                                         | 1wCovwTGxPsPM-ED-D7hCaL5sMUFBy1A8OadVUCDtQ3A        | `.env`                   | no         |
| `GOOGLE_SHEET_ID`          | Id of the connected Google sheet                                       | 1RPOs51w4kJsvuNg1eT0foVgLau_iI7hmJ-EOGQqBC04        | `.env`                   | no         |
| `VITE_OPENROUTSERVICE_KEY` | Private key to access [openrouteservice](https://openrouteservice.org) |                                                     | `.env.local`             | yes        |
| `GOOGLE_CONNECT_KEY`       | Private key to access Google docs and sheets                           |                                                     | `.env.local`             | yes        |
| `VITE_BING_KEY`            | Allows to render Bing-powered maps (in development)                    |                                                     | `.env.development.local` | yes        |
| `VITE_BING_KEY`            | Allows to render Bing-powered maps (in production)                     |                                                     | `.env.production.local`  | yes        |

Variables in `.env` are public and loaded in all cases. Sensitive variables should live in a `.env.local` file that is ignored by git. For convenience, `.env.local.example` is an empty template file; simply add the keys and move to `.env.local`.

If you use a Bing layer in a Leaflet map, you'll need to set the Bing API key. Bing has different keys for development and production, so you'll need to set the appropriate keys in `.env.development.local` (loaded in development) and `.env.production.local` (loaded in production). This repo contains example files for both environments, `.env.development.example` and `.env.production.example`, so that you can simply rename `.env.*.example` to `.env.*.local` and add the keys.

Secrets and private keys are not stored in version control but you'll find them in our [wiki](https://docs.rbb-online.de/wiki/pages/viewpage.action?pageId=470686647).

## Build and deploy

### `npm run dev`

Starts the development server. Your app is then available at http://localhost:3000/.

### `npm run build`

Builds the app as a collection of static files into `./build`. Base path and build directory are both read as environment variables from `.env`.

### `npm run build:gc-storage`

Creates a build that can be deployed to Google Cloud Storage.

### `npm run build:rbb-online`

Creates a build that can be deployed to rbb's static server.

### `npm run deploy:dj1`

Builds the app for production and uploads the build to the `dj1` dev server. The deployed file will be available at https://dj1.app.rbb-cloud.de/cool-project-name (assuming you named your project `cool-project-name`).

You need a certificate to access the server. If you don't have one yet your colleagues will gladly help you out.

> **Note**
>
> The script uses [rsync](https://rsync.samba.org/) to efficiently synchronize changes between your local build and the target folder. The version of `rsync` that ships with macOS is out of date, so please install a recent version via [homebrew](https://brew.sh/) or [nix](https://nixos.org/guides/install-nix.html).

### `npm run deploy:gc-storage`

Builds the app for production and uploads the files to the Google Cloud Storage `rbb-data-static`. You'll need Google Cloud's command line tools `gcloud` and `gsutil` installed and configured (for installation instructions, see https://cloud.google.com/sdk/docs/install).

The deployed file will be available at https://storage.googleapis.com/rbb-data-static/cool-project-name/index.html (assuming you named your project `cool-project-name`).

### `npm run update-tokens`

Builds design tokens into CSS, SCSS and javascript files, see [Design tokens](https://github.com/rbb-data/svelte-starter#design-tokens).

### `npm run update-google-doc`

Reads the connected Google doc and writes to `src/data/google-doc.json`, see [Connect to Google doc](https://github.com/rbb-data/svelte-starter#connect-to-google-doc).

### `npm run update-google-sheets`

Reads the connected Google sheet and writes to `src/data/google-sheet-*.csv`, see [Connect to Google sheet](https://github.com/rbb-data/svelte-starter#connect-to-google-sheet).

### `npm run lint`

Runs `prettier` and `eslint` (only checks, doesn't write).

### `npm run format`

Formats files using `prettier`.

## Embed as iframe

`iframe.html` contains a snippet for you to copy-paste into your article. Make sure to give the iframe an appropriate title.

[A custom iframe resizer script](https://github.com/rbb-data/iframe-sizer-script) is supported by default that works on the web and in the rbb|24 app. If app support is not needed, use [David J. Bradshaw's resizer script](https://github.com/davidjbradshaw/iframe-resizer) instead. If you don't need any resizing, simply remove the corresponding script tags in `iframe.html` and `src/app.html`.

## Design tokens

Design tokens live in `style-dictionary/tokens.json`. `npm run update-tokens` builds CSS, SCSS files into `src/style` and a javascript file into `src/lib` (powered by [Style Dictionary](https://amzn.github.io/style-dictionary/#/)).
