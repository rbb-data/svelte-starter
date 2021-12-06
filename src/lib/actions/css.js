/**
 * Dynamically set CSS `variables` on `node`.
 *
 * @template {Record<string, string | number>} T
 * @param {HTMLElement | SVGElement} node - the node to set the CSS variable on
 * @param {T} variables - the variables to set
 */
function css(node, variables) {
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
    /** @type {(newVars: T) => void} */
    update(newVariables) {
      variables = newVariables;
      setCssVariables();
    },
  };
}

export default css;
