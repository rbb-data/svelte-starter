/**
 * Dynamically set CSS `variables` on `node`.
 *
 * @param {HTMLElement | SVGElement} node - the node to set the CSS variable on
 * @param {Record<string, string | number>} variables - the variables to set
 * @return {import('$lib/types').ActionReturn<Record<string, string | number>>}
 */
export default function css(node, variables) {
  function setCssVariables() {
    if (variables) {
      for (const name of Object.keys(variables)) {
        node.style.setProperty(
          `--${name}`,
          /** @type {string} */ (variables[name])
        );
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
