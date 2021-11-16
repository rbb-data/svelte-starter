<script lang="ts">
  import { spring } from 'svelte/motion';

  import css from '$lib/actions/css';

  export let onForwardNavigation: () => void;
  export let onBackwardNavigation: () => void;

  let width = 0;
  let height = 0;
  let animate = true;

  $: minX = 0.33 * width;
  $: maxX = 0.66 * width;

  // TODO: this should only be x
  let xy = { x: 0, y: 0 };
  const animatedXY = spring(xy);

  $: animatedXY.set(xy);

  function handleClick(event: MouseEvent) {
    const { clientX: x } = event;

    if (x >= minX && x <= maxX) return;

    const navigateBackward = x < minX;

    if (navigateBackward && !$$slots.prev) return;
    if (!navigateBackward && !$$slots.next) return;

    animate = true;
    xy = navigateBackward ? { x: 100, y: 0 } : { x: -100, y: 0 };

    setTimeout(() => {
      animate = false;
      xy = { x: 0, y: 0 };
      if (navigateBackward) onBackwardNavigation();
      else onForwardNavigation();
    }, 500);
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
      'translate-x': `${animate ? $animatedXY.x : xy.x}%`,
    }}
  >
    <div class="inner prev">
      <slot name="prev" />
    </div>
    <div class="inner" bind:clientHeight={height} on:click={handleClick}>
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
