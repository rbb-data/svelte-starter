<script>
  import Button from '$comps/shared/Button.svelte';
</script>

<div class="top">
  Treffe eine Entscheidung. Willst du lieber Option A oder Option B?
</div>
<div class="bottom">
  <Button type="tertiary" accentColor="purple">Entweder</Button>
  <Button type="tertiary" accentColor="purple">Oder</Button>
</div>

<style lang="scss">
  .top {
    margin: var(--s-px-4) var(--s-px-3) var(--s-px-6) var(--s-px-3);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semi-bold);
  }

  .bottom {
    text-align: right;
  }
</style>
