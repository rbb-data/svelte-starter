<script>
  import { Tabs } from '@rbb-data/svelte-starter';
  import { css } from '@rbb-data/svelte-starter/actions';

  const tabs = [
    { label: 'Label #1', color: 'steelblue' },
    { label: 'Label #2', color: 'gold' },
    { label: 'Label #3', color: 'orange' },
  ];

  /** @type {number} */
  let activeIndex = 0;

  // keep the active tab up-to-date
  $: activeTab = tabs[activeIndex];
</script>

<Tabs {tabs} let:tab bind:activeIndex>
  <span
    class:active={tabs.findIndex((t) => t === tab) === activeIndex}
    use:css={{ color: tab.color }}
  >
    {tab.label}
  </span>
</Tabs>

Active: {activeTab.label} (color: {activeTab.color})

<style>
  .active {
    font-weight: bold;
    border-bottom: 4px solid var(--color);
  }
</style>
