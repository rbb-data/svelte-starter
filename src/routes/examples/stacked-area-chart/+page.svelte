<script lang="ts">
  import { LayerCake, Svg, flatten } from 'layercake';
  import { chart } from 'friendly-charts';
  import locale from 'friendly-charts/locale/de-DE';
  import { stack as d3stack } from 'd3-shape';

  import ChartHeader from '$lib/components/shared/ChartHeader.svelte';
  import ChartFooter from '$lib/components/shared/ChartFooter.svelte';
  import Table from '$lib/components/shared/Table.svelte';
  import AxisX from '$lib/components/layercake/AxisX.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';
  import AreaY from '$lib/components/layercake/AreaY.svelte';
  import SvgText from '$lib/components/layercake/SvgText.svelte';
  import LineV from '$lib/components/layercake/LineV.svelte';

  import * as tokens from '$lib/tokens';
  import { getHighestContrastColor } from '$lib/utils';

  const fruits = ['apples', 'figs', 'oranges'] as const;
  type Fruit = typeof fruits[number];

  const data = [
    { year: 2012, apples: 1, figs: 5, oranges: 2 },
    { year: 2013, apples: 5, figs: 7, oranges: 7 },
    { year: 2014, apples: 10, figs: 17, oranges: 14 },
    { year: 2015, apples: 16, figs: 25, oranges: 12 },
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
    right: 16,
    bottom: 24,
    left: 22,
  };

  // stack data
  const stack = d3stack<typeof data[number], Fruit>().keys(fruits);
  const stackedData = stack(data);

  // x-accessor (category label)
  const x = (d: typeof stackedData[number][number]) => d.data.year;
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
      {x}
      y={[0, 1]}
      flatData={flatten(stackedData)}
      data={stackedData}
      let:width
    >
      <Svg>
        <!-- x-axis -->
        <AxisX
          label="Jahr"
          ticks={data.map((d) => d.year)}
          showDomainLine={false}
        />

        <!-- y-axis -->
        <AxisY label="Anzahl Früchte" n={5} />

        {#each stackedData as d}
          {@const fruit = d.key}
          {@const lastD = d[d.length - 1]}
          {@const color = colors[fruit]}
          {@const contrastColor = getHighestContrastColor(color)}

          <g class="g-fruit">
            <!-- area -->
            <AreaY
              data={d}
              {color}
              opacity="0.8"
              label={labels[fruit]}
              id="area-{fruit}"
            />

            {#each d as _d}
              {@const [lower, upper] = _d}

              <!-- invisible lines for accessibility -->
              <LineV
                xData={_d.data.year}
                yData={[lower, upper]}
                color="black"
                width={2}
                opacity={0}
                parent="area-{fruit}"
                label="{_d.data.year}, {_d.data[fruit]}"
              />
            {/each}

            <!-- label on top of area -->
            <SvgText
              x={width}
              yData={(lastD[1] + lastD[0]) / 2}
              xAlign="right"
              yAlign="center"
              xOffset={-4}
              outline="none"
              color={contrastColor}
            >
              {labels[fruit]}
            </SvgText>
          </g>
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

    .g-fruit {
      --font-weight: var(--font-weight-semi-bold);
    }
  }
</style>
