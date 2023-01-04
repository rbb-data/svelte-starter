const __resolved__virtual_storySource_srcLibComponentsSharedChartheaderStorySvelte = `<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import ChartHeader from './ChartHeader.svelte';

  let title = 'Chart title';
  let subtitle = 'Chart subtitle';
<\/script>

<Hst.Story
  group="viz"
  title="ChartHeader"
  layout={{ type: 'grid', width: '100%' }}
>
  <Hst.Variant title="Title">
    <ChartHeader>{title}</ChartHeader>

    <svelte:fragment slot="controls">
      <Hst.Text title="Title" bind:value={title} />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="With subtitle">
    <ChartHeader>
      {title}
      <svelte:fragment slot="subtitle">{subtitle}</svelte:fragment>
    </ChartHeader>

    <svelte:fragment slot="controls">
      <Hst.Text title="Title" bind:value={title} />
      <Hst.Text title="Subtitle" bind:value={subtitle} />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>
`;
export {
  __resolved__virtual_storySource_srcLibComponentsSharedChartheaderStorySvelte as default
};
