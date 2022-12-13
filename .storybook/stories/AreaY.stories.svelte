<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { LayerCake, Svg } from 'layercake';

  import AreaY from '$lib/components/layercake/AreaY.svelte';
  import AxisX from '$lib/components/layercake/AxisX.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';
  import Path from '$lib/components/layercake/Path.svelte';

  const data = [
    { x: 0, y1: 10, y2: 5 },
    { x: 10, y1: 30, y2: 10 },
    { x: 20, y1: 25, y2: 25 },
    { x: 30, y1: 50, y2: 40 },
    { x: 40, y1: 10, y2: 25 },
    { x: 50, y1: 0, y2: 15 },
  ];
</script>

<Meta title="LayerCake/AreaY" component={AreaY} />

<Story name="Basic">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y={['y1', 'y2']}>
      <Svg>
        <AxisX />
        <AxisY />
        <AreaY {data} />
        <Path outline="none" />
        <Path yIndex={1} outline="none" />
      </Svg>
    </LayerCake>
  </div>
</Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
