<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import { LayerCake, Svg } from 'layercake';

  import AxisLabelY from '$lib/components/layercake/AxisLabelY.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';

  const data = [
    { x: 0, y: 10 },
    { x: 10, y: 30 },
    { x: 20, y: 25 },
    { x: 30, y: 50 },
    { x: 40, y: 10 },
    { x: 50, y: 0 },
  ];

  let label = 'Y-Axis';
</script>

<Hst.Story
  group="layercake"
  title="AxisLabelY"
  layout={{ type: 'grid', width: '100%' }}
>
  <div class="layercake">
    <LayerCake
      {data}
      padding={{ top: 28, right: 8, bottom: 24, left: 24 }}
      x="x"
      y="y"
    >
      <Svg>
        <AxisY />
        <AxisLabelY>{label}</AxisLabelY>
      </Svg>
    </LayerCake>
  </div>

  <svelte:fragment slot="controls">
    <Hst.Text title="Label" bind:value={label} />
  </svelte:fragment>
</Hst.Story>

<style>
  .layercake {
    height: 250px;
  }
</style>
