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
      error: new Error((await (dataRes.ok ? configRes : dataRes).json()).error),
    };
  };
</script>

<script lang="ts">
  import Svg from '$lib/components/shared/Svg.svelte';
  import CenteredSvg from '$lib/components/shared/CenteredSvg.svelte';

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
</script>

<div>
  <dl>
    <dt>title:</dt>
    <dd>{config.header.title}</dd>

    <dt>subtitle:</dt>
    <dd>{config.header.subtitle}</dd>

    <dt>data:</dt>
    <dd>
      {#each data as { x, y }}
        {x} - {y}<br />
      {/each}
    </dd>
  </dl>

  <div class="wrapper" bind:clientWidth={width}>
    <Svg {width} {height} {margin} bind:boundedWidth bind:boundedHeight debug>
      <circle cx={boundedWidth / 2} cy={boundedHeight / 2} r="5" fill="black" />
    </Svg>
  </div>

  <div class="wrapper" bind:clientWidth={width}>
    <CenteredSvg {width} {height} debug>
      <circle r="5" fill="black" />
    </CenteredSvg>
  </div>
</div>
