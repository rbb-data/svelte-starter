<script>
  import Button from '$lib/components/shared/Button.svelte';
</script>

<div class="wrapper">
  <Button type="secondary" accentColor="black">
    Option A braucht mehr Text zur Erläuterung
  </Button>
  <Button type="secondary" accentColor="black">
    B kommt auch nicht mit 1 - 3 Worten aus
  </Button>
  <Button type="secondary" accentColor="black">
    Option C ist ebenfalls etwas länger
  </Button>
</div>

<style lang="scss">
  .wrapper :global {
    button {
      width: 100%;
      text-transform: none !important;

      & + button {
        margin-top: var(--s-px-2);
      }
    }
  }
</style>
