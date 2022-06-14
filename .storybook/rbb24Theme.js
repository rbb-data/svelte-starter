import { create } from '@storybook/theming';
import logo from './rbb24Logo.png';

export default create({
  base: 'light',

  colorPrimary: '#e31818',
  colorSecondary: '#585856',

  appBg: '#EAEAEA',
  barSelectedColor: '#e31818',

  fontBase: 'Interstate, sans-serif',

  brandTitle: 'rbb-data',
  brandUrl: 'https://github.com/rbb-data',
  brandImage: logo, //'https://www.rbb24.de/content/dam/rbb/rbb/logos/rbb24.svg.svg/img.svg',
});
