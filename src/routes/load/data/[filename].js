import fs from 'fs';
import { extname } from 'path';
import yaml from 'yaml';
import { autoType, csvParse } from 'd3-dsv';

import error from '../_error';

// GET /load/data/[filename]
/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async ({ params }) => {
  const { filename } = params;
  const path = `data/${filename}`;
  const extension = extname(filename).slice(1);

  /** @type {Record<string, (s: string) => Record<any,any>>} */
  const parse = {
    json: JSON.parse,
    yaml: yaml.parse,
    csv: (str) => csvParse(str, autoType),
  };
  const supportedFormats = Object.keys(parse);
  const supportedFormatsStr = supportedFormats.join(', ');

  // check if file exists
  if (!fs.existsSync(path)) {
    const message = [
      `File ${path} does not exist.`,
      'Make sure that the file you are referring to lies within the ./data directory.',
    ];
    return error(404, message.join(' '));
  }

  // check if a format is specified
  if (!extension) {
    const message = `Please specify one of the supported extensions (${supportedFormatsStr})`;
    return error(501, message);
  }

  // check if the given file format is supported
  if (!supportedFormats.some((ext) => ext === extension)) {
    const message = [
      `File with extension .${extension} is not supported.`,
      'Supported extensions:',
      supportedFormats.join(', '),
    ];
    return error(501, message.join(' '));
  }

  // parse data
  const content = fs.readFileSync(path, 'utf8');
  const data = parse[extension](content);

  return {
    status: 200,
    body: data,
  };
};
