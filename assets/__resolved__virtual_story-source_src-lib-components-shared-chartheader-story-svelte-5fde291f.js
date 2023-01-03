const __resolved__virtual_storySource_srcLibComponentsSharedChartheaderStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  export let Hst: Hst;

  import ChartHeader from './ChartHeader.svelte';

  let title = 'Chart title';
  let subtitle = 'Chart subtitle';
<\/script>

<Hst.Story title="Viz/ChartHeader">
  <Hst.Variant title="Title">
    <ChartHeader>{title}</ChartHeader>

    <svelte:fragment slot="controls">
      <Hst.Text bind:value={title} title="Title" />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="With subtitle">
    <ChartHeader>
      {title}
      <svelte:fragment slot="subtitle">{subtitle}</svelte:fragment>
    </ChartHeader>

    <svelte:fragment slot="controls">
      <Hst.Text bind:value={title} title="Title" />
      <Hst.Text bind:value={subtitle} title="Subtitle" />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>
`;
export {
  __resolved__virtual_storySource_srcLibComponentsSharedChartheaderStorySvelte as default
};
