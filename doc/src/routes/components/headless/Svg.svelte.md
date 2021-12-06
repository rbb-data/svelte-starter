<script context="module">
  const FILENAME = 'Svg.json';

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
  import { micromark } from 'micromark';

  import { Svg } from '@rbb-data/svelte-starter';

  export let meta;

  console.log(meta)
</script>

# Hello {meta.name}

{@html micromark(meta.description)}

```svelte
<Svg width={100} height={100} debug>
  <circle cx="50" cy="50" r="10" fill="steelblue" />
</Svg>
```

<Svg width={100} height={100} debug>
  <circle cx="50" cy="50" r="10" fill="steelblue">
</Svg>

More text...

## API

table...

{#each meta.props as prop}

<div>{prop.name} - {prop.type} - {prop.default} - {prop.description}</div>
{/each}
