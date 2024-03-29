import dsv from '@rollup/plugin-dsv';
import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), dsv()],

  css: {
    preprocessorOptions: {
      scss: true,
    },
  },

  resolve: {
    alias: {
      $data: path.resolve('./src/data'),
      $icons: path.resolve('./src/lib/components/icons'),
    },
  },

  build: {
    target: [
      'es2020',
      'chrome68',
      'firefox67',
      'safari11',
      'edge79',
      'opera50',
      'ios11',
    ],
  },

  optimizeDeps: {
    exclude: ['fsevents'],
  },
};

export default config;
