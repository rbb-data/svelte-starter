<script>
  import SvelteMarkdown from 'svelte-markdown';

  /** @type {string} */
  export let name;

  /** @type {string} */
  export let description = '';
</script>

<h1><code class="no-style">{name}</code></h1>

{#if description}
  <SvelteMarkdown source={description} />
{/if}
