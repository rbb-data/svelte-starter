<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ fetch }) => {
    const filename = 'data/nav.json';
    const res = await fetch(`/load/${encodeURIComponent(filename)}`);
    const navSections = await res.json();

    return {
      props: {
        navSections: res.ok ? navSections : [],
      },
    };
  };
</script>

<script>
  import { base, assets } from '$app/paths';
  import NavSection from '$lib/core/components/NavSection.svelte';

  import '../style/index.css';

  /** @type {Array<import('$lib/core/types').NavSection>} */
  export let navSections = [];

  /**
   * @param {import('$lib/core/types').SvelteType} type
   * @returns {(item: string) => string}
   */
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
    <div>
      <a href="{base}/" class="logo">
        <img src="{assets}/rbb24Logo.png" alt="rbb|24 logo" />
      </a>
      <nav>
        {#each navSections as navSection}
          <NavSection {...navSection} format={format(navSection.type)} />
        {/each}
      </nav>
    </div>
  </div>
  <main>
    <slot />
  </main>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: minmax(200px, 20%) 1fr;

    height: 100%;
  }

  .sidebar {
    height: 100%;
    padding: var(--spacing-small);
    border-right: 2px solid currentColor;
  }

  .sidebar div {
    position: fixed;
  }

  main {
    padding: var(--spacing-small) var(--spacing-large);
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
    margin-top: var(--spacing-small);
  }
</style>
