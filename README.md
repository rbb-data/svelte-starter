# rbb-data svelte-starter

> 🚧🚧🚧 **This project is work in progress** 🚧🚧🚧

This repository serves as a starting point to create data visualizations with [Svelte](https://svelte.dev/).

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

Your app is then available at http://localhost:3000/

### Alternatively, do it the old school way

If you prefer the command line or if you don't want to automatically link a GitHub repo, you can instead run

```bash
npx degit rbb-data/svelte-starter cool-project-name --mode=git
```

> **Note:** Specifying `--mode=git` is only necessary for copying private repos. It can be removed once this repo goes public.

`degit` downloads content from GitHub but does not initialize a git repository. To add a remote, create an empty GitHub repo named `cool-project-name` and run

```bash
# initialize git
cd cool-project-name
git init

# commit content
git add --all
git commit -m "Initial commit"

# add a remote and push
git remote add origin https://github.com/rbb-data/cool-project-name.git
git branch -M main
git push -u origin main
```

## How to...

Explainations of some common patterns. Some of these techniques are exemplified in `src/routes/index.svelte`.

### ...load data?

Prerendering the app as a collection of static files entails loading data _on the server_. To do so, we make use of SvelteKit's [`load`](https://kit.svelte.dev/docs#loading) function that runs on both the server and the client (on hydration). To load data from `some-file.csv`, place the file in `./data` and - inside `load` - make a request against the app's own endpoint `/load/data/some-file.csv` that loads `some-file.csv` from `./data` and sends back a json response with the parsed file content (it is important to use SvelteKit's `fetch` implementation received by `load`).

Supported file formats are `*.json`, `*.yaml` and `*.csv`. If you want to add support for another format, just add an appropriate parser to [this extension-parser mapping](https://github.com/rbb-data/svelte-starter/blob/9b4ee0b35133489f399264626fa3f7e52988cb77/src/routes/load/data/%5Bfilename%5D.ts#L16) in `src/routes/load/data/[filename].ts`.

### ...connect to a Google doc?

First, grant _connect@rbb-datenteam.iam.gserviceaccount.com_ read access to your Google doc and grab the doc's id from its URL (e.g. a doc with URL https://docs.google.com/document/d/1wCovwTGxPsPM-ED-D7hCaL5sMUFBy1A8OadVUCDtQ3A/ has id `1wCovwTGxPsPM-ED-D7hCaL5sMUFBy1A8OadVUCDtQ3A`). Within SvelteKit's `load` function, make a request against the app's own endpoint `/load/google-doc/my-google-doc-id`, for example `/load/google-doc/1wCovwTGxPsPM-ED-D7hCaL5sMUFBy1A8OadVUCDtQ3A`. The reponse is a json object with the contents of your doc parsed as [ArchieML](http://archieml.org). ArchieML is a simple markup language designed at the New York Times, learn about its syntax from [their demo](http://archieml.org/#demo).

The Google credentials necessary to access docs that are shared with _connect@rbb-datenteam.iam.gserviceaccount.com_ should be stored in a json file named `google-credentials.json`. Secrets are not stored in version control; let one of your colleagues know, if you need them :)

### ...build and deploy?

`npm run deploy` builds the app for production and uploads the build to the `dj1` dev server. The deployed file will be available at https://dj1.app.rbb-cloud.de/cool-project-name (assuming you named your project `cool-project-name`). Be aware that the script overwrites all contents in the target folder, so make sure to choose a unique project name. In case you overwrote something by accident, don't panic: There are frequent backups and the wiki contains information on how to restore these files.

If you want to deploy to `rbb-online.de/static`, rbb's static server for production, run `npm run build:rbb-online` instead. You can then put the build located at `./cool-project-name` on the server.

### ...embed a visualization into an article?

`iframe-snippet.html` contains a snippet for you to copy-paste into your article. Make sure to give the iframe an appropriate title.

[David J. Bradshaw's iFrame Resizer script](https://github.com/davidjbradshaw/iframe-resizer) is supported by default. If you don't need this, simply remove the script tags in `iframe-snippet.html` as well as the script tag loading `iframeResizer.contentWindow.min.js` in `src/app.html`.

## Directory structure

```bash
.
├── data  -- the app's own endpoint scans this folder for data to be loaded
├── scripts
├── src  -- your code lives here
│   ├── lib  -- internal library
│   │   └── components
│   │       └── shared  -- reusable Svelte componenets provided by this starter
│   ├── routes  -- public-facing stuff
│   │   └── load  -- a collection of endpoints to load stuff
│   │       ├── data  -- contains an endpoint to load data from the server
│   │       └── google-doc  -- contains an endpoint to load and parse a Google doc
│   └── style
└── static  -- anything in here is served as a static file
```
