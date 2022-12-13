<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { LayerCake, Svg } from 'layercake';
  import { scaleBand } from 'd3-scale';

  import BarH from '$lib/components/layercake/BarH.svelte';
  import AxisX from '$lib/components/layercake/AxisX.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';

  const data = [
    { category: 'A', value: 10 },
    { category: 'B', value: 30 },
    { category: 'C', value: 25 },
    { category: 'D', value: 50 },
    { category: 'E', value: 10 },
    { category: 'F', value: 5 },
  ];
</script>

<Meta title="LayerCake/BarH" component={BarH} />

<Story name="Basic">
  <div class="layercake">
    <LayerCake
      {data}
      padding={{ left: 15, bottom: 30 }}
      yScale={scaleBand().padding(0.15)}
      xDomain={[0, null]}
      x="value"
      y="category"
    >
      <Svg>
        <AxisY />
        {#each data as d}
          <BarH data={d} />
        {/each}
      </Svg>
    </LayerCake>
  </div>
</Story>

<Story name="With bar labels">
  <div class="layercake">
    <LayerCake
      {data}
      padding={{ left: 15, bottom: 30, right: 15 }}
      yScale={scaleBand().padding(0.15)}
      xDomain={[0, null]}
      x="value"
      y="category"
    >
      <Svg>
        <AxisY />
        {#each data as d}
          <BarH data={d}>
            {d.value}
          </BarH>
        {/each}
      </Svg>
    </LayerCake>
  </div>
</Story>

<Story name="With bar labels at the end">
  <div class="layercake">
    <LayerCake
      {data}
      padding={{ left: 15, bottom: 30, right: 15 }}
      yScale={scaleBand().padding(0.15)}
      xDomain={[0, null]}
      x="value"
      y="category"
    >
      <Svg>
        <AxisY />
        {#each data as d}
          <BarH data={d}>
            <svelte:fragment slot="end">{d.value}</svelte:fragment>
          </BarH>
        {/each}
      </Svg>
    </LayerCake>
  </div>
</Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
