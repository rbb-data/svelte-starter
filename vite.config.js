import dsv from '@rollup/plugin-dsv';
import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), dsv()],

  resolve: {
    alias: {
      $data: path.resolve('./src/data'),
      $comps: path.resolve('./src/lib/components'),
      $actions: path.resolve('./src/lib/actions'),
      $stores: path.resolve('./src/lib/stores'),
      $icons: path.resolve('./src/lib/components/icons'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/style/mixins.scss" as *;',
      },
    },
  },

  build: {
    target: ['chrome68', 'firefox67', 'safari11', 'edge79', 'opera50', 'ios11'],
  },
};

export default config;
