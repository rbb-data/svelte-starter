<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  // this function runs on the server and on the client
  // see: https://kit.svelte.dev/docs#loading
  export const load: Load = async ({ fetch }) => {
    // load data by fetching it from the app's own endpoint
    // the requested file must lie within the ./data directory
    const FILENAME = 'example-data.csv';
    const dataRes = await fetch(`/load/data/${FILENAME}`);

    // fetch configurations from a Google doc using the `/load/google-doc/` endpoint
    const GOOGLE_DOC_ID = '1wCovwTGxPsPM-ED-D7hCaL5sMUFBy1A8OadVUCDtQ3A';
    const configRes = await fetch(
      `/load/google-doc/${GOOGLE_DOC_ID}?preserve-styles`
    );

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
  import Demo from '$lib/components/Demo.svelte';

  import '../style/index.css';

  // these props are loaded on the server
  export let data: Array<{
    x: number;
    y: number;
  }>;
  export let config: {
    header: { title: string; subtitle: string };
  };
</script>

<div class="wrapper">
  <Demo {data} header={config.header} />
</div>

<style>
  .wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
