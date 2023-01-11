<script lang="ts">
  import { LayerCake, Svg, flatten } from 'layercake';
  import { chart } from 'friendly-charts';
  import locale from 'friendly-charts/locale/de-DE';
  import { scaleBand } from 'd3-scale';
  import { stack as d3stack } from 'd3-shape';

  import ChartHeader from '$lib/components/shared/ChartHeader.svelte';
  import ChartFooter from '$lib/components/shared/ChartFooter.svelte';
  import Table from '$lib/components/shared/Table.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';
  import BarH from '$lib/components/layercake/BarH.svelte';
  import Group from '$lib/components/layercake/Group.svelte';

  import * as tokens from '$lib/tokens';

  const fruits = ['apples', 'figs', 'oranges'] as const;
  type Fruit = typeof fruits[number];

  const data = [
    { label: 'A', apples: 13, figs: 5, oranges: 23 },
    { label: 'B', apples: 17, figs: 12, oranges: 25 },
    { label: 'C', apples: 11, figs: 2, oranges: 14 },
    { label: 'D', apples: 16, figs: 25, oranges: 4 },
    { label: 'E', apples: 35, figs: 2, oranges: 14 },
  ];

  // fruit labels
  const labels = {
    apples: 'Äpfel',
    figs: 'Feigen',
    oranges: 'Orangen',
  } as const;

  // fruit colors
  const colors = {
    apples: tokens.cCategoryTurquoise,
    figs: tokens.cPurple200,
    oranges: tokens.cYellow200,
  } as const;

  // padding around chart
  const padding = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 85,
  };

  // stack data
  const stack = d3stack<typeof data[number], Fruit>().keys(fruits);
  const stackedData = stack(data);

  // y-accessor (category label)
  const y = (d: typeof stackedData[number][number]) => d.data.label;
</script>

<div
  use:chart={{
    type: 'bar',
    title: '.chart-header__title',
    subtitle: '.chart-header__subtitle',
    locale,
  }}
>
  <ChartHeader>
    Chart Titel
    <svelte:fragment slot="subtitle">Chart Untertitel</svelte:fragment>
  </ChartHeader>

  <div class="layercake">
    <LayerCake
      {padding}
      x={[0, 1]}
      {y}
      yScale={scaleBand().padding(0.05)}
      data={stackedData}
      flatData={flatten(stackedData)}
    >
      <Svg>
        <!-- bars -->
        {#each stackedData as _data}
          {@const fruit = _data.key}
          <Group data={_data} label={labels[fruit]} let:d>
            <BarH
              data={d}
              color={colors[fruit]}
              label="Kategorie {y(d)}, {d.data[fruit]} {labels[fruit]}"
            >
              {d.data[fruit]}
            </BarH>
          </Group>
        {/each}

        <!-- y-axis -->
        <AxisY
          label="Y-Achse"
          showDomainLine
          style="--chart-color-mute: var(--c-ui-gray-200)"
          let:tick
        >
          Kategorie {tick}
        </AxisY>
      </Svg>
    </LayerCake>
  </div>

  <ChartFooter>Quelle: Ausgedachte Daten</ChartFooter>
</div>

<!-- visually hidden table for accessibility -->
<div class="visually-hidden">
  <Table
    {data}
    columns={[
      { name: 'Kategorie', getValue: (d) => d.label },
      { name: labels.apples, getValue: (d) => d.apples },
      { name: labels.figs, getValue: (d) => d.figs },
      { name: labels.oranges, getValue: (d) => d.oranges },
    ]}
    caption="Daten zum Chart: Chart Titel"
  />
</div>

<style lang="scss">
  .layercake {
    height: 250px;
  }
</style>
