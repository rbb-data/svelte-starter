<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import Tabs from './Tabs.svelte';
  import TabPanels from './TabPanels.svelte';

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  const complexTabs = [
    { label: 'Tab 1', data: [1, 2, 3] },
    { label: 'Tab 2', data: [2, 3, 4] },
    { label: 'Tab 3', data: [3, 4, 5] },
  ];
  let activeIndex: number;
  let activeIndexInitiallySelected = 1;
</script>

<Hst.Story
  group="ui"
  title="TabPanels"
  layout={{ type: 'grid', width: '100%' }}
>
  <Hst.Variant title="Basic">
    <Tabs
      id="my-unique-tabs-id"
      label="Wähle einen Tab"
      {tabs}
      bind:activeIndex
    />

    <TabPanels id="my-unique-tabs-id" {tabs} {activeIndex} let:tab>
      <div class="panel">Panel for {tab}</div>
    </TabPanels>
  </Hst.Variant>

  <Hst.Variant title="Specify initially selected tab">
    <Tabs
      id="my-unique-tabs-id"
      label="Wähle einen Tab"
      {tabs}
      bind:activeIndex={activeIndexInitiallySelected}
    />

    <TabPanels
      id="my-unique-tabs-id"
      {tabs}
      activeIndex={activeIndexInitiallySelected}
      let:tab
    >
      <div class="panel">Panel for {tab}</div>
    </TabPanels>
  </Hst.Variant>

  <Hst.Variant title="Custom tab labels">
    <Tabs
      id="my-unique-tabs-id"
      label="Wähle einen Tab"
      {tabs}
      bind:activeIndex
      let:tab
      let:active
    >
      {tab}
      {#if active}
        (active)
      {/if}
    </Tabs>

    <TabPanels id="my-unique-tabs-id" {tabs} {activeIndex} let:tab>
      <div class="panel">Panel for {tab}</div>
    </TabPanels>
  </Hst.Variant>

  <Hst.Variant title="Complex tabs">
    <Tabs
      id="my-unique-tabs-id"
      label="Wähle einen Tab"
      tabs={complexTabs}
      bind:activeIndex
      let:tab
    >
      {tab.label}
    </Tabs>

    <TabPanels id="my-unique-tabs-id" tabs={complexTabs} {activeIndex} let:tab>
      <div class="panel">Panel for {tab.label} with data {tab.data}</div>
    </TabPanels>
  </Hst.Variant>

  <Hst.Variant title="Disabled tab">
    <Tabs
      id="my-unique-tabs-id"
      label="Wähle einen Tab"
      {tabs}
      isTabDisabled={(tab) => tab === 'Tab 3'}
      bind:activeIndex
    />

    <TabPanels id="my-unique-tabs-id" {tabs} {activeIndex} let:tab>
      <div class="panel">Panel for {tab}</div>
    </TabPanels>
  </Hst.Variant>

  <Hst.Variant title="Custom accent color">
    <Tabs
      id="my-unique-tabs-id"
      class="tabs-with-custom-accent-color"
      label="Wähle einen Tab"
      {tabs}
      bind:activeIndex
    />

    <TabPanels id="my-unique-tabs-id" {tabs} {activeIndex} let:tab>
      <div class="panel">Panel for {tab}</div>
    </TabPanels>
  </Hst.Variant>

  <Hst.Variant title="Customize all colors">
    <Tabs
      id="my-unique-tabs-id"
      class="tabs-with-custom-colors"
      label="Wähle einen Tab"
      {tabs}
      getTabClass={(tab) => tab.toLowerCase().replace(' ', '-')}
      bind:activeIndex
    />

    <TabPanels id="my-unique-tabs-id" {tabs} {activeIndex} let:tab>
      <div class="panel">Panel for {tab}</div>
    </TabPanels>
  </Hst.Variant>

  <Hst.Variant title="Without slants">
    <Tabs
      id="my-unique-tabs-id"
      label="Wähle einen Tab"
      {tabs}
      slants={false}
      bind:activeIndex
    />

    <TabPanels id="my-unique-tabs-id" {tabs} {activeIndex} let:tab>
      <div class="panel">Panel for {tab}</div>
    </TabPanels>
  </Hst.Variant>
</Hst.Story>

<style lang="scss">
  .panel {
    margin: var(--s-px-2) 0;
  }

  :global {
    .tabs-with-custom-accent-color {
      --ui-color-accent: var(--c-ui-accent-purple);
    }

    .tabs-with-custom-colors {
      .tab-1 {
        --ui-color-accent: var(--c-ui-accent-purple);
      }

      .tab-2 {
        --ui-color-accent: var(--c-ui-accent-turquoise);
      }

      .tab-3 {
        --ui-color-accent: var(--c-ui-accent-yellow);
      }
    }
  }
</style>
