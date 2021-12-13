import fs from 'fs';
import path from 'path';
import glob from 'glob';

import config from '../docs.config.js';

/**
 * @param {string} path
 * @returns {import('$lib/types').SvelteType}
 */
function getTypeFromPath(path) {
  if (path.startsWith('/action')) return 'action';
  if (path.startsWith('/component')) return 'component';
  if (path.startsWith('/store')) return 'store';
}

/**
 * @param {import('$lib/types').NavSection} navSection
 * @param {string} page
 */
function addPage(navSection, page, verbose = true) {
  navSection.items.push(page);
  if (verbose)
    console.log('added', page, 'to navigation section', navSection.heading);
}

/**
 * @param {import('$lib/types').NavSection} navSection
 * @param {string} page
 */
function removePage(navSection, page, verbose = true) {
  navSection.items = navSection.items.filter((item) => item !== page);
  fs.unlinkSync(`src/routes/${navSection.urlPrefix}/${page}.svelte`);
  fs.rmSync(`src/lib/custom/${navSection.urlPrefix}/${page}`, {
    recursive: true,
    force: true,
  });
  if (verbose) console.log('removed', page);
}

function main() {
  // read navigation meta data
  const filename = 'data/nav.json';

  /** @type {import('$lib/types').NavSection[]} */
  let navSections = fs.existsSync(filename)
    ? JSON.parse(fs.readFileSync(filename, 'utf-8'))
    : [];

  // collect all documentation files
  const prefix = 'data/meta';
  const files = glob.sync(`${prefix}/**/*.json`).map((file) => {
    const f = file.replace(prefix, '');
    return {
      urlPrefix: path.dirname(f),
      filename: path.basename(f).replace('.json', ''),
    };
  });

  /** @type {Record<string, import('$lib/types').NavSection>} */
  const navSectionsDict = {};
  navSections.forEach((navSection) => {
    navSectionsDict[navSection.urlPrefix] = navSection;
  });

  /** @type {Record<string, string[]>} */
  const filesDict = {};
  files.forEach(({ urlPrefix, filename }) => {
    if (!filesDict[urlPrefix]) filesDict[urlPrefix] = [];
    filesDict[urlPrefix].push(filename);
  });

  // only keep those sections that have documentation
  navSections
    .filter((navSection) => !filesDict[navSection.urlPrefix])
    .forEach((navSection) => {
      navSection.items.forEach((page) => removePage(navSection, page));
    });
  navSections = navSections.filter(
    (navSection) => filesDict[navSection.urlPrefix]
  );

  for (const [urlPrefix, pages] of Object.entries(filesDict)) {
    /** @type {import('$lib/types').NavSection} */
    let navSection;

    if (!navSectionsDict[urlPrefix]) {
      navSection = {
        heading: config.sections[urlPrefix.slice(1)],
        urlPrefix,
        type: getTypeFromPath(urlPrefix),
        items: [],
      };
      pages.forEach((page) => addPage(navSection, page, false));
      navSections.push(navSection);
      console.log(
        'Navigation section',
        navSection.heading,
        'created, serving pages',
        pages.join(', ')
      );
      continue;
    }

    navSection = navSectionsDict[urlPrefix];
    navSection.heading = config.sections[urlPrefix.slice(1)];

    const pagesToAdd = pages.filter((page) => !navSection.items.includes(page));
    const pagesToRemove = navSection.items.filter((i) => !pages.includes(i));

    if (pagesToAdd.length === 0 && pagesToRemove.length === 0) continue;

    pagesToAdd.forEach((page) => addPage(navSection, page));
    pagesToRemove.forEach((page) => removePage(navSection, page));
  }

  const order = Object.values(config.sections);

  navSections.sort((a, b) => {
    if (!order.includes(a.heading) && !order.includes(b.heading)) return 0;
    if (!order.includes(a.heading)) return 1;
    if (!order.includes(b.heading)) return -1;
    return order.findIndex((h) => h === a.heading) >
      order.findIndex((h) => h === b.heading)
      ? 1
      : -1;
  });

  fs.writeFileSync(filename, JSON.stringify(navSections, null, 2));
}

main();
