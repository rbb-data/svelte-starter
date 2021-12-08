<script>
  import SvelteMarkdown from 'svelte-markdown';

  export let name;
  export let description = '';
</script>

<h1><code class="no-style">{name}</code></h1>

{#if description}
  <div class="slim">
    <SvelteMarkdown source={description} />
  </div>
{/if}
