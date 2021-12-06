<script context="module">
  export const load = async ({ fetch }) => {
    const filename = 'Svg.json';
    const res = await fetch(`/load/${filename}`);
    const jsdoc = await res.json();

    // if successful, pass props to the component
    if (res.ok)
      return {
        props: {
          jsdoc,
        },
      };

    // throw an error otherwise
    return {
      status: res.status,
      error: new Error(jsdoc.error.message),
    };
  };
</script>

<script>
  export let jsdoc;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

{jsdoc.name}
