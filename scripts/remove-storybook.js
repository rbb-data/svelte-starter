#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function main() {
  const packageFile = path.join(process.cwd(), 'package.json');
  let pck = JSON.parse(fs.readFileSync(packageFile));

  pck = removeDeps(pck);
  pck = removeScripts(pck);

  fs.writeFileSync(packageFile, JSON.stringify(pck, null, 2));
}

function removeDeps(pck) {
  const devDeps = Object.keys(pck.devDependencies);
  let depsToRemove = ['@babel/core', 'babel-loader', 'svelte-loader'];
  depsToRemove.push(...devDeps.filter((dep) => dep.startsWith('@storybook/')));

  for (const dep of depsToRemove) {
    if (pck.devDependencies[dep]) {
      delete pck.devDependencies[dep];
      process.stdout.write(`Removed ${dep}.\n`);
    } else {
      process.stdout.write(`Skipped ${dep}.\n`);
    }
  }

  return pck;
}

function removeScripts(pck) {
  const scripts = Object.keys(pck.scripts);
  const scriptsToRemove = scripts.filter((script) =>
    script.startsWith('storybook')
  );

  for (const script of scriptsToRemove) {
    if (pck.scripts[script]) {
      delete pck.scripts[script];
      process.stdout.write(`Removed script ${script}.\n`);
    } else {
      process.stdout.write(`Skipped script ${script}.\n`);
    }
  }

  return pck;
}

main();
