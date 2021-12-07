<script context="module">
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

  export let navSections;

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
</script>

<div class="wrapper">
  <div class="sidebar">
    <div class="logo">
      <img src="/rbb24Logo.png" alt="rbb|24 logo" />
    </div>
    <nav>
      {#each navSections as navSection}
        <NavSection {...navSection} format={format(navSection.type)} />
      {/each}
    </nav>
  </div>
  <main>
    <slot />
  </main>
</div>

<style>
  .wrapper {
    --padding: 1rem;

    display: grid;
    grid-template-columns: minmax(150px, 20%) 1fr;
    height: 100%;
  }

  .sidebar {
    height: 100%;
    padding: var(--padding);
    border-right: 2px solid currentColor;
  }

  main {
    padding: var(--padding) calc(2 * var(--padding));
  }

  .logo {
    height: calc(1.5 * var(--h1));
    display: flex;
    align-items: center;
  }

  .logo img {
    height: 80%;
  }

  nav {
    margin-top: 1rem;
  }
</style>
