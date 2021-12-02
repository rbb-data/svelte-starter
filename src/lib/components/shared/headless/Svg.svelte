<script lang="ts">
  /**
   * `Svg` is a SVG container that implements a common pattern for sizing charts
   * (check out [Amelia Wattenberger's blog post](https://wattenberger.com/blog/react-and-d3#sizing-responsivity)).
   *
   * Typically, one would bind to the internally managed `boundedWidth` and `boundedHeight`.
   *
   * @component
   */

  import { translate } from '$lib/helpers/utils';

  /**
   * width of the svg
   * @required
   */
  export let width: number;

  /**
   * height of the svg
   * @required
   */
  export let height: number;

  /**
   * width of the canvas (the svg's width minus margins)
   */
  export let boundedWidth = 0;

  /**
   * height of the canvas (the svg's height minus margins)
   */
  export let boundedHeight = 0;

  /**
   * size of the margins on each side of the svg
   */
  export let margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  // if true, show the svg's outline and highlight canvas
  export let debug = false;

  // bounded dimensions respect the given margins
  $: boundedWidth = width - margin.left - margin.right;
  $: boundedHeight = height - margin.top - margin.bottom;
</script>

<svg class:debug {width} {height} viewBox={[0, 0, width, height].join(' ')}>
  <g transform={translate([margin.left, margin.top])}>
    {#if debug}
      <rect width={boundedWidth} height={boundedHeight} fill="aliceblue" />
    {/if}
    <slot />
  </g>
</svg>

<style>
  svg.debug {
    outline: black dashed 1px;
  }
</style>
