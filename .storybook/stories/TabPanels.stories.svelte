<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Tabs from '$comps/shared/Tabs.svelte';
  import TabPanels from '$comps/shared/TabPanels.svelte';

  import {
    cUiAccentYellow,
    cUiAccentPurple,
    cUiAccentTurquoise,
    cYellow100,
    cPurple100,
    cTurquoise100,
  } from '$lib/tokens';

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  const complexTabs = [
    { label: 'Tab 1', data: [1, 2, 3] },
    { label: 'Tab 2', data: [2, 3, 4] },
    { label: 'Tab 3', data: [3, 4, 5] },
  ];

  /** @param {string} tab */
  function getAccentColor(tab) {
    switch (tab) {
      case 'Tab 1':
        return cUiAccentYellow;
      case 'Tab 2':
        return cUiAccentPurple;
      case 'Tab 3':
        return cUiAccentTurquoise;
      default:
        return cUiAccentYellow;
    }
  }

  /** @param {string} tab */
  function getLightColor(tab) {
    switch (tab) {
      case 'Tab 1':
        return cYellow100;
      case 'Tab 2':
        return cPurple100;
      case 'Tab 3':
        return cTurquoise100;
      default:
        return cYellow100;
    }
  }

  /** @type {number} */
  let activeIndex;
  let activeIndexInitallySelected = 1;
</script>

<Meta
  title="UI/TabPanels"
  component={TabPanels}
  argTypes={{
    id: {
      // @ts-ignore
      type: { required: true },
    },
    tabs: {
      // @ts-ignore
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

<Story name="Disabled tab">
  <Tabs
    id="my-unique-tabs-id"
    aria-label="Wähle einen Tab"
    {tabs}
    isTabDisabled={(/** @type {string} */ tab) => tab === 'Tab 3'}
    let:tab
    bind:activeIndex
  >
    {tab}
  </Tabs>

  <TabPanels id="my-unique-tabs-id" {tabs} {activeIndex} let:tab>
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<Story name="Custom accent color">
  <Tabs
    id="my-unique-tabs-id"
    aria-label="Wähle einen Tab"
    {tabs}
    colorScheme="purple"
    let:tab
    bind:activeIndex
  >
    {tab}
  </Tabs>

  <TabPanels
    id="my-unique-tabs-id"
    {tabs}
    {activeIndex}
    colorScheme="purple"
    let:tab
  >
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<Story name="Custom tab colors">
  <Tabs
    id="my-unique-tabs-id"
    aria-label="Wähle einen Tab"
    {tabs}
    customColors={{
      accent: getAccentColor,
      focus: getAccentColor,
    }}
    let:tab
    bind:activeIndex
  >
    {tab}
  </Tabs>

  <TabPanels
    id="my-unique-tabs-id"
    {tabs}
    {activeIndex}
    customColors={{ focus: getAccentColor }}
    let:tab
  >
    <div class="panel">Panel for {tab}</div>
  </TabPanels>
</Story>

<Story name="Customize all colors">
  <Tabs
    id="my-unique-tabs-id"
    aria-label="Wähle einen Tab"
    {tabs}
    customColors={{
      accent: getAccentColor,
      light: getLightColor,
      focus: getAccentColor,
    }}
    let:tab
    bind:activeIndex
  >
    {tab}
  </Tabs>

  <TabPanels
    id="my-unique-tabs-id"
    {tabs}
    {activeIndex}
    customColors={{ focus: getAccentColor }}
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
