<script>
  import { range } from 'd3-array';
  import { line as d3line } from 'd3-shape';

  import Svg from '$comps/shared/Svg.svelte';
  import Arrow from '$comps/shared/BezierArrow.svelte';

  import { px, scaleLinear, translate } from '$lib/utils';
  import * as tokens from '$lib/tokens';

  const data = [
    { month: 1, rain: 30, rainAvg: 9 },
    { month: 2, rain: 25, rainAvg: 8 },
    { month: 3, rain: 1, rainAvg: 2 },
    { month: 4, rain: 27, rainAvg: 14 },
    { month: 5, rain: 27, rainAvg: 13 },
    { month: 6, rain: 61, rainAvg: 17 },
    { month: 7, rain: 42, rainAvg: 11 },
    { month: 8, rain: 54, rainAvg: 22 },
    { month: 9, rain: 103, rainAvg: 8 },
    { month: 10, rain: 23, rainAvg: 4 },
    { month: 11, rain: 26, rainAvg: 4 },
    { month: 12, rain: 63, rainAvg: 8 },
  ];
  const dLast = data[data.length - 1];
  const dHighlight = data[8];

  let width = 0;
  const height = 400;
  const margin = {
    top: tokens.sPx5,
    right: 25,
    bottom: tokens.sPx6,
    left: 25,
  };
  let boundedWidth = 0;
  let boundedHeight = 0;

  $: x = scaleLinear().domain([0, 13]).range([0, boundedWidth]);
  $: y = scaleLinear().domain([0, 100]).range([boundedHeight, 0]);

  const xTicks = range(1, 13);
  const xTickLabels = new Map([
    [1, 'Januar'],
    [12, 'Dezember'],
  ]);
  const xTickLength = tokens.sPx2;
  const xTickLabelPadding = tokens.sPx1;

  const grid = range(0, 112.5, 12.5);
  const yTickLabels = range(0, 125, 25);
  const yTickLabelPadding = tokens.sPx1;

  const summer = [6, 9];

  /** @type {import('d3-shape').Line<typeof data[0]>} */
  $: lineRain = d3line()
    .x((d) => x(d.month))
    .y((d) => y(d.rain));

  /** @type {import('d3-shape').Line<typeof data[0]>} */
  $: lineRainAvg = d3line()
    .x((d) => x(d.month))
    .y((d) => y(d.rainAvg));

  const annotationOffset = [-tokens.sPx6, tokens.sPx6];
  const annotationLength = 110;

  /**
   * @param {number[]} dataPoint
   * @param {number[]} labelPoint
   */
  function computeArrowCoords(dataPoint, labelPoint) {
    const start = labelPoint;
    const end = [dataPoint[0] - tokens.sPx2, dataPoint[1]];

    const xLen = end[0] - start[0];
    const yLen = start[1] - end[1];

    return {
      start,
      end,
      startHandleOffset: [0.05 * xLen, -0.6 * yLen],
      endHandleOffset: [-0.8 * xLen, 0],
    };
  }
</script>

<h3>Diesjähriger Niederschlag im Sommer deutlich höher als üblich</h3>

<p class="description">
  Monatliche Regenmenge in Liter pro Quadratmeter 2021 im Vergleich zum
  Durchschnitt der Jahre 2000 - 2020 in Berlin.
</p>

<div class="chart" bind:clientWidth={width} style:height={px(height)}>
  <Svg
    {width}
    {height}
    {margin}
    bind:boundedWidth
    bind:boundedHeight
    aria-labelledby="svg-title"
    aria-describedby="svg-description"
  >
    <svelte:fragment slot="header">
      <title id="svg-title"> Diagramm mit zwei Linien. </title>
      <desc id="svg-description">
        Die erste Linie zeigt den monatlichen Niederschlag in Liter pro
        Quadratmeter 2021 in Berlin. Die Regenmenge steigt in den Sommermonaten
        2021 deutlich an und erreicht einen Höchststand von 103 Liter pro
        Quadratmeter im September. Das ist deutlich höher als die
        durchschnittliche Regenmenge in den Sommermonaten der letzten zehn
        Jahre. In diesem Zeitraum has es auch in den Sommermonaten
        durchschnittlich nie mehr als 25 Liter pro Quadratmeter geregnet.
      </desc>
    </svelte:fragment>

    <g class="summer-highlight" aria-hidden="true">
      <rect
        x={x(summer[0])}
        y={-margin.top}
        width={x(summer[1]) - x(summer[0])}
        height={boundedHeight + margin.top}
      />
      <text
        x={x(summer[0]) + (x(summer[1]) - x(summer[0])) / 2}
        y={boundedHeight}
        dy={-tokens.sPx2}
      >
        Sommer
      </text>
    </g>

    <g class="axis-y" aria-hidden="true">
      {#each grid as gridValue}
        <g class="tick" transform={translate([0, y(gridValue)])}>
          <line x1={x.range()[0]} x2={x.range()[1]} />
          {#if yTickLabels.includes(gridValue)}
            <text dx={-yTickLabelPadding}>{gridValue}</text>
          {/if}
        </g>
      {/each}

      <text class="label" x={-margin.left} dy={-margin.top}>
        Regen in l/qm
      </text>
    </g>

    <g
      class="axis-x"
      transform={translate([0, boundedHeight])}
      aria-hidden="true"
    >
      <line class="zero-line" x1={x.range()[0]} x2={x.range()[1]} />

      {#each xTicks as tick}
        <g class="tick" transform={translate([x(tick), 0])}>
          <line y2={xTickLength} stroke="green" />
          {#if xTickLabels.has(tick)}
            <text
              dy="1em"
              transform={translate([0, xTickLength + xTickLabelPadding])}
            >
              {xTickLabels.get(tick)}
            </text>
          {/if}
        </g>
      {/each}
    </g>

    <g class="shapes" aria-hidden="true">
      <g class="rain rain-avg">
        <path d={lineRainAvg(data)} />
        <text
          x={x(dLast.month)}
          dx={tokens.sPx2}
          y={y(dLast.rainAvg)}
          dy="-1em"
        >
          2000
          <tspan x={x(dLast.month)} dx={tokens.sPx2} dy="1em">bis</tspan>
          <tspan x={x(dLast.month)} dx={tokens.sPx2} dy="1em"> 2020 </tspan>
        </text>
      </g>
      <g class="rain rain-2021">
        <path d={lineRain(data)} />
        <text x={x(dLast.month)} y={y(dLast.rain)} dx={tokens.sPx2}>
          2021
        </text>
      </g>
    </g>

    <g
      class="annotation"
      transform={translate([
        -annotationLength + annotationOffset[0],
        annotationOffset[1],
      ])}
      aria-hidden="true"
    >
      <text x={x(dHighlight.month)} y={y(dHighlight.rain)}>
        September war der
        <tspan x={x(dHighlight.month)} dy="1.15em"> regenreichste Monat </tspan>
      </text>
    </g>

    <Arrow
      class="arrow"
      {...computeArrowCoords(
        [x(dHighlight.month), y(dHighlight.rain)],
        [
          x(dHighlight.month) + annotationOffset[0] - annotationLength / 4,
          y(dHighlight.rain) + annotationOffset[1] / 2,
        ]
      )}
      color={tokens.cChartAnnotation}
      aria-hidden="true"
    />
  </Svg>
</div>

<div class="source">Quelle</div>

<style lang="scss">
  h3 {
    @include typography(chart-title);
  }

  .description {
    @include typography(chart-description);
  }

  .source {
    @include typography(chart-source);
  }

  .chart {
    --c-accent: var(--c-blue-300);

    font-size: var(--font-size-sm);

    .tick text {
      @include typography(axis-value);
    }

    .label {
      @include typography(axis-title);
    }

    .axis-x {
      .zero-line {
        stroke: var(--c-chart-axis);
      }

      .tick {
        line {
          stroke: var(--c-chart-axis);
        }

        text {
          text-anchor: middle;
        }
      }
    }

    .axis-y {
      .tick {
        line {
          stroke: var(--c-chart-grid);
          stroke-width: 0.5px;
        }

        text {
          text-anchor: end;
          dominant-baseline: middle;
        }
      }

      .label {
        dominant-baseline: hanging;
      }
    }

    .summer-highlight {
      rect {
        fill: var(--c-chart-area);
      }

      text {
        text-anchor: middle;
        font-style: italic;
        fill: var(--c-ui-gray-400);
      }
    }

    .shapes {
      path {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .rain {
        text {
          font-weight: var(--font-weight-bold);
        }
      }

      .rain-2021 {
        path {
          stroke-width: 4;
          stroke: var(--c-accent);
        }

        text {
          dominant-baseline: middle;
          fill: var(--c-accent);
        }
      }

      .rain-avg {
        path {
          stroke-width: 2;
          stroke: var(--c-beige-400);
          stroke-dasharray: 2 4;
        }

        text {
          fill: var(--c-beige-400);
        }
      }
    }

    .annotation {
      text {
        @include typography(chart-annotation);
      }
    }
  }
</style>
