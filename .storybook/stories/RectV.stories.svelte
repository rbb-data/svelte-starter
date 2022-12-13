<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { LayerCake, Svg } from 'layercake';

  import RectV from '$lib/components/layercake/RectV.svelte';
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

<Meta title="LayerCake/RectV" component={RectV} />

<Story name="Basic">
  <svg width="50" height="50">
    <RectV />
  </svg>
</Story>

<Story name="Custom attributes">
  <svg width="50" height="50">
    <RectV
      x="10"
      y="10"
      width="30"
      height="10"
      color="orange"
      outline="black"
      outline-width="2"
    />
  </svg>
</Story>

<Story name="Within LayerCake">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
      <Svg>
        <RectV data={[data[1], data[2]]} />
        <AxisX />
        <AxisY />
      </Svg>
    </LayerCake>
  </div>
</Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
