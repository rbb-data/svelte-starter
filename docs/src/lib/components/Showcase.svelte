<script>
  /** @type {string} */
  export let filename = undefined;
</script>

<div class="wrapper">
  {#if filename}
    <code class="no-style">{filename}</code>
  {/if}
  <div class="side-by-side">
    <slot name="left" />
    <slot name="right" />
  </div>
</div>

<style>
  .wrapper {
    margin: var(--spacing-large) 0;
  }

  .wrapper code {
    margin-left: 2rem;
  }

  .side-by-side {
    display: grid;
    grid-template-columns: var(--text-width) 1fr;
    column-gap: var(--spacing-small);
  }

  .side-by-side > :global(*) {
    margin-top: 0;
  }
</style>
