<script lang="ts">
  import { writable } from 'svelte/store';
  import { spring } from 'svelte/motion';

  import css from '$lib/actions/css';
  import pannable, { drag } from '$lib/actions/pannable';

  export let onForwardNavigation: () => void;
  export let onBackwardNavigation: () => void;

  let width = 0;
  let height = 0;

  let animate = true;
  let startX: number;

  $: minX = 0.33 * width;
  $: maxX = 0.66 * width;
  const minDiff = 20;

  // TODO: this should only be x
  let xy = writable({ x: 0, y: 0 });
  const animatedXY = spring({ x: 0, y: 0 });

  $: animatedXY.set($xy);

  function navigateAndReset(navigateBackward: boolean) {
    // transition to the next (or previous) slide
    animate = true;
    xy.set(navigateBackward ? { x: width, y: 0 } : { x: -width, y: 0 });

    // reset after the transition is complete
    setTimeout(() => {
      animate = false;
      xy.set({ x: 0, y: 0 });
      if (navigateBackward) onBackwardNavigation();
      else onForwardNavigation();
    }, 500);
  }

  function handleClick(e: MouseEvent) {
    const { clientX: x } = e;

    if (x >= minX && x <= maxX) return;

    const navigateBackward = x < minX;

    if (navigateBackward && !$$slots.prev) return;
    if (!navigateBackward && !$$slots.next) return;

    navigateAndReset(navigateBackward);
  }

  function handlePanEnd(e: CustomEvent<{ x: number; y: number }>) {
    const endX = e.detail.x;
    const diff = endX - startX;
    const navigateBackward = diff > 0;

    if (
      Math.abs(diff) < minDiff ||
      (navigateBackward && !$$slots.prev) ||
      (!navigateBackward && !$$slots.next)
    ) {
      xy.set({ x: 0, y: 0 });
      return;
    }

    navigateAndReset(navigateBackward);
  }
</script>

<div
  class="slider"
  bind:clientWidth={width}
  use:css={{ height: `${height}px` }}
>
  <div
    class="content"
    use:css={{
      'translate-x': `${animate ? $animatedXY.x : $xy.x}px`,
    }}
  >
    <div class="inner prev">
      <slot name="prev" />
    </div>
    <div
      class="inner"
      bind:clientHeight={height}
      on:click={handleClick}
      use:pannable
      on:panstart={(e) => (startX = e.detail.x)}
      on:panmove={drag(xy)}
      on:panend={handlePanEnd}
    >
      <slot name="curr" />
    </div>
    <div class="inner next">
      <slot name="next" />
    </div>
  </div>
</div>

<style>
  .slider {
    width: 100%;
    height: var(--height);
    overflow-x: hidden;
  }

  .content {
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateX(var(--translate-x));
  }

  .inner {
    position: absolute;
    width: 100%;
    top: 0;
  }

  .prev {
    transform: translate(-100%, 0);
  }

  .next {
    transform: translate(100%, 0);
  }
</style>
