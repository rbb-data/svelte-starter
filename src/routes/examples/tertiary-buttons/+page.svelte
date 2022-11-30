<script lang="ts">
  import Button from '$lib/components/shared/Button.svelte';
</script>

<div class="top">
  Treffe eine Entscheidung. Willst du lieber Option A oder Option B?
</div>
<div class="bottom">
  <Button type="tertiary">Entweder</Button>
  <Button type="tertiary">Oder</Button>
</div>

<style lang="scss">
  .top {
    margin: var(--s-px-4) var(--s-px-3) var(--s-px-6) var(--s-px-3);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semi-bold);
  }

  .bottom {
    --button-color-accent: var(--c-ui-accent-purple);

    text-align: right;
  }
</style>
