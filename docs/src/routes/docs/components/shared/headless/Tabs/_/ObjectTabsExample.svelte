<script>
  import Showcase from '$lib/components/Showcase.svelte';
  import SvelteSnippet from '$lib/components/SvelteSnippet.svelte';

  import ObjectTabs from './ObjectTabs.svelte';

  const script = `const tabs = [
  { label: 'Label #1', color: 'steelblue' },
  { label: 'Label #2', color: 'gold' },
  { label: 'Label #3', color: 'orange' },
];

let activeIndex = 0;
// keep the active tab up-to-date
$: activeTab = tabs[activeIndex];`;

  const markup = `<Tabs {tabs} let:tab bind:activeIndex>
  <span
    class:active={tabs.findIndex((t) => t === tab) === activeIndex}
    use:css={{ color: tab.color }}
  >
    {tab.label}
  </span>
</Tabs>

Active: {activeTab.label} (color: {activeTab.color})`;

  const style = `.active {
  font-weight: bold;
  border-bottom: 4px solid var(--color);
}`;
</script>

<div class="wide">
  <Showcase>
    <SvelteSnippet
      slot="left"
      title="ObjectTabs.svelte"
      {script}
      {markup}
      {style}
    />
    <ObjectTabs slot="right" />
  </Showcase>
</div>
