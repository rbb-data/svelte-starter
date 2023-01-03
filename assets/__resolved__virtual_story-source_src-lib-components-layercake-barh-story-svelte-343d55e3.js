const __resolved__virtual_storySource_srcLibComponentsLayercakeBarhStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  export let Hst: Hst;

  import { scaleBand } from 'd3-scale';
  import { LayerCake, Svg } from 'layercake';

  import BarH from '$lib/components/layercake/BarH.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';

  const data = [
    { category: 'A', value: 10 },
    { category: 'B', value: 30 },
    { category: 'C', value: 25 },
    { category: 'D', value: 50 },
    { category: 'E', value: 10 },
    { category: 'F', value: 5 },
  ];

  const xDomain = (domain: [number, number]) => [0, domain[1]];
<\/script>

<Hst.Story
  group="layercake"
  title="BarH"
  layout={{ type: 'grid', width: '100%' }}
>
  <Hst.Variant title="Within chart">
    <div class="layercake">
      <LayerCake
        {data}
        padding={{ left: 18, right: 22 }}
        yScale={scaleBand().padding(0.15)}
        {xDomain}
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
  </Hst.Variant>

  <Hst.Variant title="With bar labels">
    <div class="layercake">
      <LayerCake
        {data}
        padding={{ left: 18, right: 22 }}
        yScale={scaleBand().padding(0.15)}
        {xDomain}
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
  </Hst.Variant>

  <Hst.Variant title="With bar labels at the end">
    <div class="layercake">
      <LayerCake
        {data}
        padding={{ left: 18, right: 22 }}
        yScale={scaleBand().padding(0.15)}
        {xDomain}
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
  </Hst.Variant>
</Hst.Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
`;
export {
  __resolved__virtual_storySource_srcLibComponentsLayercakeBarhStorySvelte as default
};
