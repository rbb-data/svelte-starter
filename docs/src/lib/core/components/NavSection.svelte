<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  import { activePage } from '$lib/core/stores';

  /** @type {string} */
  export let heading;

  /** @type {string} */
  export let urlPrefix = '/';

  /** @type {(d: string) => string} */
  export let format = (d) => d;

  /** @type {Array<string>} */
  export let items = [];

  function handleNavigation() {
    if ($page.path === '/') {
      activePage.set(null);
      return;
    }

    const splitPath = $page.path.split('/');
    const currentUrlPrefix = splitPath.slice(0, -1).join('/');
    if (urlPrefix === currentUrlPrefix) {
      activePage.set($page.path);
    }
  }

  $: items.sort();

  $: handleNavigation();
</script>

<section>
  <span class="heading">{heading}</span>
  <ul>
    {#each items as item}
      <li>
        <a
          class="no-style"
          class:active={$activePage === [urlPrefix, item].join('/')}
          href={base + [urlPrefix, item].join('/')}
          rel="external"
        >
          <code class="no-style">{format(item)}</code>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    margin-bottom: var(--spacing-small);
  }

  .heading {
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a.no-style {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    border-bottom: 1px dashed var(--black);
  }

  a.active {
    border-bottom: 1px solid var(--black);
  }
</style>
