<script>
  import Tabs from '$comps/shared/Tabs.svelte';
  import TabPanels from '$comps/shared/TabPanels.svelte';

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  /** @type {number} */
  let activeIndex;
</script>

<Tabs
  id="subtle-tabs"
  aria-label="Wähle einen Tab"
  slants={false}
  {tabs}
  isTabDisabled={(tab) => tab === 'Tab 3'}
  customColors={{ light: '#bfbfbf' }}
  let:tab
  bind:activeIndex
>
  {tab}
</Tabs>

<TabPanels id="my-unique-tabs-id" {tabs} {activeIndex} let:tab>
  <div class="panel">Panel for {tab}</div>
</TabPanels>

<style lang="scss">
  :global {
    #subtle-tabs {
      [role='tab'] {
        background-color: #ffffff;
        border-bottom: 2px solid var(--c-light);

        &.active {
          color: var(--c-ui-gray-500);
          border-bottom-color: var(--c-accent);
        }

        &.disabled {
          border-bottom-color: rgba(
            191,
            191,
            191,
            0.3
          ); /* var(light) with 0.3 opacity */
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
