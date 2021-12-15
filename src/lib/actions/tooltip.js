/**
 * @template Props
 * @typedef {{
 *   target: Element | ShadowRoot;
 *   anchor?: Element;
 *   props?: Props;
 *   context?: Map<any, any>;
 *   hydrate?: boolean;
 *   intro?: boolean;
 * }} Options<Props>
 */

/**
 * Renders a (tooltip) component on interaction with an element
 *
 * @template Props
 * @param {HTMLElement | SVGElement} node - the element that triggers rendering
 *   of a component
 * @param {{
 *   id: string;
 *   Component: typeof import('svelte').SvelteComponent;
 *   options: Partial<Options<Props>>;
 * }} tooltipComp
 *   - the component to render on demand where `id` is a unique id of the rendered
 *       markup, `Component` is the component class to render, and `options` are
 *       passed to `Component` on creation
 */
export default function tooltip(node, tooltipComp) {
  const { id, Component } = tooltipComp;

  // attach to body by default
  const options = tooltipComp.options || {};
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
