#!/usr/bin/env bash

# this script is meant to run once after having cloned the repository

# print every executed line and abort when one fails
set -ex

# make sure to run from project root
cd $(dirname $0)/..

# remove documentation
rm -rf .storybook/
rm -f .github/workflows/storybook.yml
find src -name '*.stories.*' -type f -delete
node scripts/remove-storybook.js

# substitute '{project-name}' with the current folder name
sed -i '' 's/{project-name}/'"$(basename $(pwd))"'/g' package.json .env iframe.html
