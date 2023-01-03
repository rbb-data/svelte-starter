const __resolved__virtual_storySource_srcLibComponentsLayercakeAxislabelxStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  export let Hst: Hst;

  import { LayerCake, Svg } from 'layercake';

  import AxisLabelX from '$lib/components/layercake/AxisLabelX.svelte';
  import AxisX from '$lib/components/layercake/AxisX.svelte';

  const data = [
    { x: 0, y: 10 },
    { x: 10, y: 30 },
    { x: 20, y: 25 },
    { x: 30, y: 50 },
    { x: 40, y: 10 },
    { x: 50, y: 0 },
  ];

  let label = 'X-Axis';
<\/script>

<Hst.Story
  group="layercake"
  title="AxisLabelX"
  layout={{ type: 'grid', width: '100%' }}
>
  <div class="layercake">
    <LayerCake
      {data}
      padding={{ top: 6, right: 8, bottom: 38, left: 24 }}
      x="x"
      y="y"
    >
      <Svg>
        <AxisX />
        <AxisLabelX>{label}</AxisLabelX>
      </Svg>
    </LayerCake>
  </div>

  <svelte:fragment slot="controls">
    <Hst.Text title="Label" bind:value={label} />
  </svelte:fragment>
</Hst.Story>

<style>
  .layercake {
    height: 50px;
  }
</style>
`;
export {
  __resolved__virtual_storySource_srcLibComponentsLayercakeAxislabelxStorySvelte as default
};
