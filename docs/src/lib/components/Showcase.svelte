<script>
  /** @type {string} */
  export let title = undefined;
</script>

<div class="wrapper">
  {#if title}
    <code class="title no-style">{title}</code>
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

  .wrapper .title {
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
