<script lang="ts">
  import { translate } from '$lib/utils';

  // dimension of the chart
  export let width = 0;
  export let height = 0;

  // dimension of the chart's canvas (respecting margins)
  export let boundedWidth = 0;
  export let boundedHeight = 0;

  export let margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  export let origin: 'topLeft' | 'center' = 'topLeft';

  // if true, show outline of the chart
  export let debug = false;

  // bounded dimensions respect the given margins
  $: boundedWidth = width - margin.left - margin.right;
  $: boundedHeight = height - margin.top - margin.bottom;

  $: viewBox = {
    topLeft: [0, 0, width, height],
    center: [-width / 2, -height / 2, width, height],
  }[origin];

  $: translateXY = {
    topLeft: [0, 0],
    center: [-width / 2, -height / 2],
  }[origin];
</script>

<svg {width} {height} viewBox={viewBox.join(' ')}>
  {#if debug}
    <rect
      {width}
      {height}
      transform={translate(translateXY)}
      fill="none"
      stroke="black"
    />
  {/if}
  <g transform={translate([margin.left, margin.top])}>
    {#if debug}
      <rect
        width={boundedWidth}
        height={boundedHeight}
        transform={translate(translateXY)}
        fill="aliceblue"
      />
    {/if}
    <slot />
  </g>
</svg>
