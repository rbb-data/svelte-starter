<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { LayerCake, Svg } from 'layercake';

  import AxisLabelX from '$lib/components/layercake/AxisLabelX.svelte';
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

<Meta title="Viz/LayerCake/AxisLabelX" component={AxisLabelX} />

<Story name="Basic">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 20, bottom: 40 }} x="x" y="y">
      <Svg>
        <AxisY />
        <AxisX />

        <AxisLabelX>X-Axis</AxisLabelX>
      </Svg>
    </LayerCake>
  </div>
</Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
