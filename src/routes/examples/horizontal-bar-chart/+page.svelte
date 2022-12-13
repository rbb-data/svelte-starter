<script lang="ts">
  import { LayerCake, Svg } from 'layercake';
  import { chart } from 'friendly-charts';
  import locale from 'friendly-charts/locale/de-DE';
  import { scaleBand } from 'd3-scale';

  import ChartHeader from '$lib/components/shared/ChartHeader.svelte';
  import ChartFooter from '$lib/components/shared/ChartFooter.svelte';
  import Table from '$lib/components/shared/Table.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';
  import BarH from '$lib/components/layercake/BarH.svelte';

  import * as tokens from '$lib/tokens';
  import { format } from '$lib/utils';

  const data = [
    { label: 'A', value: 0.26 },
    { label: 'B', value: 0.24 },
    { label: 'C', value: 0.17 },
    { label: 'D', value: 0.11 },
    { label: 'E', value: 0.06 },
    { label: 'F', value: 0.1 },
    { label: 'G', value: 0.06 },
  ] as { label: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'; value: number }[];

  // padding around chart
  const padding = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 85,
  };

  // bars are plotted along the y-axis
  const yScale = scaleBand().padding(0.15);

  // set lower limit of the x-axis to 0
  const xDomain = (domain: [number, number]) => [0, domain[1]];

  // colors
  const colors = {
    A: tokens.cCategoryTurquoise,
    B: tokens.cPurple200,
    C: tokens.cYellow200,
    D: tokens.cBeige200,
    E: tokens.cCategoryRed,
    F: tokens.cBlue500,
    G: tokens.cCategoryGreen,
  } as const;
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
    <LayerCake {data} {padding} {yScale} {xDomain} x="value" y="label">
      <Svg>
        <!-- bars -->
        {#each data as d}
          {@const formattedValue = format(d.value * 100) + '%'}

          <BarH
            data={d}
            color={colors[d.label]}
            label="Kategorie {d.label}, {formattedValue}"
          >
            {formattedValue}
          </BarH>
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
      { name: 'Wert', getValue: (d) => d.value },
    ]}
    caption="Daten zum Chart: Titel"
  />
</div>

<style lang="scss">
  .layercake {
    height: 250px;
  }
</style>
