<script lang="ts">
  /**
   * Data-driven `<line />` (vertical)
   *
   * @component
   */

  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { LayerCake, Svg } from 'layercake';

  import LineV from '$lib/components/layercake/LineV.svelte';
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

<Meta title="Viz/LayerCake/LineV" component={LineV} />

<Story name="Basic">
  <svg width="50" height="50">
    <LineV x="10" y1="5" y2="40" />
  </svg>
</Story>

<Story name="Custom attributes">
  <svg width="50" height="50">
    <LineV
      x="10"
      y1="5"
      y2="40"
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
        <LineV xData={data[1].y} />
      </Svg>
    </LayerCake>
  </div>
</Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
