/**
 * This action creates and destroys a (tooltip) component on
 * interaction with an element.
 *
 * ```svelte
 * <script>
 *   import Tooltip from '...';
 * </script>
 *
 * <circle
 *   use:tooltip={{
 *     id: 'tooltip',
 *     Component: Tooltip,
 *     options: { props: { message: 'Hello world' } },
 *   }}
 *   r="10"
 * />
 * ```
 *
 * This renders the `Tooltip` component with the given `options.props` on hover or touch.
 *
 * The initialization `options` are passed to `Component` on creation;
 * see [Svelte's docs](https://svelte.dev/docs#Creating_a_component) for more information.
 *
 * **Note:** `Component` must render an element with an id that matches `id`.
 */

import type { SvelteComponent } from 'svelte';
import type { ActionReturn } from '$lib/types';

interface Options<Props> {
  target: Element | ShadowRoot;
  anchor?: Element;
  props?: Props;
  context?: Map<any, any>;
  hydrate?: boolean;
  intro?: boolean;
}

interface Tooltip<Props extends Record<string, any>> {
  Component: typeof SvelteComponent;
  id: string;
  options?: Partial<Options<Props>>;
}

/**
 *  Render (tooltip) component on interaction with `node`
 *
 * @param node - the element that triggers rendering of a component
 * @param tooltip.id - id of the component to render
 * @param tooltip.Component - component to render
 * @param tooltip.options - options passed to `Component` on creation
 */
export default function tooltipable<Props>(
  node: HTMLElement | SVGElement,
  tooltip: Tooltip<Props>
): ActionReturn<Props> {
  const { id, Component } = tooltip;

  // attach to body by default
  const options = tooltip.options || {};
  options.target = options.target || document.body;

  let component: SvelteComponent;

  function handleMouseEnter() {
    component = new Component(options as Options<Props>);
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
    if (show) component = new Component(options as Options<Props>);
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