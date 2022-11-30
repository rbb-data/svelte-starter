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
    alias: {
      $data: 'src/data',
      $icons: 'src/lib/components/icons',
    },
  },

  preprocess: [
    preprocess({
      scss: {
        prependData:
          '@use "src/style/mixins/_breakpoint.scss" as *; @use "src/style/mixins/_focus.scss" as *; @use "src/style/mixins/_visually-hidden.scss" as *;',
      },
      postcss: true,
    }),
  ],
};

export default config;
