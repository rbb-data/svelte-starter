import path from 'path';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import dsv from '@rollup/plugin-dsv';

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
    package: {
      exports: (path) => ['index.js'].includes(path),
    },
    prerender: { default: true },
    vite: {
      plugins: [dsv()],

      resolve: {
        alias: {
          $data: path.resolve('./src/data'),
        },
      },
    },
  },

  preprocess: [
    preprocess({
      scss: true,
      postcss: true,
    }),
  ],
};

export default config;
