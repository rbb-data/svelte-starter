import loadGoogleDoc from '$lib/utils/loadGoogleDoc';
import archieml from 'archieml';

import type { RequestHandler } from '@sveltejs/kit';

// GET /load/google-doc/
export const get: RequestHandler = async ({ params }) => {
  const { docId } = params;

  const doc = await loadGoogleDoc(docId);
  const config = archieml.load(doc);

  return {
    status: 200,
    body: config,
  };
};
