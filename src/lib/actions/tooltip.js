/**
 * @template Props
 * @typedef {{ target: Element | ShadowRoot, anchor?: Element, props?: Props, context?: Map<any, any>, hydrate?: boolean, intro?: boolean }} Options<Props>
 */

/**
 * Renders a (tooltip) component on interaction with `node`
 *
 * @template Props
 * @param {HTMLElement | SVGElement} node - the element that triggers rendering of a component
 * @param {Object} tooltip
 * @param {string} tooltip.id - id of the component to render
 * @param {typeof import('svelte').SvelteComponent} tooltip.Component - component to render
 * @param {Partial<Options<Props>>} [tooltip.options] - options passed to `Component` on creation
 */
export default function tooltipable(node, tooltip) {
  const { id, Component } = tooltip;

  // attach to body by default
  const options = tooltip.options || {};
  options.target = options.target || document.body;

  /** @type {import('svelte').SvelteComponent} */
  let component;

  function handleMouseEnter() {
    component = new Component(/** @type Options<Props> */ (options));
    node.addEventListener('mouseleave', handleMouseLeave);
  }

  function handleMouseLeave() {
    component.$destroy();
    node.removeEventListener('mouseleave', handleMouseLeave);
  }

  function toggleComponent() {
    // check if the component is currently mounted
    const show = !options.target.querySelector(`#${id}`);

    // toggle component
    if (show) component = new Component(/** @type Options<Props> */ (options));
    else component.$destroy();
  }

  function handleTouchStart() {
    toggleComponent();
    window.addEventListener('touchstart', handleWindowTouchStart);
  }

  function handleWindowTouchStart() {
    toggleComponent();
    window.removeEventListener('touchstart', handleWindowTouchStart);
  }

  node.addEventListener('mouseenter', handleMouseEnter);
  node.addEventListener('touchstart', handleTouchStart);

  return {
    destroy() {
      node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('touchstart', handleTouchStart);
    },
  };
}
