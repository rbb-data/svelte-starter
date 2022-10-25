import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import dotenv from 'dotenv';

dotenv.config();

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({ pages: process.env.BUILD_DIR }),
    paths: {
      base: dev ? '' : process.env.BASE_PATH,
    },
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/style/mixins.scss" as *;',
      },
      postcss: true,
    }),
  ],
};

export default config;
