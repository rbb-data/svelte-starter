<script>
  export let filename;
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
    margin: 2rem 0;
  }

  .wrapper code {
    margin-left: 2rem;
  }

  .side-by-side {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }

  .side-by-side > :global(*) {
    margin-top: 0;
  }
</style>
