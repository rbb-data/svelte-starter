<script>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-typescript';
  import 'prism-svelte';

  /** @type {string} */
  export let source;

  /** @type {keyof import('prismjs').Languages} */
  export let language;

  /** @type {string} */
  export let title = undefined;

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
  {#if title}
    <code class="title no-style">{title}</code>
  {/if}
  <pre
    class={`language-${language}`}>
    <code class="no-style">
      {@html highlight}
    </code>
  </pre>
{/if}

<style>
  .title {
    margin-left: 2rem;
  }

  pre {
    margin-top: 0;
  }
</style>
