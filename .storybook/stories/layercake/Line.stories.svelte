<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
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

<Meta title="Viz/LayerCake/Line" component={Line} />

<Story name="Basic">
  <svg width="50" height="50">
    <Line x2="50" y1="10" y2="10" />
  </svg>
</Story>

<Story name="Custom attributes">
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
</Story>

<Story name="Within LayerCake">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
      <Svg>
        <AxisX />
        <AxisY />
        <Line data={[data[0], data[1]]} />
      </Svg>
    </LayerCake>
  </div>
</Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
