<script context="module">
  export const load = async ({ fetch }) => {
    const filename = 'data/nav.json';
    const res = await fetch(`/load/${encodeURIComponent(filename)}`);
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

  import NavSection from '$lib/core/components/NavSection.svelte';

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
    <a href="/" class="logo">
      <img src="/rbb24Logo.png" alt="rbb|24 logo" />
    </a>
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
    --sidebar-width: 280px;
  }

  .sidebar {
    height: 100%;
    width: var(--sidebar-width);
    padding: var(--padding);
    border-right: 2px solid currentColor;
    position: fixed;
  }

  main {
    margin-left: var(--sidebar-width);
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
