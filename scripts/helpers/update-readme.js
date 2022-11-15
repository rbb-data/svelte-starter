#!/usr/bin/env node

/** Update README file on setup */

import fs from 'fs';
import path from 'path';

// TODO: duplicate code in remove-storybook-from-readme

// must be sorted according to their appearance
const sectionsToRemove = ['## Get started'];

function main() {
  const filename = 'README.md';
  const packageFile = path.join(process.cwd(), filename);
  const readme = fs.readFileSync(packageFile, 'utf-8');

  let readmeLines = readme.split('\n');

  // remove sections
  for (let s = sectionsToRemove.length - 1; s >= 0; s--) {
    let section = sectionsToRemove[s];
    const level = section.match(/(#+).*/m)[1];

    let start, end;
    for (let i = 0; i < readmeLines.length; i++) {
      const line = readmeLines[i];
      if (start && line.startsWith(level + ' ')) {
        end = i;
        break;
      }
      if (line.startsWith(section)) start = i;
    }

    if (!end) end = readmeLines.length - 1;

    readmeLines.splice(start, end - start);
    process.stdout.write(`Removed ${section}.\n`);
  }

  // replace introduction
  const start = 0;
  const end = readmeLines.findIndex((l) =>
    l.trim().startsWith('**Features:**')
  );
  readmeLines.splice(start, end - start);

  readmeLines.unshift(
    '# ' + path.basename(process.cwd()),
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
