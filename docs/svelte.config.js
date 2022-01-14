import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

import dotenv from 'dotenv';

dotenv.config();

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svelte.md'],
  preprocess: mdsvex({ extensions: ['.svelte.md'] }),
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : process.env.BASE_PATH,
    },
  },
};

export default config;
