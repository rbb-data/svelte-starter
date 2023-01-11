const __resolved__virtual_storySource_srcLibComponentsSharedChartlegendStorySvelte = `<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import ChartLegend from '$lib/components/shared/ChartLegend.svelte';
  import * as tokens from '$lib/tokens';
<\/script>

<Hst.Story
  group="viz"
  title="ChartLegend"
  layout={{ type: 'grid', width: '100%' }}
>
  <Hst.Variant title="Basic">
    <ChartLegend
      items={['Beschriftung', 'Beschriftung', 'Beschriftung']}
      getItemColor={(_, i) =>
        [tokens.cCategoryBlue, tokens.cCategoryGreen, tokens.cCategoryPurple][
          i
        ]}
    />
  </Hst.Variant>

  <Hst.Variant title="With complex items">
    <ChartLegend
      items={[
        { label: 'Beschriftung', color: tokens.cCategoryBlue },
        { label: 'Beschriftung', color: tokens.cCategoryGreen },
        { label: 'Beschriftung', color: tokens.cCategoryPurple },
      ]}
      getItemColor={(item) => item.color}
      let:item
    >
      {item.label}
    </ChartLegend>
  </Hst.Variant>

  <Hst.Variant title="With custom shapes">
    <ChartLegend
      items={[
        { label: 'Beschriftung', color: tokens.cCategoryBlue },
        { label: 'Beschriftung', color: tokens.cCategoryGreen },
        { label: 'Beschriftung', color: tokens.cCategoryPurple },
      ]}
      getItemColor={(item) => item.color}
      let:item
    >
      <div slot="shape" class="circle" style:--color={item.color} />
      {item.label}
    </ChartLegend>
  </Hst.Variant>
</Hst.Story>

<style>
  .circle {
    width: 1.15em;
    height: 1.15em;
    background-color: var(--color);
    border-radius: 50%;
  }
</style>
`;
export {
  __resolved__virtual_storySource_srcLibComponentsSharedChartlegendStorySvelte as default
};
