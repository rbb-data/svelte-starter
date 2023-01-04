<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import { LayerCake, Svg } from 'layercake';

  import Line from '$lib/components/layercake/Line.svelte';
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
</script>

<Hst.Story
  group="layercake"
  title="Line"
  layout={{ type: 'grid', width: '100%' }}
>
  <Hst.Variant title="Basic">
    <svg width="50" height="50">
      <Line x2="50" y1="10" y2="10" />
    </svg>
  </Hst.Variant>

  <Hst.Variant title="Custom attributes">
    <svg width="50" height="50">
      <Line
        x2="50"
        y1="10"
        y2="10"
        color="orange"
        width={4}
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
          <Line data={[data[0], data[1]]} />
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
