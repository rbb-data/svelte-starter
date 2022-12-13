<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { LayerCake, Svg } from 'layercake';

  import AxisX from '$lib/components/layercake/AxisX.svelte';

  const data = [
    { x: 0, y: 10 },
    { x: 10, y: 30 },
    { x: 20, y: 25 },
    { x: 30, y: 50 },
    { x: 40, y: 10 },
    { x: 50, y: 0 },
  ];
</script>

<Meta title="LayerCake/AxisX" component={AxisX} />

<Story name="Basic">
  <div class="layercake">
    <LayerCake {data} padding={{ bottom: 25 }} x="x" y="y">
      <Svg>
        <AxisX />
      </Svg>
    </LayerCake>
  </div>
</Story>

<Story name="Show grid lines">
  <div class="layercake">
    <LayerCake {data} padding={{ bottom: 25 }} x="x" y="y">
      <Svg>
        <AxisX showGridLines showDomainLine={false} showTickLines={false} />
      </Svg>
    </LayerCake>
  </div>
</Story>

<Story name="Show ticks only">
  <div class="layercake">
    <LayerCake {data} padding={{ bottom: 25 }} x="x" y="y">
      <Svg>
        <AxisX showDomainLine={false} />
      </Svg>
    </LayerCake>
  </div>
</Story>

<Story name="Show tick labels only">
  <div class="layercake">
    <LayerCake {data} padding={{ bottom: 25 }} x="x" y="y">
      <Svg>
        <AxisX showDomainLine={false} showTickLines={false} />
      </Svg>
    </LayerCake>
  </div>
</Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
