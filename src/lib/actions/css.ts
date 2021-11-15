/**
 * This action dynamically sets CSS variables. For example:
 *
 * <div use:css={{ 'my-dynamically-set-color': 'steelblue' }}>...</div>
 *
 * sets the CSS variable `--my-dynamically-set-color` to `'steelblue'`
 * on that element. The variable can then be referenced in the style
 * tag like any other CSS variable:
 *
 * div {
 *   background-color: var(--my-dynamically-set-color);
 * }
 */

import type { ActionReturn } from '$lib/types';

/**
 * Dynamically set CSS `variables` on `node`.
 *
 * @param node - the node to set the CSS variable on
 * @param variables - the variables to set
 */
export default function css(
  node: HTMLElement | SVGElement,
  variables: Record<string, string | number>
): ActionReturn<Record<string, string | number>> {
  function setCssVariables() {
    if (variables) {
      for (const name of Object.keys(variables)) {
        node.style.setProperty(`--${name}`, variables[name] as string);
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
