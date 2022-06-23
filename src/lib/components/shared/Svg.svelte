<script>
  /**
   * SVG container that implements a common pattern for sizing charts, see
   * [Amelia Wattenberger's blog
   * post](https://wattenberger.com/blog/react-and-d3#sizing-responsivity).
   *
   * @component
   */

  import { translate } from '$lib/utils';

  /**
   * width of the svg
   *
   * @type {number}
   */
  export let width;

  /**
   * height of the svg
   *
   * @type {number}
   */
  export let height;

  /** size of the margins on each side of the svg */
  export let margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  /**
   * width of the canvas (the svg's width minus margins)
   *
   * @exposed
   */
  export let boundedWidth = 0;

  /**
   * height of the canvas (the svg's height minus margins)
   *
   * @exposed
   */
  export let boundedHeight = 0;

  /** if true, show the svg's outline and highlight canvas */
  export let debug = false;

  // bounded dimensions respect the given margins
  $: boundedWidth = width - margin.left - margin.right;
  $: boundedHeight = height - margin.top - margin.bottom;
</script>

{#if width}
  <svg
    {width}
    {height}
    viewBox={[0, 0, width, height].join(' ')}
    class:debug
    {...$$restProps}
  >
    <slot name="header" />
    <g transform={translate([margin.left, margin.top])}>
      {#if debug}
        <rect width={boundedWidth} height={boundedHeight} fill="aliceblue" />
      {/if}
      <slot />
    </g>
  </svg>
{/if}

<style lang="scss">
  svg {
    overflow: visible;

    &.debug {
      outline: black dashed 1px;
    }
  }
</style>
