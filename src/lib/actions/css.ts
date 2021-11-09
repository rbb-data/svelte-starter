/**
 * This action dynamically sets CSS variables.
 *
 * For example,
 * <div use:css={{ color: 'steelblue' }}>...</div>
 * sets --color to 'steelblue' on that div.
 */

import type { ActionReturn } from './types';

export default function css(
  node: HTMLElement | SVGElement,
  variables: Record<string, string>
): ActionReturn<Record<string, string>> {
  function setCssVariables() {
    if (variables) {
      for (const name of Object.keys(variables)) {
        node.style.setProperty(`--${name}`, variables[name]);
      }
    }
  }

  setCssVariables();

  return {
    update(newVariables) {
      variables = newVariables;
      setCssVariables();
    },
  };
}
