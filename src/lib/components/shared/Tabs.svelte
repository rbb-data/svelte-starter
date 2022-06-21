<script>
  /**
   * `<Tabs />` and `<TabPanels />` work together to orchestrate horizontally
   * aligned tabs. This component controls the tabs itself (i.e. the clickable
   * elements rendered as buttons).
   *
   * **Note:** Must be used in conjunction with `<TabPanels />`
   *
   * @component
   */

  import press from '$lib/actions/press';
  import * as colors from '$lib/tokens';
  import { capitalize, hex2rgba } from '$lib/utils';

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
   * maps to pre-defined colors
   *
   * @type {'blue' | 'beige' | 'turquoise' | 'purple' | 'yellow' | 'red'}
   */
  export let accentColor = 'blue';

  /**
   * if given, overwrites the accent color
   *
   * @type {string}
   */
  export let customColor = undefined;

  /**
   * if given, overwrites the default gray (used as background color)
   *
   * @type {string}
   */
  export let customColorLight = undefined;

  /**
   * if given, overwrites the shade that is used for the focus ring
   *
   * @type {string}
   */
  export let customColorFocus = undefined;

  /**
   * function that maps a tab to `true` if disabled
   *
   * @param {(tab: any) => boolean}
   */
  export let isTabDisabled = () => false;

  $: color = customColor || colors['cUiAccent' + capitalize(accentColor)];
  $: colorLight = customColorLight || colors.cUiGray100;
  $: colorFocus = customColorFocus || color;
  $: colorLightRgb = hex2rgba(colorLight);

  /** @type {HTMLButtonElement[]} */
  let buttons = [];

  let focusedIndex = activeIndex;

  function handleKeyDown(e) {
    if (!['Home', 'End', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;

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

    const nextIndex = getNextIndex(e.key);
    buttons[nextIndex].focus();
    focusedIndex = nextIndex;
  }
</script>

<div
  role="tablist"
  aria-orientation="horizontal"
  style:--c-accent={color}
  style:--c-accent-light={colorLight}
  style:--c-accent-focus={colorFocus}
  style:--c-accent-light-r={colorLightRgb[0]}
  style:--c-accent-light-g={colorLightRgb[1]}
  style:--c-accent-light-b={colorLightRgb[2]}
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
      aria-controls="{id}--tabpanel-{i}"
      aria-selected={active}
      aria-disabled={disabled}
      tabindex={active ? 0 : -1}
      bind:this={buttons[i]}
      on:focus={() => {
        if (disabled) return;
        activeIndex = i;
        focusedIndex = activeIndex;
      }}
      on:keydown={handleKeyDown}
      use:press={(e) => {
        if (disabled) return;
        e.currentTarget.focus();
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
    --c-accent-light-transparent: rgba(
      var(--c-accent-light-r),
      var(--c-accent-light-g),
      var(--c-accent-light-b),
      0.3
    );

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
      font-weight: var(--font-weight-regular);
      background-color: var(--c-accent-light);

      &:focus-visible {
        @include focus(var(--c-accent-focus));
      }

      &[aria-selected='true'] {
        font-weight: var(--font-weight-bold);
        background-color: var(--c-accent);
        color: #ffffff;
        z-index: 1;
      }

      &[aria-disabled='true'] {
        cursor: default;
        background-color: var(--c-accent-light-transparent);
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

    /* can't use overflow: hidden here since that would cut off the focus ring;
    instead, two psuedo elements are rendered above the overflowing content on both sides  */

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 12px; /* arbitrary value, depends on the degree of skewing */
      height: calc(
        100% + 8px
      ); /* height plus focus ring on top and bottom (2x 4px) */
      background-color: white;
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
