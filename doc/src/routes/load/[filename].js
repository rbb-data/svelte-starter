import fs from 'fs';
import path from 'path';
import glob from 'glob';

const files = glob.sync('meta/**/*.*');

function getPath(filename) {
  for (const file of files) {
    if (path.basename(file) === filename) {
      return file;
    }
  }
}

// construct an error response
const error = (status, message) => ({
  status,
  body: {
    error: {
      status,
      message,
    },
  },
});

// GET /load/[filename]
export const get = async ({ params }) => {
  const { filename } = params;
  const path = getPath(filename);

  // check if file exists
  if (!fs.existsSync(path)) {
    const message = [
      `File ${path} does not exist.`,
      'Make sure that the file you are referring to lies within the ./jsdoc directory.',
    ];
    return error(404, message.join(' '));
  }

  // parse data
  const content = fs.readFileSync(path, 'utf8');
  const data = JSON.parse(content);

  return {
    status: 200,
    body: data,
  };
};
