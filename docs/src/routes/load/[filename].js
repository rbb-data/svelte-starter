import fs from 'fs';

// construct an error response
/**
 * @type {(
 *   status: number,
 *   message: string
 * ) => {
 *   status: number;
 *   body: { error: { status: number; message: string } };
 * }}
 */
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
/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async ({ params }) => {
  const { filename } = params;
  const path = decodeURIComponent(filename);

  // check if file exists
  if (!fs.existsSync(path)) {
    const message = [`File ${path} does not exist.`];
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
