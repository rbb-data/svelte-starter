import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

import dotenv from 'dotenv';

dotenv.config();

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({ pages: process.env.BUILD_DIR }),
    paths: {
      base: dev ? '' : process.env.BASE_PATH,
    },
    package: {
      exports: (path) => ['index.ts', 'actions/index.ts'].includes(path),
    },
  },
};

export default config;
