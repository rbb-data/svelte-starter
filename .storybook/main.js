const path = require('path');

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
    preprocess: import('../svelte.config.js').preprocess,
  },
  features: {
    // unfortunately, storyStoreV7 doesn't work with stories authored as *.svelte files
    storyStoreV7: false,
  },
  async viteFinal(config) {
    config.resolve.alias = {
      $app: path.resolve('./.svelte-kit/dev/runtime/app'),
      $lib: path.resolve('./src/lib'),
      $data: path.resolve('./src/data'),
      $shared: path.resolve('./src/lib/components/shared'),
    };
    config.base = '/svelte-starter/';
    return config;
  },
};
