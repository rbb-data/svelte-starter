import loadGoogleDoc from '$lib/loadGoogleDoc';
import archieml from 'archieml';

import type { RequestHandler } from '@sveltejs/kit';

// GET /load-google-doc.json
export const get: RequestHandler = async ({ query }) => {
	const docId = query.get('docId');

	const doc = await loadGoogleDoc(docId);
	const config = archieml.load(doc);

	return {
		status: 200,
		body: config
	};
};
