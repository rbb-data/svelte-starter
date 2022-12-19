#!/usr/bin/env node

/** Update README file on setup */

import fs from 'fs';
import path from 'path';

import removeSectionsFromMarkdown from './remove-sections-from-markdown.js';

function main() {
  const filename = 'README.md';
  const readmeFile = path.join(process.cwd(), filename);

  // remove Get Started section from readme
  let readme = fs.readFileSync(readmeFile, 'utf-8');
  readme = removeSectionsFromMarkdown(readme, ['## Get started']);
  let readmeLines = readme.split('\n');

  // replace introduction
  const start = 0;
  const end = readmeLines.findIndex((l) =>
    l.trim().startsWith('**Features:**')
  );
  readmeLines.splice(start, end - start);
  const projectName = path.basename(process.cwd());
  readmeLines.unshift(
    `# [${projectName}](https://github.com/rbb-data/${projectName})`,
    '',
    'This project is generated from [rbb-data/svelte-starter](https://github.com/rbb-data/svelte-starter) to create data visualizations with [Svelte](https://svelte.dev/) and [SvelteKit](https://kit.svelte.dev/).',
    '',
    '_Deployed to:_',
    '',
    '_Published at:_',
    '',
    '_External sources:_',
    ''
  );

  fs.writeFileSync(path.join(process.cwd(), filename), readmeLines.join('\n'));
  process.stdout.write(`Written to ${filename}\n`);
}

main();
