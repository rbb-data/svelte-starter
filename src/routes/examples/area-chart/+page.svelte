<script lang="ts">
  import { LayerCake, Svg } from 'layercake';
  import { chart } from 'friendly-charts';
  import locale from 'friendly-charts/locale/de-DE';

  import Table from '$lib/components/shared/Table.svelte';
  import ChartHeader from '$lib/components/shared/ChartHeader.svelte';
  import ChartFooter from '$lib/components/shared/ChartFooter.svelte';
  import Path from '$lib/components/layercake/Path.svelte';
  import Circle from '$lib/components/layercake/Circle.svelte';
  import AxisX from '$lib/components/layercake/AxisX.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';
  import AxisLabelY from '$lib/components/layercake/AxisLabelY.svelte';
  import AreaY0 from '$lib/components/layercake/AreaY0.svelte';

  const data = [
    { year: 2006, value: 5.91 },
    { year: 2007, value: 4.29 },
    { year: 2008, value: 4.72 },
    { year: 2009, value: 5.38 },
    { year: 2010, value: 4.92 },
    { year: 2011, value: 4.61 },
    { year: 2012, value: 3.62 },
    { year: 2013, value: 5.35 },
    { year: 2014, value: 5.28 },
    { year: 2015, value: 4.63 },
    { year: 2016, value: 4.72 },
  ];

  // padding on both sides of the x-axis
  const paddingX = 20;

  // padding around chart
  const padding = {
    top: 28,
    right: 28,
    bottom: 28,
    left: 30,
  };

  // account for paddingX on x-axis
  const xRange = ({ width }: { width: number; height: number }) => [
    paddingX,
    width - paddingX,
  ];

  // set lower limit of y-axis to 0 and infer upper-limit from data
  const yDomain = (domain: [number, number]) => [0, domain[1]];
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
    Chart Titel
    <svelte:fragment slot="subtitle">Chart Untertitel</svelte:fragment>
  </ChartHeader>

  <div class="layercake">
    <LayerCake {data} x="year" y="value" {padding} {xRange} {yDomain}>
      <Svg>
        <!-- y-axis -->
        <AxisY label="Y-Label" let:tick>
          {#if tick % 1 === 0}
            {tick}
          {/if}
        </AxisY>

        <!-- path and area -->
        <AreaY0 opacity="0.3" />
        <Path id="line" outline="none" label="Line label" />

        <!-- x-axis -->
        <AxisX label="Jahr" />

        <!-- y-axis label -->
        <AxisLabelY>Y-Label</AxisLabelY>

        <!-- invisible dots for accessibility -->
        {#each data as d}
          <Circle
            data={d}
            label="{d.year}, {d.value}"
            parent="line"
            opacity="0"
          />
        {/each}
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
      { name: 'Jahr', getValue: (d) => d.year },
      { name: 'Y-Label', getValue: (d) => d.value },
    ]}
    caption="Daten zum Chart: Chart Titel"
  />
</div>

<style lang="scss">
  .layercake {
    height: 400px;
  }
</style>
