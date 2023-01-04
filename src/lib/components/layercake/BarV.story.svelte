<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import { scaleBand } from 'd3-scale';
  import { LayerCake, Svg } from 'layercake';

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

  const yDomain = (domain: [number, number]) => [0, domain[1]];
</script>

<Hst.Story
  group="layercake"
  title="BarV"
  layout={{ type: 'grid', width: '100%' }}
>
  <Hst.Variant title="Within chart">
    <div class="layercake">
      <LayerCake
        {data}
        padding={{ bottom: 20, top: 20 }}
        xScale={scaleBand().padding(0.15)}
        {yDomain}
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
  </Hst.Variant>

  <Hst.Variant title="With bar labels">
    <div class="layercake">
      <LayerCake
        {data}
        padding={{ bottom: 20, top: 20 }}
        xScale={scaleBand().padding(0.15)}
        {yDomain}
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
  </Hst.Variant>

  <Hst.Variant title="With bar labels on top">
    <div class="layercake">
      <LayerCake
        {data}
        padding={{ bottom: 20, top: 20 }}
        xScale={scaleBand().padding(0.15)}
        {yDomain}
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
  </Hst.Variant>
</Hst.Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
