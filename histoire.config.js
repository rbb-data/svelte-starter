import { defineConfig, defaultColors } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
  plugins: [HstSvelte()],

  // path to setup file to load global css or js
  setupFile: '/src/histoire.setup.js',

  // organizes stories into groups
  tree: {
    groups: [
      {
        id: 'top',
        title: '',
      },
      {
        id: 'ui',
        title: 'User Interface',
      },
      {
        id: 'viz',
        title: 'Visualization',
      },
      {
        id: 'layercake',
        title: 'LayerCake',
      },
    ],
  },

  // background colors to select from the toolbar
  backgroundPresets: [
    {
      label: 'White',
      color: '#fff',
      contrastColor: '#333',
    },
    {
      label: 'Transparent',
      color: 'transparent',
      contrastColor: '#333',
    },
  ],

  // rbb|24 theme
  theme: {
    title: 'rbb|24',
    logo: {
      square: './static/rbb24-square.png',
      light: './static/rbb24.png',
      dark: './static/rbb24.png',
    },
    logoHref: 'https://github.com/rbb-data/svelte-starter',
    colors: {
      primary: defaultColors.gray,
    },
  },
});
