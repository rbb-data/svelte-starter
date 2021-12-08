<script>
  import SvelteMarkdown from 'svelte-markdown';

  export let name;
  export let description = '';
</script>

<h1><code class="no-style">{name}</code></h1>

{#if description}
  <SvelteMarkdown source={description} />
{/if}
