<script lang="ts">
  import { LayerCake, Svg } from 'layercake';
  import { chart } from 'friendly-charts';
  import locale from 'friendly-charts/locale/de-DE';
  import { groups } from 'd3-array';

  import Table from '$lib/components/shared/Table.svelte';
  import ChartHeader from '$lib/components/shared/ChartHeader.svelte';
  import ChartFooter from '$lib/components/shared/ChartFooter.svelte';
  import Circle from '$lib/components/layercake/Circle.svelte';
  import AxisX from '$lib/components/layercake/AxisX.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';
  import AxisLabelY from '$lib/components/layercake/AxisLabelY.svelte';
  import AxisLabelX from '$lib/components/layercake/AxisLabelX.svelte';
  import LineH from '$lib/components/layercake/LineH.svelte';
  import LineV from '$lib/components/layercake/LineV.svelte';
  import Group from '$lib/components/layercake/Group.svelte';

  import flatData from './data';
  import * as tokens from '$lib/tokens';

  // padding around chart
  const padding = {
    top: 20,
    right: 0,
    bottom: 35,
    left: 30,
  };

  // radius of circles (min, max)
  const rRange = [2, 8];

  // add some space on both sides of an axis
  const domain = (domain: [number, number]) => [domain[0] - 10, domain[1] + 10];

  // colors
  const colors = {
    A: tokens.cCategoryBlue,
    B: tokens.cCategoryYellow,
  } as const;

  // group data by category
  $: data = groups(flatData, (d) => d.category);
</script>

<div
  use:chart={{
    type: 'line',
    title: '.chart-header__title',
    subtitle: '.chart-header__subtitle',
    locale,
  }}
>
  <ChartHeader>
    Titel
    <svelte:fragment slot="subtitle">Untertitel</svelte:fragment>
  </ChartHeader>

  <div class="layercake">
    <LayerCake
      data={flatData}
      {padding}
      x="x"
      y="y"
      r="r"
      xDomain={domain}
      yDomain={domain}
      {rRange}
    >
      <Svg>
        <!-- y-axis -->
        <AxisY
          label="Y-Achse"
          showGridLines
          showDomainLine={false}
          showTickLines={false}
        />

        <!-- x-axis -->
        <AxisX
          label="X-Achse"
          showGridLines
          showDomainLine={false}
          showTickLines={false}
        />

        <!-- zero lines -->
        <LineH yData={0} class="zero-line" />
        <LineV xData={0} class="zero-line" />

        <!-- axis labels -->
        <AxisLabelY>Y-Achse</AxisLabelY>
        <AxisLabelX>X-Achse</AxisLabelX>

        <!-- data points -->
        {#each data as [category, _data]}
          <Group data={_data} label={category} let:d>
            <Circle
              data={d}
              color={colors[d.category]}
              label="X-Wert: {d.x}, Y-Wert: {d.y}"
            />
          </Group>
        {/each}
      </Svg>
    </LayerCake>
  </div>

  <ChartFooter>Quelle: Ausgedachte Daten</ChartFooter>
</div>

<!-- visually hidden table for accessibility -->
<div class="visually-hidden">
  <Table
    data={flatData}
    columns={[
      { name: 'X-Wert', getValue: (d) => d.x },
      { name: 'Y-Wert', getValue: (d) => d.y },
      { name: 'R-Wert', getValue: (d) => d.r },
      { name: 'Kategorie', getValue: (d) => d.category },
    ]}
    caption="Daten zum Chart: Titel"
  />
</div>

<style lang="scss">
  .layercake {
    height: 400px;
  }
</style>
