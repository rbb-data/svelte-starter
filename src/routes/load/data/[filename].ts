import fs from 'fs';
import { extname } from 'path';
import { csvParse } from 'd3-dsv';

import type { RequestHandler } from '@sveltejs/kit';

const SUPPORTED_EXTENSIONS = ['.json', '.csv'];

// parse contents of a file
const parse = (path: string) => {
	const content = fs.readFileSync(path, 'utf8');
	if (path.endsWith('.json')) return JSON.parse(content);
	else if (path.endsWith('.csv')) return csvParse(content);
};

// GET /load/data/
export const get: RequestHandler = async ({ params }) => {
	const { filename } = params;
	const path = `data/${filename}`;

	// check if filename exists
	if (!filename || !fs.existsSync(path)) {
		return {
			status: 404,
			body: {
				error: filename
					? `File ${path} does not exist. Make sure that the file you are referring to lies within the ./data directory`
					: 'Query parameter "filename" not specified'
			}
		};
	}

	// check if the given file format is supported
	if (!SUPPORTED_EXTENSIONS.some((ext) => filename.endsWith(ext))) {
		return {
			status: 501,
			body: {
				error: [
					'Extension',
					extname(path),
					'is not supported. Supported extensions:',
					SUPPORTED_EXTENSIONS.join(', ')
				].join(' ')
			}
		};
	}

	const data = parse(path);

	return {
		status: 200,
		body: data
	};
};
