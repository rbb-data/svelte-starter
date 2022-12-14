<script lang="ts">
  /**
   * Chart legend with rbb slants.
   *
   * The rendered markup is composed of:
   *
   * - `.chart-legend`: legend, wrapper element
   * - `.chart-legend__item`: legend item
   * - `.chart-legend__item-label`: Label of a legend item
   *
   * @component
   */

  import Slant from './Slant.svelte';

  type Item = $$Generic;

  export let items: Item[];

  /** returns background color of the slant for a legend item */
  export let getItemColor: (item: Item, i: number) => string;
</script>

<div
  class:chart-legend={true}
  class={$$restProps.class}
  style={$$restProps.style}
>
  {#each items as item, i}
    <div class="chart-legend__item">
      <slot name="shape" {item}>
        <Slant backgroundColor={getItemColor(item, i)} />
      </slot>
      <span class="chart-legend__item-label">
        <slot {item}>{item}</slot>
      </span>
    </div>
  {/each}
</div>

<style lang="scss">
  .chart-legend {
    font-size: var(--font-size-sm);
    line-height: 1;

    &__item {
      display: inline-flex;
      align-items: center;
      margin-bottom: var(--s-px-1);

      &:not(:last-of-type) {
        margin-right: var(--s-px-4);
      }

      &-label {
        margin-left: var(--s-px-1);
      }
    }
  }
</style>
