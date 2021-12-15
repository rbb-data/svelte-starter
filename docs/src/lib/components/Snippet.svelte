<script>
  import Prism from 'prismjs';
  import 'prism-svelte';

  /** @type {string} */
  export let source;

  /** @type {keyof import('prismjs').Languages} */
  export let language;

  /** @type {string} */
  export let title = undefined;

  export let boldTitle = true;

  export let inline = false;

  const highlight = Prism.highlight(
    source,
    Prism.languages[language],
    /** @type {string} */ (language)
  );
</script>

{#if inline}
  <code class={`language-${language}`}>
    {@html highlight}
  </code>
{:else}
  <div class="wrapper">
    {#if title}
      <code class="title no-style" class:bold={boldTitle}>
        {title}
      </code>
    {/if}
    <pre
      class={`language-${language}`}>
    <code class="no-style">
      {@html highlight}
    </code>
  </pre>
  </div>
{/if}

<style>
  .title {
    margin-left: 2rem;
  }

  .title.bold {
    font-weight: bold;
  }

  pre {
    margin-top: 0;
  }
</style>
