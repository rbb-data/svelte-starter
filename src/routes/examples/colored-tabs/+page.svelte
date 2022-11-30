<script lang="ts">
  import Tabs from '$lib/components/shared/Tabs.svelte';
  import TabPanels from '$lib/components/shared/TabPanels.svelte';

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  let activeIndex: number;
</script>

<Tabs
  id="colored-tabs"
  label="Wähle einen Tab"
  slants={false}
  {tabs}
  isTabDisabled={(tab) => tab === 'Tab 3'}
  getTabClass={(tab) => tab.toLowerCase().replace(' ', '-')}
  bind:activeIndex
/>

<TabPanels id="colored-tabs" {tabs} {activeIndex} let:tab>
  <div class="panel">Panel for {tab}</div>
</TabPanels>

<style lang="scss">
  :global {
    #colored-tabs {
      --ui-color-accent: var(--c-ui-black);
      --ui-color-secondary: var(--c-gray-100);

      .tabs__tab {
        background-color: #ffffff;
        border-bottom: 2px solid var(--ui-color-accent);

        &.active {
          color: var(--c-ui-black);
          background-color: var(--ui-color-secondary);
        }

        &.tab-1 {
          --ui-color-accent: var(--c-ui-accent-blue);
          --ui-color-secondary: var(--c-blue-100);
        }

        &.tab-2 {
          --ui-color-accent: var(--c-ui-accent-purple);
          --ui-color-secondary: var(--c-purple-100);
        }

        &.tab-3 {
          --ui-color-accent: var(--c-ui-accent-yellow);
          --ui-color-secondary: var(--c-yellow-100);
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
