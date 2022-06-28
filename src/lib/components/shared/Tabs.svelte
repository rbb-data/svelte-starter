<script>
  /**
   * `<Tabs />` and `<TabPanels />` work together to orchestrate horizontally
   * aligned tabs. This component controls the tabs itself (i.e. the clickable
   * elements rendered as buttons).
   *
   * **Note:** Must be used in conjunction with `<TabPanels />`
   *
   * The rendered markup is composed of:
   *
   * - `div[role="tablist"]`: assigned the given id
   * - `div[role="tablist"] button[role="tab"]`: with classes `.active` and
   *   `.disabled` applied appropriately
   *
   * **Note:** The focus ring is implemented via `box-shadow`.
   *
   * @component
   */

  import press from '$lib/actions/press';
  import * as colors from '$lib/tokens';
  import { capitalize, computeTransparentColor } from '$lib/utils';

  /**
   * globally unique id, must match the id of the associated TabPanels element
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

  /** if true, render rbb-like slants */
  export let slants = true;

  /**
   * sets CSS variables `--c-accent`, `--c-light` and `--c-focus` to pre-defined colors
   *
   * @type {'blue' | 'beige' | 'turquoise' | 'purple' | 'yellow' | 'red'}
   */
  export let colorScheme = 'blue';

  /**
   * sets CSS variables `--c-accent`, `--c-light` and `--c-focus`
   *
   * @type {{
   *   accent?: string | ((tab: any) => string);
   *   light?: string | ((tab: any) => string);
   *   focus?: string | ((tab: any) => string);
   * }}
   */
  export let customColors = {};

  /**
   * function that maps a tab to `true` if disabled
   *
   * @type {(tab: any) => boolean}
   */
  export let isTabDisabled = () => false;

  /** @param {string | ((tab: any) => string)} entry */
  const getColor = (entry) => typeof entry === 'string' && entry;

  /**
   * @param {string | ((tab: any) => string)} entry
   * @param {any} tab
   */
  const getTabColor = (entry, tab) =>
    (typeof entry === 'function' && entry(tab)) || null;

  $: color =
    getColor(customColors.accent) ||
    // @ts-ignore
    colors['cUiAccent' + capitalize(colorScheme)];
  $: colorLight = getColor(customColors.light) || colors.cUiGray100;
  $: colorFocus = getColor(customColors.focus) || color;

  /** @type {HTMLButtonElement[]} */
  let buttons = [];

  let focusedIndex = activeIndex;

  /** @param {KeyboardEvent} e */
  function handleKeyDown(e) {
    /** @typedef {'Home' | 'End' | 'ArrowLeft' | 'ArrowRight'} AllowedKey */

    /** @param {AllowedKey} keyPressed */
    const getNextIndex = (keyPressed) => {
      switch (keyPressed) {
        case 'Home':
          return 0;
        case 'End':
          return tabs.length - 1;
        case 'ArrowLeft':
          return focusedIndex - 1 >= 0 ? focusedIndex - 1 : tabs.length - 1;
        case 'ArrowRight':
          return focusedIndex + 1 < tabs.length ? focusedIndex + 1 : 0;
      }
    };

    if (!['Home', 'End', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    const nextIndex = getNextIndex(/** @type {AllowedKey} */ (e.key));
    buttons[nextIndex].focus();
    focusedIndex = nextIndex;
  }
</script>

<div
  {id}
  role="tablist"
  aria-orientation="horizontal"
  style:--c-accent={color}
  style:--c-light={colorLight}
  style:--c-focus={colorFocus}
  style:--c-light-transparent={computeTransparentColor(colorLight)}
  class:slants
  {...$$restProps}
>
  {#each tabs as tab, i}
    {@const active = i === activeIndex}
    {@const disabled = isTabDisabled(tab)}
    <button
      id="{id}--tab-{i}"
      role="tab"
      class="reset"
      class:active
      class:disabled
      aria-controls="{id}--tabpanel-{i}"
      aria-selected={active}
      aria-disabled={disabled}
      tabindex={active ? 0 : -1}
      style:--c-accent={getTabColor(customColors.accent, tab)}
      style:--c-light={getTabColor(customColors.light, tab)}
      style:--c-focus={getTabColor(customColors.focus, tab)}
      style:--c-light-transparent={computeTransparentColor(
        getTabColor(customColors.light, tab)
      )}
      bind:this={buttons[i]}
      on:focus={() => {
        if (disabled) return;
        activeIndex = i;
        focusedIndex = activeIndex;
      }}
      on:keydown={handleKeyDown}
      use:press={(e) => {
        if (disabled) return;
        /** @type {HTMLButtonElement} */ (e.currentTarget).focus();
      }}
    >
      <span>
        <slot {tab} {active} />
      </span>
    </button>
  {/each}
</div>

<style lang="scss">
  [role='tablist'] {
    width: 100%;
    display: flex;

    [role='tab'] {
      flex: 1;
      font-size: var(--font-size-xs);
      padding: var(--s-px-3) var(--s-px-4);
      text-align: center;
      white-space: nowrap;
      cursor: pointer;

      color: var(--c-ui-gray-400);
      font-weight: var(--font-weight-semi-bold);
      background-color: var(--c-light);

      &:focus-visible {
        @include focus(var(--c-focus));
      }

      &.active {
        font-weight: var(--font-weight-bold);
        background-color: var(--c-accent);
        color: #ffffff;
        z-index: 1;
      }

      &.disabled {
        cursor: default;
        background-color: var(--c-light-transparent);
        color: rgba(
          89,
          89,
          89,
          0.3
        ); /* var(--c-ui-gray-400) with 0.3 opacity */
      }
    }
  }

  [role='tablist'].slants {
    position: relative;

    /* can't use `overflow: hidden` here since that would cut off the focus ring;
    instead, two pseudo elements are rendered above the overflowing content on both sides  */

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 12px; /* arbitrary value, depends on the degree of skewing */
      height: calc(
        100% + 8px
      ); /* height plus focus ring on top and bottom (2*4px) */
      background-color: #ffffff;
      z-index: 2;
    }

    &::before {
      left: 0;
      transform: translate(-100%, -4px);
    }

    &::after {
      right: 0;
      transform: translate(100%, -4px);
    }

    [role='tab'] {
      transform: skew(-10deg);
      transform-origin: center;

      &:first-child {
        transform-origin: top;
      }

      &:last-child {
        transform-origin: bottom;
      }

      span {
        /* unskew text content */
        transform: skew(10deg);
        display: inline-block;
      }
    }
  }

  [role='tablist']:not(.slants) {
    [role='tab'] + [role='tab'] {
      margin-left: var(--s-px-1);
    }
  }
</style>
