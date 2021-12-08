import fs from 'fs';
import path from 'path';
import glob from 'glob';

function main() {
  // read navigation meta data
  const filename = 'data/nav.json';
  const navSections = JSON.parse(fs.readFileSync(filename, 'utf-8'));

  // collect all documentation files
  const prefix = 'data/meta';
  const files = glob.sync(`${prefix}/**/*.json`).map((file) => {
    const f = file.replace(prefix, '');
    return {
      urlPrefix: path.dirname(f),
      filename: path.basename(f).replace('.json', ''),
    };
  });

  const navSectionsDict = {};
  navSections.forEach((navSection) => {
    navSectionsDict[navSection.urlPrefix] = navSection;
  });

  const filesDict = {};
  files.forEach(({ urlPrefix, filename }) => {
    if (!filesDict[urlPrefix]) filesDict[urlPrefix] = [];
    filesDict[urlPrefix].push(filename);
  });

  for (const [urlPrefix, pages] of Object.entries(filesDict)) {
    if (!navSectionsDict[urlPrefix]) {
      console.log('Navigation section for', urlPrefix, 'does not exist');
      continue;
    }

    const navSection = navSectionsDict[urlPrefix];
    const pagesToAdd = pages.filter((page) => !navSection.items.includes(page));
    const pagesToRemove = navSection.items.filter((i) => !pages.includes(i));

    if (pagesToAdd.length === 0 && pagesToRemove.length === 0) continue;

    pagesToAdd.forEach((page) => {
      navSection.items.push(page);
      console.log('added', page, 'to navigation section', navSection.heading);
    });

    pagesToRemove.forEach((page) => {
      navSection.items = navSection.items.filter((item) => item !== page);
      fs.unlinkSync(`src/routes/${urlPrefix}/${page}.svelte`);
      console.log('removed', page);
    });
  }

  fs.writeFileSync(filename, JSON.stringify(navSections, null, 2));
}

main();
