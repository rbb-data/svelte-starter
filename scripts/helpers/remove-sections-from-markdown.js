/**
 * Remove sections from a Markdown document
 *
 * @param {string} doc string in Markdown format
 * @param {string[]} sections headings of the sections to be removed (must be sorted according to their appearance)
 */
export default function removeSectionsFromMarkdown(doc, sections) {
  let docLines = doc.split('\n');

  // remove sections
  for (let s = sections.length - 1; s >= 0; s--) {
    let section = sections[s];
    const level = section.match(/(#+).*/m)[1];

    let start, end;
    for (let i = 0; i < docLines.length; i++) {
      const line = docLines[i];
      if (start && line.startsWith(level + ' ')) {
        end = i;
        break;
      }
      if (line.startsWith(section)) start = i;
    }

    if (!end) end = docLines.length - 1;

    docLines.splice(start, end - start);
    process.stdout.write(`Removed ${section}.\n`);
  }

  return docLines.join('\n');
}
