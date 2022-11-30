<script>
  /**
   * `<Tabs />` and `<TabPanels />` work together to orchestrate horizontally
   * aligned tabs. This component controls the _tab panels_ (i.e. the content
   * that is associated with a tab).
   *
   * The rendered markup is composed of:
   *
   * - `.tabpanel`: wrapper element
   *
   * **Note:** Must be used in conjunction with `<Tabs />`.
   *
   * **Note:** The focus ring is implemented via `box-shadow`.
   *
   * @component
   */

  import { onMount } from 'svelte';

  /**
   * globally unique id, must match the id of the associated Tabs element
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

  onMount(() => {
    if (!document.getElementById(id)) {
      console.warn(
        'rbb-data/svelte-starter: The id of <TabPanel {id} /> does not match the id of <Tab />.'
      );
    }
  });
</script>

{#each tabs as tab, i}
  {@const active = i === activeIndex}
  <!-- svelte-ignore a11y-no-noninteractive-tabindex tab panels can be focused -->
  <div
    id="{id}--tabpanel-{i}"
    class="tab-panel"
    role="tabpanel"
    aria-labelledby="{id}--tab-{i}"
    aria-expanded={active}
    tabindex={active ? 0 : -1}
  >
    {#if active}
      <slot {tab}>
        {tab}
      </slot>
    {/if}
  </div>
{/each}
