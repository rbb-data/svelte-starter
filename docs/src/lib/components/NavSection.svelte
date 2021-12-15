<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  import { activePage } from '$lib/stores';

  /** @type {string} */
  export let heading = undefined;

  /** @type {string} */
  export let urlPrefix = '/';

  /** @type {(d: string) => string} */
  export let format = (d) => d;

  /** @type {string[]} */
  export let items = [];

  function handleNavigation() {
    const path = $page.path.replace('/docs', '');
    const splitPath = path.split('/');
    const currentUrlPrefix = splitPath.slice(0, -1).join('/');
    if (urlPrefix === currentUrlPrefix) {
      activePage.set(path);
    }
  }

  $: items.sort();

  $: handleNavigation();
</script>

<section>
  {#if heading}
    <span class="heading">{heading}</span>
  {/if}
  <ul>
    {#each items as item}
      <li on:click={() => activePage.set([urlPrefix, item].join('/'))}>
        <a
          class="no-style"
          class:active={$activePage === [urlPrefix, item].join('/')}
          href={base + ['/docs' + urlPrefix, item].join('/')}
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
