<h1 class="header">Header</h1>

<p class="teaser">Teaser</p>

<p class="text">Fließtext</p>

<h2 class="chart-title">Grafiktitel</h2>

<p class="chart-description">Beschreibung</p>

<div class="chart-annotation">Annotation</div>

<div class="chart-legend">Legende</div>

<div class="axis-title">Achsentitel</div>

<div class="axis-value">Achsenwerte</div>

<div class="chart-source">Quelle</div>

<style lang="scss">
  .header {
    @include typography(header);
  }

  .teaser {
    @include typography(teaser);
  }

  .text {
    @include typography(text);
  }

  .chart-title {
    @include typography(chart-title);
  }

  .chart-description {
    @include typography(chart-description);
  }

  .chart-annotation {
    @include typography(chart-annotation);
  }

  .chart-legend {
    @include typography(chart-legend);
  }

  .axis-title {
    @include typography(axis-title);
  }

  .axis-value {
    @include typography(axis-value);
  }

  .chart-source {
    @include typography(chart-source);
  }
</style>
