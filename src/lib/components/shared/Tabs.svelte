<script>
  import press from '$lib/actions/press';
  import * as colors from '$lib/tokens';
  import { capitalize } from '$lib/utils';

  /**
   * unique id, must match the id of the associated TabPanels element
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
  export let activeIndex = 0;

  /**
   * maps to pre-defined colors (dark and light shade)
   *
   * @type {'blue' | 'beige' | 'turquoise' | 'purple' | 'yellow' | 'red'}
   */
  export let accentColor = 'blue';

  /**
   * if given, overwrites the dark shade of `accentColor`
   *
   * @type {string}
   */
  export let customColor = undefined;

  /**
   * if given, overwrites the light shade of `accentColor`
   *
   * @type {string}
   */
  export let customColorLight = undefined;

  /**
   * if given, overwrites the `accentColor` shade that is used for the focus rind
   *
   * @type {string}
   */
  export let customColorFocus = undefined;

  $: color = customColor || colors['cUiAccent' + capitalize(accentColor)];
  $: colorLight = customColorLight || 'transparent';
  $: colorFocus = customColorFocus || color;

  /** @type {HTMLButtonElement[]} */
  let buttons = [];

  function handleKeyDown(e) {
    if (!['Home', 'End', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;

    const getNextIndex = (keyPressed) => {
      switch (keyPressed) {
        case 'Home':
          return 0;
        case 'End':
          return tabs.length - 1;
        case 'ArrowLeft':
          return activeIndex - 1 >= 0 ? activeIndex - 1 : tabs.length - 1;
        case 'ArrowRight':
          return activeIndex + 1 < tabs.length ? activeIndex + 1 : 0;
      }
    };

    const nextIndex = getNextIndex(e.key);
    buttons[nextIndex].focus();
  }
</script>

<div
  role="tablist"
  style:--c-accent={color}
  style:--c-accent-light={colorLight}
  style:--c-accent-focus={colorFocus}
  {...$$restProps}
>
  {#each tabs as tab, i}
    {@const active = i === activeIndex}
    <button
      id="{id}-tab"
      role="tab"
      class="reset"
      aria-controls="{id}-tabpanel"
      aria-selected={active}
      tabindex={active ? 0 : -1}
      bind:this={buttons[i]}
      on:focus={() => (activeIndex = i)}
      on:keydown={handleKeyDown}
      use:press={(e) => e.currentTarget.focus()}
    >
      <slot {tab} {active} />
    </button>
  {/each}
</div>

<style lang="scss">
  [role='tablist'] {
    width: 100%;
    display: flex;
  }

  [role='tab'] {
    flex: 1;
    font-size: var(--font-size-xs);
    padding: var(--s-px-3) var(--s-px-4);
    text-align: center;
    white-space: nowrap;
    cursor: pointer;

    color: var(--c-ui-gray-400);
    font-weight: var(--font-weight-regular);
    border-bottom: 2px solid #bfbfbf;
    background-color: var(--c-accent-light);

    &:focus-visible {
      @include focus(var(--c-accent-focus));
    }

    & + [role='tab'] {
      margin-left: var(--s-px-1);
    }

    &[aria-selected='true'] {
      font-weight: var(--font-weight-bold);
      border-bottom-color: var(--c-accent);
      color: var(--c-ui-gray-500);
    }
  }
</style>
