const __resolved__virtual_storySource_srcLibComponentsLayercakeAreayStorySvelte = `<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import { LayerCake, Svg } from 'layercake';

  import AreaY from '$lib/components/layercake/AreaY.svelte';
  import AxisX from '$lib/components/layercake/AxisX.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';
  import Path from '$lib/components/layercake/Path.svelte';

  let data = [
    { x: 0, y1: 10, y2: 5 },
    { x: 10, y1: 30, y2: 10 },
    { x: 20, y1: 25, y2: 25 },
    { x: 30, y1: 50, y2: 40 },
    { x: 40, y1: 10, y2: 25 },
    { x: 50, y1: 0, y2: 15 },
  ];
<\/script>

<Hst.Story
  group="layercake"
  title="AreaY"
  layout={{ type: 'grid', width: '100%' }}
>
  <Hst.Variant title="Within chart">
    <div class="layercake">
      <LayerCake
        {data}
        padding={{ top: 6, right: 8, bottom: 24, left: 24 }}
        x="x"
        y={['y1', 'y2']}
      >
        <Svg>
          <AxisX />
          <AxisY />
          <AreaY {data} />
          <Path outline="none" />
          <Path yIndex={1} outline="none" />
        </Svg>
      </LayerCake>
    </div>
  </Hst.Variant>

  <Hst.Variant title="Shape only">
    <div class="layercake">
      <LayerCake
        {data}
        padding={{ top: 6, right: 8, bottom: 24, left: 24 }}
        x="x"
        y={['y1', 'y2']}
      >
        <Svg>
          <AreaY {data} />
        </Svg>
      </LayerCake>
    </div>
  </Hst.Variant>
</Hst.Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
`;
export {
  __resolved__virtual_storySource_srcLibComponentsLayercakeAreayStorySvelte as default
};
