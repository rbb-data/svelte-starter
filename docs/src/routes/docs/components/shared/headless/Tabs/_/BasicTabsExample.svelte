<script>
  import Showcase from '$lib/components/Showcase.svelte';
  import SvelteSnippet from '$lib/components/SvelteSnippet.svelte';

  import BasicTabs from './BasicTabs.svelte';

  const script = `const tabs = ['Tab #1', 'Tab #2', 'Tab #3'];`;

  const markup = `<Tabs {tabs} let:tab let:active>
  <span class:active>{tab}</span>
</Tabs>`;

  const style = `.active {
  font-weight: bold;
}`;
</script>

<div class="wide">
  <Showcase>
    <SvelteSnippet
      slot="left"
      title="BasicTabs.svelte"
      {script}
      {markup}
      {style}
    />
    <BasicTabs slot="right" />
  </Showcase>
</div>
