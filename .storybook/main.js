const path = require('path');
const preprocess = require('svelte-preprocess');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-svelte-csf',
  ],
  framework: '@storybook/svelte',
  core: {
    builder: '@storybook/builder-vite',
  },
  svelteOptions: {
    preprocess: [
      preprocess({
        scss: {
          prependData: '@use "../src/style/mixins.scss" as *;',
        },
        postcss: true,
      }),
    ],
  },
  features: {
    // unfortunately, storyStoreV7 doesn't work with stories authored as *.svelte files
    storyStoreV7: false,
  },
  async viteFinal(config) {
    config.resolve.alias = {
      $app: path.resolve('./.svelte-kit/runtime/app'),
      $lib: path.resolve('./src/lib'),
      $data: path.resolve('./src/data'),
      $shared: path.resolve('./src/lib/components/shared'),
    };
    config.css = {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "../src/style/mixins.scss" as *;',
        },
      },
    };
    config.base = '/svelte-starter/';
    return config;
  },
};
