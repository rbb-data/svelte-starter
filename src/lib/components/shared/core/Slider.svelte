<script lang="ts">
  import type { Component } from '$lib/types';
  import { writable } from 'svelte/store';
  import { spring } from 'svelte/motion';

  import css from '$lib/actions/css';
  import pannable, { drag } from '$lib/actions/pannable';
  import { px } from '$lib/helpers/utils';

  // list of slides
  export let slides: Array<Component>;

  // function that determines the previous slide
  export let prev: (index: number) => number | null;

  // function that determines the next slide
  export let next: (index: number) => number | null;

  // intial slide index
  export let initialActiveIndex = 0;

  // index of the currently visible slide
  export let activeIndex = initialActiveIndex;

  $: currSlide = slides[activeIndex];

  $: prevSlide = prev(activeIndex) !== null ? slides[prev(activeIndex)] : null;
  $: nextSlide = next(activeIndex) !== null ? slides[next(activeIndex)] : null;

  $: prevNext = [prevSlide, nextSlide]
    .map((slide, i) => ({ slide, key: i === 0 ? 'prev' : 'next' }))
    .filter(({ slide }) => slide);

  // dimensions of the slider
  let width = 0;
  let height = 0;

  let animate = true;

  // x coordinate on touchstart
  let startX: number;

  // thresholds that filter out small movements
  $: minX = 0.33 * width;
  $: maxX = 0.66 * width;
  const minDiff = 20;

  // TODO: this should only be x
  let xy = writable({ x: 0, y: 0 });
  const animatedXY = spring({ x: 0, y: 0 });

  // animatedXY mirrors xy
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
      if (navigateBackward) activeIndex = prev(activeIndex);
      else activeIndex = next(activeIndex);
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
      animate = true;
      xy.set({ x: 0, y: 0 });
      setTimeout(() => {
        animate = false;
      }, 500);
      return;
    }

    navigateAndReset(navigateBackward);
  }
</script>

<div
  class="slider"
  aria-roledescription="carousel"
  bind:clientWidth={width}
  use:css={{ height: px(height) }}
  on:keydown={handleKeyDown}
  on:click={handleClick}
  use:pannable={{ ignorePointers: ['mouse'] }}
  on:panstart={handlePanStart}
  on:panmove={drag(xy)}
  on:panend={handlePanEnd}
>
  <div
    class="content"
    use:css={{
      'translate-x': px(animate ? $animatedXY.x : $xy.x),
    }}
  >
    <!-- visible content -->
    <div
      class="inner"
      tabindex="0"
      role="group"
      aria-roledescription="slide"
      bind:clientHeight={height}
    >
      <svelte:component this={currSlide.component} {...currSlide.props} />
    </div>
    <!-- previous and next slides -->
    {#each prevNext as { slide, key }}
      {#if slide}
        <div class={`inner ${key}`} role="group" aria-roledescription="slide">
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
