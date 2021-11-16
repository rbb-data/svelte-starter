<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { writable } from 'svelte/store';
  import { spring } from 'svelte/motion';

  import css from '$lib/actions/css';
  import pannable, { drag } from '$lib/actions/pannable';

  export let onForwardNavigation: () => void;
  export let onBackwardNavigation: () => void;

  export let slides: Array<{
    component: typeof SvelteComponent;
    props: Record<string, any>;
  }>;

  $: [prevSlide, currSlide, nextSlide] = slides;
  $: prevNext = [prevSlide, nextSlide]
    .map((slide, i) => ({ slide, key: i === 0 ? 'prev' : 'next' }))
    .filter(({ slide }) => slide);

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

  function canNavigate(navigateBackward: boolean) {
    return (navigateBackward && prevSlide) || (!navigateBackward && nextSlide);
  }

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
    if (!canNavigate(navigateBackward)) return;
    navigateAndReset(navigateBackward);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const navigateBackward = e.key === 'ArrowLeft';
    if (!canNavigate(navigateBackward)) return;
    navigateAndReset(navigateBackward);
  }

  function handlePanStart(e: CustomEvent<{ x: number; y: number }>) {
    startX = e.detail.x;
  }

  function handlePanEnd(e: CustomEvent<{ x: number; y: number }>) {
    const endX = e.detail.x;
    const diff = endX - startX;
    const navigateBackward = diff > 0;

    if (Math.abs(diff) < minDiff || !canNavigate(navigateBackward)) {
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
  on:keydown={handleKeyDown}
  on:click={handleClick}
  use:pannable
  on:panstart={handlePanStart}
  on:panmove={drag(xy)}
  on:panend={handlePanEnd}
>
  <div
    class="content"
    use:css={{
      'translate-x': `${animate ? $animatedXY.x : $xy.x}px`,
    }}
  >
    <!-- visible content -->
    <div class="inner" bind:clientHeight={height}>
      <svelte:component this={currSlide.component} {...currSlide.props} />
    </div>
    <!-- previous and next slides -->
    {#each prevNext as { slide, key }}
      {#if slide}
        <div class={`inner ${key}`}>
          <svelte:component this={slide.component} {...slide.props} />
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .slider {
    width: 100%;
    height: var(--height);
    overflow-x: hidden;
    touch-action: none;
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
