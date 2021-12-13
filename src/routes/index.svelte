<script context="module">
  // this function runs on the server and on the client
  // see: https://kit.svelte.dev/docs#loading
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ fetch }) => {
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

    // don't throw an error if the credentials are missing
    if (!configRes.ok && configRes.status === 401) {
      return {
        props: {
          data: await dataRes.json(),
          config: {},
        },
      };
    }

    // throw an error if one of the resources could not be loaded
    return {
      status: dataRes.ok ? configRes.status : dataRes.status,
      error: new Error(
        (await (dataRes.ok ? configRes : dataRes).json()).error.message
      ),
    };
  };
</script>

<script>
  import Demo from '$lib/components/demo/Demo.svelte';

  import '../style/index.css';

  // these props are loaded on the server
  /** @type {{ x: number; y: number }[]} */
  export let data;
  /** @type {{ header: { title: string; subtitle: string } }} */
  export let config;

  const { header } = config;
</script>

<div class="wrapper">
  <Demo {data} {header} />
</div>

<style>
  .wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
