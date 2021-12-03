import loadGoogleDoc from '$lib/helpers/loadGoogleDoc';
import archieml from 'archieml';

import error from '../_error';

// GET /load/google-doc/[docId]
/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async ({ params, query }) => {
  const { docId } = params;
  const preserveStyles = query.has('preserve-styles');

  try {
    const doc = await loadGoogleDoc(docId, preserveStyles);
    if (doc) {
      return {
        status: 200,
        body: /** @type {any} */ (archieml.load(doc)),
      };
    } else return error(401, 'Google credentials not found');
  } catch (e) {
    return error(e.code, e.errors[0].message);
  }
};
