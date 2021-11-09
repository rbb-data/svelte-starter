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

## Get started

To create a new project, click the `Use this template` button above. You can then clone into your new project by running

```bash
git clone https://github.com/rbb-data/cool-project-name.git
```

assuming you named your repo `cool-project-name`.

Install the app and start the development server by running

```bash
cd cool-project-name
npm install
npm run dev
```

Your app is then available at http://localhost:3000/. Edit `src/routes/index.svelte`.

### Alternatively, do it the old school way

If you don't want to automatically link a GitHub repo, you can instead run

```bash
npx degit rbb-data/svelte-starter cool-project-name --mode=git
```

> **Note:** Specifying `--mode=git` is only necessary for copying private repos. It can be removed once this repo goes public.

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
- Fetch `/load/data/my-data-file.csv` in SvelteKit's [`load`](https://kit.svelte.dev/docs#loading) function

Supported file formats are `*.json`, `*.yaml` and `*.csv`. If you want to add support for another format, just add an appropriate parser in `src/routes/load/data/[filename].ts`.

## Connect to Google doc

- Create a google doc
- Grant read access to _connect@rbb-datenteam.iam.gserviceaccount.com_
- Grab the doc's id from its url
- Fetch `/load/google-doc/my-google-doc-id` in SvelteKit's [`load`](https://kit.svelte.dev/docs#loading) function

By default any formatting is ignored when loading the doc. Fetch from `/load/google-doc/my-google-doc-id?preserve-styles` to preserve some formatting. Supported styles are: bold, italic, underline, superscript, subscript. As well as links. Anything else is stripped ("sanitized") for security reasons.

The response is a json object with the contents of your doc parsed as [ArchieML](http://archieml.org).

The Google credentials necessary to access docs that are shared with _connect@rbb-datenteam.iam.gserviceaccount.com_ should be stored in a json file named `google-credentials.json`. Secrets are not stored in version control; let one of your colleagues know, if you need them :)

## Actions

Defined in `src/lib/actions/`.

### `use:css`

Dynamically set CSS variables. For example, `<div use:css{{ color: 'steelblue' }}>...</div>` sets `--color` to `'steelblue'` on that div.

## Build and deploy

### `npm run build`

Builds the app as a collection of static files into `./build`. Base path and build directory are both read as environment variables from `.env`.

### `npm run build:rbb-online`

Creates a build that can be deployed to rbb's static server

### `npm run deploy`

Builds the app for production and uploads the build to the `dj1` dev server. The deployed file will be available at https://dj1.app.rbb-cloud.de/cool-project-name (assuming you named your project `cool-project-name`).

## Embed as iframe

`iframe.html` contains a snippet for you to copy-paste into your article. Make sure to give the iframe an appropriate title.

[David J. Bradshaw's iFrame Resizer script](https://github.com/davidjbradshaw/iframe-resizer) is supported by default. If you don't need this, simply remove the corresponding script tags in `iframe.html` and `src/app.html`.

## Design tokens

Design tokens live in `style-dictionary/tokens.json`. `npm run style-dictionary` builds CSS and javascript files into `src/style` (powered by [Style Dictionary](https://amzn.github.io/style-dictionary/#/)).
