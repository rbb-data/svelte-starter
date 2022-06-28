# rbb-data/svelte-starter

This template serves as a starting point to create data visualizations with [Svelte](https://svelte.dev/). It is built on top of [SvelteKit](https://kit.svelte.dev/).

**Features:**

- Static builds that can be hosted on a static file server
- Loads data from Google sheets
- Fetches structured data from [ArchieML](http://archieml.org)-formatted Google docs
- Easy deployment to rbb's Google Cloud Storage
- Pre-generated iframe snippet to embed build into a foreign website with [a resizer script](https://github.com/rbb-data/iframe-sizer-script) supported by default
- [Style Dictionary](https://amzn.github.io/style-dictionary/#/) as a single source of truth for design tokens
- Component library, documented at https://rbb-data.github.io/svelte-starter/

## Get started

To create a new project, click the `Use this template` button above. You can then clone into your new project by running

```bash
git clone https://github.com/rbb-data/my-cool-project.git
```

assuming you named your repo `my-cool-project`.

Install the app and start the development server:

```bash
cd my-cool-project
npm install
npm run dev
```

Your app is then available at http://localhost:3000/. Edit `src/routes/index.svelte` to see changes.

> **Note**
>
> rbb|24's Interstate font files are not checked into version control but can be downloaded from our [wiki](https://docs.rbb-online.de/wiki/pages/viewpage.action?pageId=470686647). Store the downloaded files under `.static/fonts/`.

> **Note**
>
> SvelteKit requires `node>=14.13`. If you get an error message on `npm install` that an "engine is unsupported", update your node version and try again.

### Alternatively, do it the old school way

If you don't want to automatically link a GitHub repo, you can instead run

```bash
npx degit rbb-data/svelte-starter my-cool-project
```

and obtain a local copy of the repo.

Then, run the setup script manually:

```bash
cd my-cool-project
scripts/setup.sh
```

## Connect to external resources

### Connect to Google doc

- Create a Google doc
- Grant read access to _connect@rbb-data-api-access.iam.gserviceaccount.com_
- Grab the doc's id from its url and set `GOOGLE_DOC_ID` in `.env`
- Add credentials by setting `GOOGLE_CONNECT_KEY` in `.env.local` (see [Environment variables](https://github.com/rbb-data/svelte-starter#environment-variables))
- Run `npm run update:gd` (will parse Google doc content as [ArchieML](http://archieml.org) and write structured data to `src/data/google-doc.json`)
- Import data from `src/data/google-doc.json`

By default, some formatting is preserved when loading the doc, including: bold, italic, underline, superscript, subscript and links. Anything else is stripped ("sanitized") for security reasons.

### Connect to Google sheet

- Create a Google sheet
- Grant read access to _connect@rbb-data-api-access.iam.gserviceaccount.com_
- Grab the sheet's id from its url and set `GOOGLE_SHEET_ID` in `.env`
- Add credentials by setting `GOOGLE_CONNECT_KEY` in `.env.local` (see [Environment variables](https://github.com/rbb-data/svelte-starter#environment-variables))
- Run `npm run update:gs` (will parse the spreadsheet and write to `src/data/google-sheets-{sheet-name}.csv`, one file is generated for every sheet in the given spreadsheet)
- Import data from `src/data/google-sheets-{sheet-name}.csv`

## Build and deploy

Run `npm run deploy` to deploy to https://storage.googleapis.com/rbb-data-static/my-cool-project/index.html

### Using GitHub actions

[This GitHub action](https://github.com/rbb-data/svelte-starter/actions/workflows/deploy.yml) deploys the app to the Google Cloud Storage. Clicking on "Run workflow" will trigger the action. By default, the app is deployed to a test page, https://storage.googleapis.com/rbb-data-static/my-cool-project-experimenal/index.html (note the `-experimental` suffix). If you're sure what you're doing, tick "Deploy for production (DANGER)" to deploy to https://storage.googleapis.com/rbb-data-static/my-cool-project/index.html instead.

> **Note**
>
> The credentials necessary for deploying to the cloud are stored as organization secrets that can only be accessed by public repositories. If your repository is private, make sure to add the necessary secrets on the repository level. You'll find the secrets in our [wiki](https://docs.rbb-online.de/wiki/pages/viewpage.action?pageId=470686647).

## Directory structure

```
src
├── data
├── lib
│   ├── actions  -- Svelte actions, see https://svelte.dev/tutorial/actions
│   ├── assets  -- additional data
│   │   └── geo
│   ├── components
│   │   ├── icons  -- list of icons as Svelte components
│   │   └── shared  -- component library, see https://rbb-data.github.io/svelte-starter/
│   └── stores  -- Svelte stores, see https://svelte.dev/tutorial/writable-stores
├── routes  -- pages, filenames map to urls
│   └── examples
└── style  -- global css and scss files
```

## Environment variables

Environment variables are handled by [Vite](https://vitejs.dev), the behind-the-scenes frontend tooling that powers SvelteKit. See [Vite's documentation](https://vitejs.dev/guide/env-and-mode.html) for more information on how Vite treats environment variables. Environment variables prefixed with `VITE_` are exposed to client-side code.

| Environment variable       | Description                                                            | Default                                             | File         | Sensitive? |
| :------------------------- | :--------------------------------------------------------------------- | :-------------------------------------------------- | :----------- | :--------- |
| `BASE_PATH`                | Specifies where the app is served from                                 | /my-cool-project                                    | `.env`       | no         |
| `BUILD_DIR`                | The directory to write prerendered pages to                            | build                                               | `.env`       | no         |
| `GOOGLE_CONNECT_EMAIL`     | Email address to share Google doc/sheet with                           | connect@rbb-data-api-access.iam.gserviceaccount.com | `.env`       | no         |
| `GOOGLE_DOC_ID`            | Id of the connected Google doc                                         | 1wCovwTGxPsPM-ED-D7hCaL5sMUFBy1A8OadVUCDtQ3A        | `.env`       | no         |
| `GOOGLE_SHEET_ID`          | Id of the connected Google sheet                                       | 1RPOs51w4kJsvuNg1eT0foVgLau_iI7hmJ-EOGQqBC04        | `.env`       | no         |
| `VITE_OPENROUTSERVICE_KEY` | Private key to access [openrouteservice](https://openrouteservice.org) |                                                     | `.env.local` | yes        |
| `GOOGLE_CONNECT_KEY`       | Private key to access Google docs and sheets                           |                                                     | `.env.local` | yes        |

Variables in `.env` are public and loaded in all cases. Sensitive variables should live in a `.env.local` file that is ignored by git. For convenience, `.env.local.example` is an empty template file; simply add the keys and move to `.env.local`.

Secrets and private keys are not stored in version control but you'll find them in our [wiki](https://docs.rbb-online.de/wiki/pages/viewpage.action?pageId=470686647).

## Scripts

### `npm run dev`

Starts the development server. Your app is then available at http://localhost:3000/.

### `npm run build`

Builds the app as a collection of static files into `./build`. Base path and build directory are both read as environment variables from `.env`. The generated build can be deployed to rbb's Google Cloud Storage.

### `npm run deploy`

Builds the app for production and uploads the files to the Google Cloud Storage `rbb-data-static`. You'll need Google Cloud's command line tools `gcloud` and `gsutil` installed and configured (for installation instructions, see https://cloud.google.com/sdk/docs/install).

The deployed file will be available at https://storage.googleapis.com/rbb-data-static/my-cool-project/index.html (assuming you named your project `my-cool-project`).

### `npm run deploy--experimental`

Same as `npm run deploy` but deploys to https://storage.googleapis.com/rbb-data-static/my-cool-project-experimental/index.html (note the `-experimental` suffix).

### `npm run update:gd`

Reads the connected Google doc and writes to `src/data/google-doc.json`, see [Connect to Google doc](https://github.com/rbb-data/svelte-starter#connect-to-google-doc).

### `npm run update:gs`

Reads the connected Google sheet and writes to `src/data/google-sheet-*.csv`, see [Connect to Google sheet](https://github.com/rbb-data/svelte-starter#connect-to-google-sheet).

### `npm run update:tokens`

Builds design tokens into CSS, SCSS and javascript files, see [Design tokens](https://github.com/rbb-data/svelte-starter#design-tokens).

### `npm run update:all`

Updates style tokens and all data sources.

### `npm run docs`

Starts the development server for the documentation site. The site is then available at http://localhost:6006/.

### `npm run docs:build`

Build the documentation site into `./docs-build` for production.

### `npm run docs:deploy`

Build and deploys the documentation site to GitHub pages at https://rbb-data.github.io/svelte-starter/

### `npm run lint`

Runs `prettier` and `eslint` (only checks, doesn't write).

### `npm run format`

Formats files using `prettier`.

### `npm run check`

Type-checks the project.

### `npm run check:watch`

Type-checks the project continuously.

## Embed as iframe

`iframe.html` contains a snippet for you to copy-paste into your article. Make sure to give the iframe an appropriate title.

[A custom iframe resizer script](https://github.com/rbb-data/iframe-sizer-script) is supported by default that works on the web and in the rbb|24 app. If app support is not needed, use [David J. Bradshaw's resizer script](https://github.com/davidjbradshaw/iframe-resizer) instead. If you don't need any resizing, simply remove the corresponding script tags in `iframe.html` and `src/app.html`.

## Design tokens

Design tokens live in `style-dictionary/tokens.json`. `npm run update:tokens` builds CSS, SCSS files into `src/style` and a javascript file into `src/lib` (powered by [Style Dictionary](https://amzn.github.io/style-dictionary/#/)).
