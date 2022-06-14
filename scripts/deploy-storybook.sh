#!/usr/bin/env bash

set -ex

# build docs
npm run storybook:build

# navigate into the build output directory
cd docs-build

git init
git config --global user.email "deploy-bot@example.com"
git config --global user.name "deploy-bot"

git add -A
git commit -m 'deploy storybook'

# push to gh-pages branch
git push -f git@github.com:rbb-data/svelte-starter.git main:gh-pages

cd -
