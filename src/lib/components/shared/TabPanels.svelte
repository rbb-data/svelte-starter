<script>
  import * as colors from '$lib/tokens';
  import { capitalize } from '$lib/utils';

  /**
   * unique id, must match the id of the associated Tabs element
   *
   * @type {string}
   */
  export let id;

  /**
   * list of tabs
   *
   * @type {any[]}
   */
  export let tabs;

  /**
   * index of the active tab
   *
   * @type {number}
   */
  export let activeIndex;

  /**
   * maps to pre-defined colors (dark and light shade)
   *
   * @type {'blue' | 'beige' | 'turquoise' | 'purple' | 'yellow' | 'red'}
   */
  export let accentColor = 'blue';

  /**
   * if given, overwrites the `accentColor` shade that is used for the focus ring
   *
   * @type {string}
   */
  export let customColorFocus = undefined;

  $: colorFocus =
    customColorFocus || colors['cUiAccent' + capitalize(accentColor)];
</script>

{#each tabs as tab, i}
  {@const active = i === activeIndex}
  <div
    id="{id}--tabpanel-{i}"
    role="tabpanel"
    aria-labelledby="{id}--tab-{i}"
    aria-expanded={active}
    tabindex={active ? 0 : -1}
    style:--c-accent-focus={colorFocus}
  >
    {#if active}
      <slot {tab} />
    {/if}
  </div>
{/each}

<style lang="scss">
  [role='tabpanel']:focus-visible {
    @include focus(var(--c-accent-focus));
  }
</style>
