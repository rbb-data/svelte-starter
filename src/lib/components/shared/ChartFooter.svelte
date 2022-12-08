<!--
  Chart footer.

  The rendered markup is composed of:

  - `.chart-footer`: footer

  @component
-->

<div
  class:chart-footer={true}
  class={$$restProps.class}
  style={$$restProps.style}
>
  <slot>Footer missing</slot>
</div>

<style>
  .chart-footer {
    font-weight: var(--font-weight-semi-bold);
    font-size: var(--font-size-xs);
    line-height: var(--line-height-tight);
    color: var(--c-ui-gray-300);
    margin-top: var(--s-rem-3);
  }
</style>
