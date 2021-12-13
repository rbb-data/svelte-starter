<script>
  /**
   * `Slider` renders a single component at a time and provides the necessary functionality
   * to navigate back and forth through swipe gestures (on touch devices) or mouse clicks
   * (on desktop).
   *
   * `Slider` keeps track of the active slide internally. Binding to this prop (`activeIndex`)
   * is a common pattern.
   *
   * `prev` and `next` determine the index of the previous and next slide;
   * returning `null` means there is no slide to go to.
   *
   * @component
   */

  import { writable } from 'svelte/store';
  import { spring } from 'svelte/motion';

  import css from '$lib/actions/css';
  import pannable, { drag } from '$lib/actions/pannable';
  import { px } from '$lib/helpers/utils';

  /**
   * list of slides
   * @type {Array<{ component: typeof import('svelte').SvelteComponent, props: Record<string, unknown> }>}
   */
  export let slides;

  /**
   * function that determines the previous slide
   * @type {(index: number) => number | null}
   */
  export let prev;

  /**
   * function that determines the next slide
   * @type {(index: number) => number | null}
   */
  export let next;

  /** intial slide index */
  export let initialActiveIndex = 0;

  /**
   * index of the currently visible slide
   * @exposed
   */
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

  /**
   * x coordinate on touchstart
   * @type {number}
   */
  let startX;

  // thresholds that filter out small movements
  $: minX = 0.33 * width;
  $: maxX = 0.66 * width;
  const minDiff = 20;

  // tracks movement
  let x = writable(0);
  const animatedX = spring(0);

  // animatedX mirrors x
  $: animatedX.set($x);

  /**
   * @param {boolean} navigateBackward
   */
  function canNavigate(navigateBackward) {
    return (navigateBackward && prevSlide) || (!navigateBackward && nextSlide);
  }

  /**
   * @param {boolean} navigateBackward
   */
  function navigateAndReset(navigateBackward) {
    // transition to the next (or previous) slide
    animate = true;
    x.set(navigateBackward ? width : -width);

    // reset after the transition is complete
    setTimeout(() => {
      animate = false;
      x.set(0);
      activeIndex = navigateBackward ? prev(activeIndex) : next(activeIndex);
    }, 500);
  }

  /**
   * @param {MouseEvent} e
   */
  function handleClick(e) {
    const { clientX } = e;

    if (clientX >= minX && clientX <= maxX) return;

    const navigateBackward = clientX < minX;
    if (!canNavigate(navigateBackward)) return;
    navigateAndReset(navigateBackward);
  }

  /**
   * @param {KeyboardEvent} e
   */
  function handleKeyDown(e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const navigateBackward = e.key === 'ArrowLeft';
    if (!canNavigate(navigateBackward)) return;
    navigateAndReset(navigateBackward);
  }

  /**
   * @param {CustomEvent<{ x: number; y: number }>} e
   */
  function handlePanStart(e) {
    startX = e.detail.x;
  }

  /**
   * @param {CustomEvent<{ x: number; y: number }>} e
   */
  function handlePanEnd(e) {
    const endX = e.detail.x;
    const diff = endX - startX;
    const navigateBackward = diff > 0;

    if (Math.abs(diff) < minDiff || !canNavigate(navigateBackward)) {
      animate = true;
      x.set(0);
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
  on:panmove={drag(x)}
  on:panend={handlePanEnd}
>
  <div
    class="content"
    use:css={{
      'translate-x': px(animate ? $animatedX : $x),
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
