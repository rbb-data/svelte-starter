<script>
  import Snippet from './Snippet.svelte';

  /** @type {string} */
  export let title = undefined;

  /** @type {string} */
  export let script = undefined;

  /** @type {string} */
  export let markup = undefined;

  /** @type {string} */
  export let style = undefined;
</script>

<div class="svelte-snippet">
  {#if title}
    <code class="title no-style">{title}</code>
  {/if}
  <div class="snippets">
    {#if script}
      <Snippet title="script" source={script} language="javascript" />
    {/if}
    {#if markup}
      <Snippet title="markup" source={markup} language="html" />
    {/if}
    {#if style}
      <Snippet title="style" source={style} language="css" />
    {/if}
  </div>
</div>

<style>
  .snippets {
    background-color: rgb(251, 253, 254);
    padding-top: 0.5rem;
    border-radius: 0.4rem;
  }

  .snippets :global(.title) {
    color: #444;
  }

  .title {
    display: block;
    margin-left: 2rem;
    font-weight: bold;
  }
</style>
