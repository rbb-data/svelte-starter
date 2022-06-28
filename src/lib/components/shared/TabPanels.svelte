<script>
  /**
   * `<Tabs />` and `<TabPanels />` work together to orchestrate horizontally
   * aligned tabs. This component controls the _tab panels_ (i.e. the content
   * that is associated with a tab).
   *
   * **Note:** Must be used in conjunction with `<Tabs />`
   *
   * **Note:** The focus ring is implemented via `box-shadow`.
   *
   * @component
   */

  import { onMount } from 'svelte';

  import * as colors from '$lib/tokens';
  import { capitalize } from '$lib/utils';

  /**
   * globally unique id, must match the id of the associated Tabs element
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
   * sets CSS variable `--c-focus` to a pre-defined color
   *
   * @type {'blue' | 'beige' | 'turquoise' | 'purple' | 'yellow' | 'red'}
   */
  export let colorScheme = 'blue';

  /**
   * sets CSS variables `--c-focus`
   *
   * @type {{ focus?: string | ((tab: any) => string) }}
   */
  export let customColors = {};

  /** @type {(entry: string | ((tab: any) => string), tab: any) => string} */
  const getColor = (entry, tab) => {
    // @ts-ignore
    if (!entry) return colors['cUiAccent' + capitalize(colorScheme)];
    if (typeof entry === 'string') return entry;
    if (typeof entry === 'function') return entry(tab);
  };

  onMount(() => {
    if (!document.getElementById(id)) {
      console.warn(
        'rbb-data/svelte-starter: The id of <TabPanel {id} /> does not match the id of <Tab />.'
      );
    }
  });
</script>

{#each tabs as tab, i}
  {@const active = i === activeIndex}
  <div
    id="{id}--tabpanel-{i}"
    role="tabpanel"
    aria-labelledby="{id}--tab-{i}"
    aria-expanded={active}
    tabindex={active ? 0 : -1}
    style:--c-accent-focus={getColor(customColors.focus, tab)}
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
