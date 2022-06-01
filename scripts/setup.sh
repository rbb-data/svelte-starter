#!/usr/bin/env bash

# this script is meant to run once after having cloned the repository

# print every executed line and abort when one fails
set -ex

# make sure to run from project root
cd $(dirname $0)/..

# remove documentation
[ -d docs ] && rm -rf docs/

# substitute '{project-name}' with the current folder name
sed -i '' 's/{project-name}/'"$(basename $(pwd))"'/g' package.json .env iframe.html
