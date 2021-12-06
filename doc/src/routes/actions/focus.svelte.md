<script context="module">
  const FILENAME = 'focus.json';

  export const load = async ({ fetch }) => {
    const res = await fetch(`/load/${FILENAME}`);
    const meta = await res.json();

    // if successful, pass props to the component
    if (res.ok)
      return {
        props: {
          meta,
        },
      };

    // throw an error otherwise
    return {
      status: res.status,
      error: new Error(meta.error.message),
    };
  };
</script>

<script>
  import Header from '$lib/Header.svelte';
  import APITable from '$lib/APITable.svelte';

  export let meta;

  const { name, description, type, params } = meta[0];
</script>

<Header {name} {description} />

Custom text....

Type: {type}

<APITable {params} />
