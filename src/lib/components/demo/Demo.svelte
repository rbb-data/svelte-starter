<script lang="ts">
  import { scaleLinear } from 'd3-scale';
  import { extent } from 'd3-array';

  import Svg from '$lib/components/core/Svg.svelte';

  import DraggableCircle from './DraggableCircle.svelte';
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
  const margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  };
  //why does this fail, if I do not define it here???
  const radius = 10;

  // set up some scales with d3
  $: xScale = boundedWidth
    ? scaleLinear()
        .domain(extent(data, (d) => d.x))
        .range([0, boundedWidth])
    : () => null;
  $: yScale = scaleLinear()
    .domain(extent(data, (d) => d.y))
    .range([boundedHeight, 0]);
</script>

<h1>Demo</h1>

{#if header}
  <dl>
    <dt>title:</dt>
    <dd>{@html header.title}</dd>

    <dt>subtitle:</dt>
    <dd>{header.subtitle}</dd>
  </dl>
{:else}
  <i>
    You are lacking the necessary credentials to read content from the linked
    Google doc.
  </i>
{/if}

<p>Ein responsiver SVG Container:</p>
<div class="wrapper" bind:clientWidth={width}>
  {#if width}
    <Svg {width} {height} {margin} bind:boundedWidth bind:boundedHeight debug>
      {#each data as { x, y }}
        {#if xScale(x) !== null}
          <DraggableCircle
            cx={xScale(x)}
            cy={yScale(y)}
            bounds={{
              top: radius,
              right: boundedWidth - radius,
              bottom: boundedHeight - radius,
              left: radius,
            }}
            {radius}
          />
        {/if}
      {/each}
    </Svg>
  {/if}
</div>

<style>
  .wrapper :global(svg) {
    overflow: visible;
    /* this is not optimal as it prevents scrolling on the svg */
    touch-action: none;
  }
</style>
