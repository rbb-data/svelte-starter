#!/usr/bin/env bash

# deploy docs to GitHub pages

set -ex

# build docs
npm run docs:build

# navigate into the build output directory
cd docs-build

git init
git add -A
git commit -m 'deploy docs'

# push to gh-pages branch
git push -f git@github.com:rbb-data/svelte-starter.git main:gh-pages

cd -
