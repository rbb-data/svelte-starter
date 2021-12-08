<script>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-typescript';
  import 'prism-svelte';

  export let source;
  export let language;
  export let inline = false;

  const highlight = Prism.highlight(
    source,
    Prism.languages[language],
    language
  );
</script>

{#if inline}
  <code class={`language-${language}`}>
    {@html highlight}
  </code>
{:else}
  <pre
    class={`language-${language}`}>
    <code class="no-style">
      {@html highlight}
    </code>
  </pre>
{/if}
