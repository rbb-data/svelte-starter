<script lang="ts">
  import { translate } from '$lib/helpers/utils';

  // dimension of the chart
  export let width: number;
  export let height: number;

  // dimension of the chart's canvas (respecting margins)
  export let boundedWidth = 0;
  export let boundedHeight = 0;

  export let margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  // if true, show outline of the chart
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
