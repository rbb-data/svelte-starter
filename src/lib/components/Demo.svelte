<script lang="ts">
  import { scaleLinear } from 'd3-scale';
  import { extent } from 'd3-array';

  import Svg from '$lib/components/shared/Svg.svelte';

  export let data: Array<{
    x: number;
    y: number;
  }>;
  export let header: { title: string; subtitle: string };

  // dimension of the chart
  let width = 0; // width is bound to the width of the wrapper element
  let height = 200; // height is fixed

  // dimension of the chart's canvas (respecting margins)
  let boundedWidth = 0;
  let boundedHeight = 0;

  // the chart's margins
  let margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  };

  // set up some scales with d3
  $: xScale = scaleLinear()
    .domain(extent(data, (d) => d.x))
    .range([0, boundedWidth]);
  $: yScale = scaleLinear()
    .domain(extent(data, (d) => d.y))
    .range([boundedHeight, 0]);
</script>

<h1>Demo</h1>

<dl>
  <dt>title:</dt>
  <dd>{header.title}</dd>

  <dt>subtitle:</dt>
  <dd>{header.subtitle}</dd>
</dl>

<p>Ein responsiver SVG Container:</p>

<div bind:clientWidth={width}>
  <Svg {width} {height} {margin} bind:boundedWidth bind:boundedHeight debug>
    {#each data as { x, y }}
      <circle cx={xScale(x)} cy={yScale(y)} r="5" fill="#212529" />
    {/each}
  </Svg>
</div>
