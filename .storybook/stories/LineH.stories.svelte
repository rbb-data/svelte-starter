<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { LayerCake, Svg } from 'layercake';

  import LineH from '$lib/components/layercake/LineH.svelte';
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

<Meta title="LayerCake/LineH" component={LineH} />

<Story name="Basic">
  <svg width="50" height="50">
    <LineH y="10" x1="5" x2="40" />
  </svg>
</Story>

<Story name="Custom attributes">
  <svg width="50" height="50">
    <LineH
      y="10"
      x1="5"
      x2="40"
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
        <AxisY showGridLines={false} showTickLines />
        <LineH yData={data[1].y} />
      </Svg>
    </LayerCake>
  </div>
</Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
