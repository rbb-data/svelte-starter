import rbb24Theme from './rbb24Theme';
import FontDecorator from './FontDecorator.svelte';

export const parameters = {
  viewMode: 'docs',
  docs: {
    theme: rbb24Theme,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [() => FontDecorator];
