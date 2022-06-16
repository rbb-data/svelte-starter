<script>
  /**
   * unique id, must match the id of the associated Tabs element
   *
   * @type {string}
   */
  export let id;

  /**
   * list of tabs
   *
   * @type {any[]}
   */
  export let tabs;

  /**
   * index of the active tab
   *
   * @type {number}
   */
  export let activeIndex;
</script>

{#each tabs as tab, i}
  {@const isActive = i === activeIndex}
  <div
    id="{id}-tabpanel"
    role="tabpanel"
    aria-labelledby="{id}-tab"
    aria-expanded={isActive}
    tabindex={isActive ? 0 : -1}
  >
    {#if isActive}
      <slot {tab} />
    {/if}
  </div>
{/each}
