#!/usr/bin/env bash

usage() {
  echo 'Usage: '"./$(basename $0)"'

Initializes newly templated project:
  - fills in environment variables
  - removes storybook
  - updates README
'
  exit
}

# show help
if [[ "${1-}" =~ ^-*h(elp)?$ ]]; then
  usage
fi

set -o errexit  # exit script when a command fails
set -o nounset  # fail when accessing an unset variable
set -o pipefail  # treats pipeline command as failed when one command in the pipeline fails 
set -o xtrace  # prints every command before execution

# make sure to run from project root
cd $(dirname $0)/..


remove_storybook() {
  # remove storybook folder
  rm -rf .storybook/
  
  # remove GitHub action to deploy storybook
  rm -f .github/workflows/storybook.yml
  
  # remove storebook dependencien and script from package.json
  node scripts/helpers/remove-storybook-from-package-file.js

  # remove storybook from readme
  node scripts/helpers/remove-storybook-from-readme.js
}

update_environment_variables() {
  # store current year and month as environment variable
  sed -i '' 's/{date}/'"$(date '+%Y-%m')"'/g' .env

  # substitute '{project-name}' with the actual project name
  sed -i '' 's/{project-name}/'"$project_name"'/g' .env
}

update_readme() {
  # update readme
  node scripts/helpers/update-readme.js

  # substitute '{project-name}' with the actual project name
  sed -i '' 's/{project-name}/'"$project_name"'/g' README.md

  # substitue README heading with the project name
  sed -i '' '1s/.*/# '"$project_name"'/' README.md
}

main() {
  # get the current folder name
  project_name=$(basename $(pwd))

  # skip when the project was not templated
  if [[ "$project_name" = 'svelte-starter' ]]; then
    echo 'Project was not templated (current folder name: '"$project_name"')'  >&2
    exit 1
  fi

  remove_storybook
  update_environment_variables
  update_readme

  # substitute '{project-name}' in the iframe snippet
  sed -i '' 's/{project-name}/'"$project_name"'/g' iframe.html
}

main "$@"
