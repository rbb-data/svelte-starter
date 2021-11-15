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

export default function tooltipable<Props>(
  node: HTMLElement | SVGElement,
  tooltip: Tooltip<Props>
): ActionReturn<Props> {
  const { id, Component } = tooltip;

  // attach to body by default
  let { options } = tooltip;
  if (!options) options = {};
  if (!options.target) options.target = document.body;

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
