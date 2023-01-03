const __resolved__virtual_storySource_srcLibComponentsLayercakeCircleStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  export let Hst: Hst;

  import { scaleBand } from 'd3-scale';
  import { LayerCake, Svg } from 'layercake';

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
  title="Circle"
  layout={{ type: 'grid', width: '100%' }}
>
  <Hst.Variant title="Basic">
    <svg width="50" height="50">
      <Circle cx="50%" cy="50%" />
    </svg>
  </Hst.Variant>

  <Hst.Variant title="Custom attributes">
    <svg width="50" height="50">
      <Circle
        cx="50%"
        cy="50%"
        r="8"
        color="orange"
        outline="black"
        outline-width="2"
      />
    </svg>
  </Hst.Variant>

  <Hst.Variant title="Within chart">
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

          {#each data as d}
            <Circle data={d} />
          {/each}
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
  __resolved__virtual_storySource_srcLibComponentsLayercakeCircleStorySvelte as default
};
