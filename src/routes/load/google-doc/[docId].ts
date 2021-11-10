import loadGoogleDoc from '$lib/helpers/loadGoogleDoc';
import archieml from 'archieml';

import error from '../_error';

import type { RequestHandler } from '@sveltejs/kit';

// GET /load/google-doc/[docId]
export const get: RequestHandler = async ({ params, query }) => {
  const { docId } = params;
  const preserveStyles = query.has('preserve-styles');

  let config = {};
  try {
    const doc = await loadGoogleDoc(docId, preserveStyles);
    if (doc) config = archieml.load(doc);
    else return error(401, 'Google credentials not found');
  } catch (e) {
    return error(e.code, e.errors[0].message);
  }

  return {
    status: 200,
    body: config,
  };
};
