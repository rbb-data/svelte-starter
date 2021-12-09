<script>
  import { page } from '$app/stores';

  import { activePage } from '$lib/core/stores';

  export let heading;
  export let urlPrefix = '/';
  export let format = (d) => d;
  export let items = [];

  $: items.sort();

  $: {
    const splitPath = $page.path.split('/');
    const currentUrlPrefix = splitPath.slice(0, -1).join('/');
    if (urlPrefix === currentUrlPrefix) {
      activePage.set($page.path);
    }
  }
</script>

<section>
  <span class="heading">{heading}</span>
  <ul>
    {#each items as item}
      <li>
        <a
          class="no-style"
          class:active={$activePage === [urlPrefix, item].join('/')}
          href={[urlPrefix, item].join('/')}
        >
          <code class="no-style">{format(item)}</code>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    margin-bottom: 1rem;
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
