<script>
  import Tabs from '$lib/components/shared/Tabs.svelte';
  import TabPanels from '$lib/components/shared/TabPanels.svelte';

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  /** @type {number} */
  let activeIndex;
</script>

<Tabs
  id="subtle-tabs"
  label="Wähle einen Tab"
  slants={false}
  {tabs}
  isTabDisabled={(tab) => tab === 'Tab 3'}
  bind:activeIndex
/>

<TabPanels id="subtle-tabs" {tabs} {activeIndex} let:tab>
  <div class="panel">Panel for {tab}</div>
</TabPanels>

<style lang="scss">
  :global {
    #subtle-tabs {
      --ui-color-accent: var(--c-ui-accent-blue);
      --ui-color-secondary: var(--c-ui-gray-200);

      .tabs__tab {
        background-color: #ffffff;
        border-bottom: 2px solid var(--ui-color-secondary);

        &.active {
          color: var(--c-ui-black);
          border-bottom-color: var(--ui-color-accent);
        }
      }
    }
  }

  .panel {
    margin: var(--s-px-2) 0;
    font-size: var(--font-size-sm);
    font-style: italic;
  }
</style>
