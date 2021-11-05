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

If you prefer the command line or if you don't want to automatically link a GitHub repo, you can alternatively pick a `cool-project-name` and run

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

### ...load data

To do

### ...connect to a Google doc

To do

### ...set up a responsive SVG container

To do

### ...build and deploy

To do

## Directory structure

To do

```bash
.
├── data
├── scripts
├── src
│   ├── lib
│   │   └── components
│   │       └── shared
│   ├── routes
│   │   └── load
│   │       ├── data
│   │       └── google-doc
│   └── style
└── static
```

## Development and build scripts

To do
