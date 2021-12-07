<script context="module">
  import { loop_guard } from 'svelte/internal';

  export const load = async ({ fetch }) => {
    const res = await fetch(`/load/nav.json`);
    const navSections = await res.json();

    // if successful, pass props to the component
    if (res.ok)
      return {
        props: {
          navSections,
        },
      };

    // throw an error otherwise
    return {
      status: res.status,
      error: new Error(navSections.error.message),
    };
  };
</script>

<script>
  import '../style/index.css';

  import NavSection from '$lib/NavSection.svelte';

  const components = ['LocalMap'];
  const headlessComponents = ['Search', 'Slider', 'Svg', 'Tabs'];
  const actions = ['css', 'focus', 'fuzzysearch', 'pannable', 'tooltip'];
  const stores = ['prefersReducedMotion'];

  function format(type) {
    switch (type) {
      case 'component':
        return (item) => item;
      case 'action':
        return (item) => `use:${item}`;
      case 'store':
        return (item) => `$${item}`;
    }
  }

  export let navSections;

  console.log(navSections);
</script>

<div class="wrapper">
  <nav>
    {#each navSections as navSection}
      <NavSection {...navSection} format={format(navSection.type)} />
    {/each}
  </nav>
  <main>
    <slot />
  </main>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: minmax(150px, 20%) 1fr;
  }
</style>
