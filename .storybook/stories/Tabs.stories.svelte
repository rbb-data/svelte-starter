<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Tabs from '$lib/components/shared/Tabs.svelte';
  import TabPanels from '$lib/components/shared/TabPanels.svelte';

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  const complexTabs = [
    { label: 'Tab 1', data: [1, 2, 3] },
    { label: 'Tab 2', data: [2, 3, 4] },
    { label: 'Tab 3', data: [3, 4, 5] },
  ];

  /** @type {number} */
  let activeIndex;
  let activeIndexInitallySelected = 1;
</script>

<Meta
  title="UI/Tabs"
  component={Tabs}
  argTypes={{
    id: {
      // @ts-ignore
      type: { required: true },
    },
    tabs: {
      // @ts-ignore
      type: { required: true },
    },
    label: {
      // @ts-ignore
      type: { required: true },
    },
    isTabDisabled: {
      table: {
        defaultValue: { summary: '(tab) => false' },
      },
    },
    getTabClass: {
      table: {
        defaultValue: { summary: '(tab) => null' },
      },
    },
  }}
/>

<Story name="Basic">
  <Tabs id="basic" label="Wähle einen Tab" {tabs} bind:activeIndex />

  <TabPanels id="basic" {tabs} {activeIndex} let:tab>
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<Story name="Specify initally selected tab">
  <Tabs
    id="tabs-with-selected-index"
    label="Wähle einen Tab"
    {tabs}
    bind:activeIndex={activeIndexInitallySelected}
  />

  <TabPanels
    id="tabs-with-selected-index"
    {tabs}
    activeIndex={activeIndexInitallySelected}
    let:tab
  >
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<Story name="Custom tab labels">
  <Tabs
    id="custom-tab-labels"
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

  <TabPanels id="custom-tab-labels" {tabs} {activeIndex} let:tab>
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<Story name="Complex tabs">
  <Tabs
    id="complex-tabs"
    label="Wähle einen Tab"
    tabs={complexTabs}
    bind:activeIndex
    let:tab
  >
    {tab.label}
  </Tabs>

  <TabPanels id="complex-tabs" tabs={complexTabs} {activeIndex} let:tab>
    <div class="panel">Panel for {tab.label} with data {tab.data}</div>
  </TabPanels>
</Story>

<Story name="Disabled tab">
  <Tabs
    id="disabled-tab"
    label="Wähle einen Tab"
    {tabs}
    isTabDisabled={(tab) => tab === 'Tab 3'}
    bind:activeIndex
  />

  <TabPanels id="disabled-tab" {tabs} {activeIndex} let:tab>
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<Story name="Custom accent color">
  <Tabs
    id="custom-accent-color"
    label="Wähle einen Tab"
    {tabs}
    --ui-color-accent="var(--c-ui-accent-purple)"
    bind:activeIndex
  />

  <TabPanels id="custom-accent-color" {tabs} {activeIndex} let:tab>
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<Story name="Customise all colors">
  <Tabs
    id="customise-all-colors"
    label="Wähle einen Tab"
    {tabs}
    getTabClass={(tab) => tab.toLowerCase().replace(' ', '-')}
    bind:activeIndex
  />

  <TabPanels id="customise-all-colors" {tabs} {activeIndex} let:tab>
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<Story name="Without slants">
  <Tabs
    id="without-slants"
    label="Wähle einen Tab"
    {tabs}
    slants={false}
    bind:activeIndex
  />

  <TabPanels id="without-slants" {tabs} {activeIndex} let:tab>
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<style lang="scss">
  .panel {
    margin: var(--s-px-2) 0;
  }

  :global {
    #customise-all-colors {
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
