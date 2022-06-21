<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Tabs from '$shared/Tabs.svelte';
  import TabPanels from '$shared/TabPanels.svelte';

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  const complexTabs = [
    { label: 'Tab 1', data: [1, 2, 3] },
    { label: 'Tab 2', data: [2, 3, 4] },
    { label: 'Tab 3', data: [3, 4, 5] },
  ];

  let activeIndex;
  let activeIndexInitallySelected = 1;
</script>

<Meta
  title="Components/TabPanels"
  component={TabPanels}
  argTypes={{
    id: {
      type: { required: true },
    },
    tabs: {
      type: { required: true },
    },
  }}
/>

<Story name="Basic">
  <Tabs
    id="my-unique-tabs-id"
    aria-label="Wähle einen Tab"
    {tabs}
    let:tab
    bind:activeIndex
  >
    {tab}
  </Tabs>

  <TabPanels id="my-unique-tabs-id" {tabs} {activeIndex} let:tab>
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<Story name="Specify initally selected tab">
  <Tabs
    id="my-unique-tabs-id"
    aria-label="Wähle einen Tab"
    {tabs}
    let:tab
    bind:activeIndex={activeIndexInitallySelected}
  >
    {tab}
  </Tabs>

  <TabPanels
    id="my-unique-tabs-id"
    {tabs}
    activeIndex={activeIndexInitallySelected}
    let:tab
  >
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<Story name="Update tab on selection">
  <Tabs
    id="my-unique-tabs-id"
    aria-label="Wähle einen Tab"
    {tabs}
    let:tab
    let:active
    bind:activeIndex
  >
    {tab}
    {#if active}
      (active)
    {/if}
  </Tabs>

  <TabPanels id="my-unique-tabs-id" {tabs} {activeIndex} let:tab>
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<Story name="Complex tabs">
  <Tabs
    id="my-unique-tabs-id"
    aria-label="Wähle einen Tab"
    tabs={complexTabs}
    let:tab
    let:active
    bind:activeIndex
  >
    {tab.label}
    {#if active}
      (active)
    {/if}
  </Tabs>

  <TabPanels id="my-unique-tabs-id" tabs={complexTabs} {activeIndex} let:tab>
    <div class="panel">Panel for {tab.label} with data {tab.data}</div>
  </TabPanels>
</Story>

<Story name="Custom accent color">
  <Tabs
    id="my-unique-tabs-id"
    aria-label="Wähle einen Tab"
    {tabs}
    accentColor="purple"
    let:tab
    bind:activeIndex
  >
    {tab}
  </Tabs>

  <TabPanels
    id="my-unique-tabs-id"
    {tabs}
    {activeIndex}
    accentColor="purple"
    let:tab
  >
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<Story name="Without slants">
  <Tabs
    id="my-unique-tabs-id"
    aria-label="Wähle einen Tab"
    {tabs}
    slants={false}
    let:tab
    bind:activeIndex
  >
    {tab}
  </Tabs>

  <TabPanels id="my-unique-tabs-id" {tabs} {activeIndex} let:tab>
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<Story name="Visual label">
  <div id="tabs-label">Meine Tabs</div>
  <Tabs
    id="my-unique-tabs-id"
    aria-labelledby="tabs-label"
    {tabs}
    let:tab
    bind:activeIndex
  >
    {tab}
  </Tabs>

  <TabPanels id="my-unique-tabs-id" {tabs} {activeIndex} let:tab>
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<style>
  .panel {
    margin: var(--s-px-2) 0;
  }
</style>
