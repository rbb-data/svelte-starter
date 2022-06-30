#!/usr/bin/env bash

# this script is meant to run on setup in templated projects

# print every executed line and abort when one fails
set -ex

# make sure to run from project root
cd $(dirname $0)/..

# remove documentation
rm -rf .storybook/
rm -f .github/workflows/storybook.yml
node scripts/remove-storybook.js
node scripts/remove-sections-from-readme.js

# substitute '{project-name}' with the current folder name
sed -i '' 's/{project-name}/'"$(basename $(pwd))"'/g' package.json .env iframe.html README.md
sed -i '' '1s/.*/# '"$(basename $(pwd))"'/' README.md
