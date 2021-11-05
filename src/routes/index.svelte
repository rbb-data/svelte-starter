<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  // this function runs before the component is created
  // see: https://kit.svelte.dev/docs#loading
  export const load: Load = async ({ fetch }) => {
    // fetch data from the server using the `/load/data/` endpoint
    // the requested file must lie within the ./data directory
    const filename = 'example-data.csv';
    const dataRes = await fetch(`/load/data/${filename}`);

    // fetch configurations from a Google doc using the `/load/google-doc/` endpoint
    const GOOGLE_DOC_ID = '1wCovwTGxPsPM-ED-D7hCaL5sMUFBy1A8OadVUCDtQ3A';
    const configRes = await fetch(`/load/google-doc/${GOOGLE_DOC_ID}`);

    // if successful, pass props to the component
    if (configRes.ok && dataRes.ok)
      return {
        props: {
          data: await dataRes.json(),
          config: await configRes.json(),
        },
      };

    // throw an error if one of the resources could not be loaded
    return {
      status: dataRes.ok ? configRes.status : dataRes.status,
      error: new Error(
        (await (dataRes.ok ? configRes : dataRes).json()).error.message
      ),
    };
  };
</script>

<script lang="ts">
  import { scaleLinear } from 'd3-scale';
  import { extent } from 'd3-array';

  import Svg from '$lib/components/shared/Svg.svelte';

  import '../style/index.css';

  export let data: Array<{
    x: number;
    y: number;
  }>;
  export let config: {
    header: { title: string; subtitle: string };
  };

  // dimension of the chart
  let width = 0; // width is bound to the width of the wrapper element
  let height = 200; // height is fixed

  // dimension of the chart's canvas (respecting margins)
  let boundedWidth = 0;
  let boundedHeight = 0;

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

<div class="wrapper">
  <dl>
    <dt>title:</dt>
    <dd>{config.header.title}</dd>

    <dt>subtitle:</dt>
    <dd>{config.header.subtitle}</dd>
  </dl>

  <div bind:clientWidth={width}>
    <Svg {width} {height} {margin} bind:boundedWidth bind:boundedHeight debug>
      {#each data as { x, y }}
        <circle cx={xScale(x)} cy={yScale(y)} r="5" fill="#212529" />
      {/each}
    </Svg>
  </div>
</div>

<style>
  .wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
