<script lang="ts">
  import { LayerCake, Svg, Html } from 'layercake';
  import { chart } from 'friendly-charts';
  import locale from 'friendly-charts/locale/de-DE';

  import Table from '$lib/components/shared/Table.svelte';
  import ChartHeader from '$lib/components/shared/ChartHeader.svelte';
  import ChartFooter from '$lib/components/shared/ChartFooter.svelte';
  import Path from '$lib/components/layercake/Path.svelte';
  import SvgText from '$lib/components/layercake/SvgText.svelte';
  import HtmlText from '$lib/components/layercake/HtmlText.svelte';
  import RectV from '$lib/components/layercake/RectV.svelte';
  import Circle from '$lib/components/layercake/Circle.svelte';
  import AxisX from '$lib/components/layercake/AxisX.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';

  import * as tokens from '$lib/tokens';

  const data = [
    { month: 1, rain: 30, rainAvg: 9, label: 'Januar' },
    { month: 2, rain: 25, rainAvg: 8, label: 'Februar' },
    { month: 3, rain: 1, rainAvg: 2, label: 'März' },
    { month: 4, rain: 27, rainAvg: 14, label: 'April' },
    { month: 5, rain: 27, rainAvg: 13, label: 'Mai' },
    { month: 6, rain: 61, rainAvg: 17, label: 'Juni' },
    { month: 7, rain: 42, rainAvg: 11, label: 'Juli' },
    { month: 8, rain: 54, rainAvg: 22, label: 'August' },
    { month: 9, rain: 103, rainAvg: 8, label: 'September' },
    { month: 10, rain: 23, rainAvg: 4, label: 'Oktober' },
    { month: 11, rain: 26, rainAvg: 4, label: 'November' },
    { month: 12, rain: 63, rainAvg: 8, label: 'Dezember' },
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

  // colors
  const colorAccent = tokens.cUiAccentBlue;
  const colorMute = tokens.cUiGray400;
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
    Diesjähriger Niederschlag im Sommer deutlich höher als üblich
    <svelte:fragment slot="subtitle">
      Monatliche Regenmenge in Liter pro Quadratmeter 2021 im Vergleich zum
      Durchschnitt der Jahre 2000 - 2020 in Berlin.
    </svelte:fragment>
  </ChartHeader>

  <div class="layercake">
    <LayerCake
      {data}
      {padding}
      x="month"
      y={['rain', 'rainAvg']}
      {yDomain}
      {xRange}
      let:height
    >
      <Svg>
        <!-- highlight summer months -->
        <RectV data={[data[6], data[9]]} height={height + padding.top / 2} />
        <SvgText
          class="annotation"
          data={{ month: 8.5, rain: 0 }}
          xAlign="center"
          yOffset={-6}
          color="var(--c-ui-gray-400)"
          outline="none"
        >
          Sommer
        </SvgText>

        <!-- y-axis -->
        <AxisY label="Regen in Liter pro Quadratmeter" let:tick>
          {#if tick % 20 === 0}
            {tick}
          {/if}
        </AxisY>

        <!-- x-axis -->
        <AxisX label="Monat" let:tick>
          {#if tick === 1}
            Januar
          {:else if tick === 12}
            Dezember
          {/if}
        </AxisX>

        <!-- y-axis label -->
        <SvgText
          class="label"
          xOffset={-padding.left}
          yOffset={-padding.top}
          xAlign="left"
          yAlign="top"
        >
          Regen in l/qm
        </SvgText>

        <!-- lines -->
        <Path
          id="line-2000-2020"
          yIndex={1}
          color={colorMute}
          width={2}
          outline="none"
          stroke-dasharray="2 4"
          label="2000 bis 2020"
          group
        />
        <Path id="line-2021" label="2021" group />

        <!-- invisible dots for accessibility -->
        {#each data as d}
          <Circle
            data={d}
            color={colorAccent}
            label="{d.label}. {d.rain} Liter pro Quadratmeter Regen"
            parent="line-2021"
            r="0"
          />
          <Circle
            data={d}
            yIndex={1}
            color={colorMute}
            label="{d.label}. {d.rainAvg} Liter pro Quadratmeter Regen"
            parent="line-2000-2020"
            r="0"
          />
        {/each}
      </Svg>
      <Html>
        <!-- line labels -->
        <HtmlText
          class="line-label"
          data={data[data.length - 1]}
          yAlign="center"
          xOffset={8}
          color={colorAccent}
        >
          2021
        </HtmlText>
        <HtmlText
          data={data[data.length - 1]}
          yIndex={1}
          yAlign="center"
          xOffset={8}
          color={colorMute}
        >
          2000 bis 2020
        </HtmlText>
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
      { name: 'Monat', getValue: (d) => d.label },
      { name: 'Regenmenge 2021 (in l/qm)', getValue: (d) => d.rain },
      { name: 'Regenmenge 2000-2020 (in l/qm)', getValue: (d) => d.rainAvg },
    ]}
    caption="Daten zum Chart: Monatliche Regenmenge in Liter pro Quadratmeter in Berlin"
  />
</div>

<style lang="scss">
  .layercake {
    height: 400px;
  }
</style>
