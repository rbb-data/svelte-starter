import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svelte.md'],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: mdsvex({ extensions: ['.svelte.md'] }),

  kit: {
    adapter: adapter({ pages: process.env.BUILD_DIR }),
  },
};

export default config;
