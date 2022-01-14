#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import glob from 'glob';

import {
  extractDocFromJsFile,
  extractDocFromSvelteFile,
} from './source-code-analysis.js';

import config from '../docs.config.js';

const srcPrefix = '../src/lib/';
const outPrefix = 'src/data/meta/';

/**
 * Creates missing directories along the path
 *
 * @param {string} path
 * @returns {void}
 */
export function makeDirectories(path) {
  if (fs.existsSync(path)) return;
  const dirs = path.split('/').slice(0, -1);
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs.slice(0, i + 1).join('/');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  }
}

/**
 * true if `file` should be ignored
 *
 * @param {string} file
 * @param {string[]} folders - folders to ignore
 * @returns {boolean}
 */
function ignore(file, folders = []) {
  // ignore index files
  const basename = path.basename(file);
  if (basename === 'index.js') return true;

  // ignore given folders
  const dir = path.dirname(file).replace(srcPrefix, '');
  if (folders.some((folder) => dir.startsWith(folder))) return true;

  return false;
}

function main() {
  const files = glob
    .sync(srcPrefix + '**/*.{js,svelte}')
    .filter((file) => !ignore(file, config.ignoreFolders));

  files.forEach((file) => {
    console.log('extract doc from', file);

    // extract data for documentation
    const data = file.endsWith('.js')
      ? extractDocFromJsFile(file)
      : extractDocFromSvelteFile(file);

    // write to file
    const out = file
      .replace(srcPrefix, outPrefix)
      .replace(path.extname(file), '.json');
    makeDirectories(out);
    fs.writeFileSync(out, JSON.stringify(data, null, 2));
  });
}

main();
