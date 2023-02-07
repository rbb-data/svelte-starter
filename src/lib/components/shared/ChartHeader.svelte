<!--
  Chart header with a title and optional subtitle.

  The rendered markup is composed of:

  - `.chart-header`: Header group, wrapper element
  - `.chart-header__title`: title
  - `.chart-header__subtitle`: subtitle
-->

<hgroup
  class:chart-header={true}
  class={$$restProps.class}
  style={$$restProps.style}
>
  <h2 class="chart-header__title">
    {#if $$slots.default}
      <slot>Title missing</slot>
    {/if}
    {#if $$slots.title}
      <slot name="title" />
    {/if}
  </h2>

  {#if $$slots.subtitle}
    <p class="chart-header__subtitle">
      <slot name="subtitle" />
    </p>
  {/if}
</hgroup>

<style lang="scss">
  .chart-header {
    line-height: var(--line-height-tight);
    color: var(--c-ui-black);
    margin-bottom: var(--s-rem-4);

    &__title {
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size-base);
      margin-bottom: var(--s-rem-1);
    }

    &__subtitle {
      font-weight: var(--font-weight-semi-bold);
      font-size: var(--font-size-xs);
    }
  }
</style>
