<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { LayerCake, Svg } from 'layercake';

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

<Meta title="Viz/LayerCake/AxisY" component={AxisY} />

<Story name="Basic">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 25 }} x="x" y="y">
      <Svg>
        <AxisY />
      </Svg>
    </LayerCake>
  </div>
</Story>

<Story name="Hide grid lines">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 25 }} x="x" y="y">
      <Svg>
        <AxisY showGridLines={false} showTickLines />
      </Svg>
    </LayerCake>
  </div>
</Story>

<Story name="Show tick labels only">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 25 }} x="x" y="y">
      <Svg>
        <AxisY showGridLines={false} />
      </Svg>
    </LayerCake>
  </div>
</Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
