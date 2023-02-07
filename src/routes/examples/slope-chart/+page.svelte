<script lang="ts">
  import { LayerCake, Svg, Html } from 'layercake';
  import { chart } from 'friendly-charts';
  import locale from 'friendly-charts/locale/de-DE';
  import { scalePoint } from 'd3-scale';

  import Table from '$lib/components/shared/Table.svelte';
  import ChartHeader from '$lib/components/shared/ChartHeader.svelte';
  import ChartFooter from '$lib/components/shared/ChartFooter.svelte';
  import AxisX from '$lib/components/layercake/AxisX.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';
  import AxisLabelY from '$lib/components/layercake/AxisLabelY.svelte';
  import LineV from '$lib/components/layercake/LineV.svelte';

  import { preventOverlap } from '$lib/actions/prevent-overlap';
  import * as tokens from '$lib/tokens';

  import Slope from './Slope.svelte';
  import Label from './Label.svelte';

  import type { D } from './types';

  const data: D[] = [
    { x: new Date(2022, 0, 1), quark: 0, pudding: 0 },
    { x: new Date(2022, 9, 1), quark: 8, pudding: -3 },
  ];

  const paddingY = 10;

  const padding = {
    top: 20,
    right: 60,
    bottom: 22,
    left: 32,
  };

  // the x-scale is a point scale
  const xScale = scalePoint();

  // account for paddingX on x-axis
  const yRange = ({ height }: { width: number; height: number }) => [
    height - paddingY,
    paddingY,
  ];

  // colors
  const colorAccent = tokens.cCategoryBlue;
  const colorMute = tokens.cUiGray400;

  const dateFormatter = new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: 'short',
  });
</script>

<div
  use:chart={{
    type: 'slope',
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
      {data}
      {padding}
      x="x"
      y={['quark', 'pudding']}
      {xScale}
      {yRange}
      let:width
    >
      <Svg>
        <!-- y-axis -->
        <AxisY
          n={5}
          showDomainLine
          showGridLines={false}
          showTickLines
          label="Inflation in %"
        />
        <!-- line on the right-hand side -->
        <LineV class="domain-line" x={width} />

        <!-- y-axis label -->
        <AxisLabelY>Inflation in %</AxisLabelY>

        <!-- x-axis -->
        <AxisX
          showDomainLine={false}
          showTickLines={false}
          label="Monat"
          let:tick
        >
          {dateFormatter.format(tick)}
        </AxisX>

        <!-- slopes -->
        <Slope yIndex={1} color={colorMute} accessor="pudding" />
        <Slope yIndex={0} color={colorAccent} accessor="quark" />
      </Svg>
      <Html>
        <!-- labels -->
        <div use:preventOverlap={{ axis: 'y' }}>
          <Label data={data[data.length - 1]} yIndex={0} color={colorAccent}>
            Quark
          </Label>
          <Label data={data[data.length - 1]} yIndex={1} color={colorMute}>
            Pudding
          </Label>
        </div>
      </Html>
    </LayerCake>
  </div>

  <ChartFooter>Quelle: Ausgedachte Daten</ChartFooter>
</div>

<!-- visually hidden table for accessibility -->
<div class="visually-hidden">
  <Table
    {data}
    columns={[
      { name: 'Produkt', getValue: (_, i) => ['Quark', 'Pudding'][i] },
      {
        name: 'Inflation ' + dateFormatter.format(data[0].x) + ' (in %)',
        getValue: (_, i) => [data[0].quark, data[0].pudding][i],
      },
      {
        name: 'Inflation ' + dateFormatter.format(data[1].x) + ' (in %)',
        getValue: (_, i) => [data[1].quark, data[1].pudding][i],
      },
    ]}
    caption="Daten zum Chart: Chart Titel"
  />
</div>

<style lang="scss">
  .layercake {
    height: 200px;
  }
</style>
