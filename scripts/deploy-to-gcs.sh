#!/usr/bin/env bash

usage() {
  echo -e "Usage: ./$(basename $0) [-b|--build] [base_path]

Deploys a static build to Google Cloud Storage

  --build \t build before deploying, base_path is the public base path (default: BASE_PATH in .env)
"
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

# load environment variables from file
export $(cat .env | xargs)


upload() {
  # set google cloud project if necessary
  cloud_project=rbb-data-static-file-server
  [ "$(gcloud config get-value project)" = "$cloud_project" ] || gcloud config set project "$cloud_project"

  # destination folder in google cloud storage
  cloud_dst=gs:/"$base_path"

  # The content is first removed, then re-added, even though
  # gsutil does come with a subcommand for syncing. `gsutil rsync`
  # does not come with an option to compress files though. To
  # compress text files locally, then uploading the compressed
  # files and _subsequently_ configuring the appropriate content
  # encodings and types is dangerous since a user that pulls the
  # data while the application is updating will end up with
  # corrupted files. That's why it's necessary to first delete all
  # files, then re-add and compress them while copying to the cloud.

  # remove folder if it exists
  gsutil -q stat ${cloud_dst}/* && gsutil -m rm -r $cloud_dst

  # compress and upload files
  gsutil -m cp -r -z html,css,js "$BUILD_DIR" "$cloud_dst"

  # configure caching of assets
  gsutil setmeta -h 'Cache-Control:public,max-age=0,no-transform' "$cloud_dst"/**/*.html
  gsutil setmeta -h 'Cache-Control:public,max-age=31536000,immutable' "$cloud_dst"/**/*.{css,js}
  gsutil setmeta -h 'Cache-Control:public,max-age=31536000' "$cloud_dst"/**/*.{png,svg}
}

main() {
  # get the current folder name
  project_name=$(basename $(pwd))

  # skip when the project was not templated
  if [[ "$project_name" = 'svelte-starter' ]]; then
    echo 'Project was not templated (current folder name: '"$project_name"')' >&2
    exit 1
  fi

  # use base path from command line or from the environment
  base_path=${2:-"$BASE_PATH"}

  # fail if the base path is not set
  if [[ "$base_path" =~ .*{project-name}.* ]]; then
    echo 'BASE_PATH in .env not set (did you forget to run the setup script?)' >&2
    exit 1
  fi

  # re-build app if requested
  if [[ "${1-}" =~ ^-*b(uild)?$ ]]; then
    BASE_PATH="$base_path" npm run build
  fi

  upload
}

main "$@"
