<script>
  import Button from '$comps/shared/Button.svelte';
</script>

<div class="top">
  Treffe eine Entscheidung. Willst du lieber Option A oder Option B?
</div>
<div class="bottom">
  <Button>Option A</Button>
  <Button type="secondary">Option B</Button>
</div>

<style lang="scss">
  .top {
    margin: var(--s-px-4) auto var(--s-px-6) auto;
    text-align: center;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semi-bold);
    max-width: 300px;
  }

  .bottom {
    display: flex;
    width: 100%;
    justify-content: center;

    :global {
      & > * {
        flex: 1;
        max-width: 120px;
      }

      button:first-of-type {
        margin-right: var(--s-px-2);
      }
    }
  }
</style>
