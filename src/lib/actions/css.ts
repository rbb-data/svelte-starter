import type { ActionReturn } from '$lib/types';

/**
 * Dynamically set CSS `variables` on `node`.
 *
 * @param node - the node to set the CSS variable on
 * @param variables - the variables to set
 *
 * @see [Docs](https://github.com/rbb-data/svelte-starter/wiki/Docs#usecss)
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
