const __resolved__virtual_storySource_srcLibComponentsLayercakeGroupStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  export let Hst: Hst;

  import { scaleBand } from 'd3-scale';
  import { LayerCake, Svg } from 'layercake';

  import Group from '$lib/components/layercake/Group.svelte';
  import Circle from '$lib/components/layercake/Circle.svelte';
  import AxisX from '$lib/components/layercake/AxisX.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';

  const data = [
    { x: 0, y: 10 },
    { x: 10, y: 30 },
    { x: 20, y: 25 },
    { x: 30, y: 50 },
    { x: 40, y: 10 },
    { x: 50, y: 0 },
  ];
<\/script>

<Hst.Story
  group="layercake"
  title="Group"
  layout={{ type: 'grid', width: '100%' }}
>
  <div class="layercake">
    <LayerCake
      {data}
      padding={{ top: 6, right: 8, bottom: 24, left: 24 }}
      x="x"
      y="y"
    >
      <Svg>
        <AxisX />
        <AxisY />

        <Group {data} let:d>
          <Circle data={d} />
        </Group>
      </Svg>
    </LayerCake>
  </div>
</Hst.Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
`;
export {
  __resolved__virtual_storySource_srcLibComponentsLayercakeGroupStorySvelte as default
};
