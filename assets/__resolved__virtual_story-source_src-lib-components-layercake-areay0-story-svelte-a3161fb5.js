const __resolved__virtual_storySource_srcLibComponentsLayercakeAreay0StorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  export let Hst: Hst;

  import { LayerCake, Svg } from 'layercake';

  import AreaY0 from '$lib/components/layercake/AreaY0.svelte';
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
  title="AreaY0"
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
          <AreaY0 {data} />
          <Path outline="none" />
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
          <AreaY0 {data} />
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
  __resolved__virtual_storySource_srcLibComponentsLayercakeAreay0StorySvelte as default
};
