<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { LayerCake, Svg } from 'layercake';
  import { scaleBand } from 'd3-scale';

  import BarV from '$lib/components/layercake/BarV.svelte';
  import AxisX from '$lib/components/layercake/AxisX.svelte';

  const data = [
    { category: 'A', value: 10 },
    { category: 'B', value: 30 },
    { category: 'C', value: 25 },
    { category: 'D', value: 50 },
    { category: 'E', value: 10 },
    { category: 'F', value: 5 },
  ];
</script>

<Meta title="Viz/LayerCake/BarV" component={BarV} />

<Story name="Basic">
  <div class="layercake">
    <LayerCake
      {data}
      padding={{ left: 15, bottom: 30 }}
      xScale={scaleBand().padding(0.15)}
      yDomain={[0, null]}
      y="value"
      x="category"
    >
      <Svg>
        <AxisX showTickLines={false} showDomainLine={false} />
        {#each data as d}
          <BarV data={d} />
        {/each}
      </Svg>
    </LayerCake>
  </div>
</Story>

<Story name="With bar labels">
  <div class="layercake">
    <LayerCake
      {data}
      padding={{ left: 15, bottom: 30 }}
      xScale={scaleBand().padding(0.15)}
      yDomain={[0, null]}
      y="value"
      x="category"
    >
      <Svg>
        <AxisX showTickLines={false} showDomainLine={false} />
        {#each data as d}
          <BarV data={d}>
            {d.value}
          </BarV>
        {/each}
      </Svg>
    </LayerCake>
  </div>
</Story>

<Story name="With bar labels on top">
  <div class="layercake">
    <LayerCake
      {data}
      padding={{ left: 15, bottom: 30 }}
      xScale={scaleBand().padding(0.15)}
      yDomain={[0, null]}
      y="value"
      x="category"
    >
      <Svg>
        <AxisX showTickLines={false} showDomainLine={false} />
        {#each data as d}
          <BarV data={d}>
            <svelte:fragment slot="end">
              {d.value}
            </svelte:fragment>
          </BarV>
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
