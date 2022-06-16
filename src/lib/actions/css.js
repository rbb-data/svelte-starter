/**
 * Dynamically sets CSS variables on an element
 *
 * @param {HTMLElement | SVGElement} node - the element to set the variables on
 * @param {Record<string, string | number>} variables - the CSS variables to set
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
    /** @type {(newVars: Record<string, string | number>) => void} */
    update(newVariables) {
      variables = newVariables;
      setCssVariables();
    },
  };
}

export default css;
