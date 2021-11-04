#!/usr/bin/env bash

# this script is meant to run once after having cloned the repository.
# because it is setup in `.scripts.postinstall` in `package.json`, it will
# automatically run when doing an `npm install`.

# print every executed line and abort when one fails
set -ex

# skip when the project was not templated
[ "$(git log --oneline | wc -l)" -eq 1 ] || exit 0

# avoid running the setup script multiple times
git log --oneline | grep -q 'Initial commit' && exit 0

# make sure to run from project root
cd $(dirname $0)/..

# substitute '{project-name}' with the current folder name
sed -i '' 's/{project-name}/'"$(basename $(pwd))"'/g' package.json
