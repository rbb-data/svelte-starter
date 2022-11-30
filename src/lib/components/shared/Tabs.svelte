<script>
  /**
   * `<Tabs />` and `<TabPanels />` work together to orchestrate horizontally
   * aligned tabs. This component controls the tabs itself (i.e. the clickable
   * elements rendered as buttons).
   *
   * CSS variables:
   *
   * - `--ui-color-accent`: accent color _(default: blue)_
   * - `--ui-color-secondary`: secondary color _(default: light gray)_
   *
   * The rendered markup is composed of:
   *
   * - `.tabs`: assigned the given id
   * - `.tabs__tab`: with classes `.active` and `.disabled` applied appropriately
   *
   * **Note:** Must be used in conjunction with `<TabPanels />`.
   *
   * **Note:** The focus ring is implemented via `box-shadow`.
   *
   * **Note:** Slants make the tabs overflow but `overflow: hidden` can't be
   * used on the container element as that would cut off the focus ring.
   * Instead, pseudo elements are rendered that hide the overflowing content.
   * Their color defaults to white but can be overwritten by setting the CSS
   * variable `--c-bg`.
   *
   * @component
   */

  import { getIndexBefore, getIndexAfter } from './helpers';

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
   * visually hidden label
   *
   * @type {string}
   */
  export let label;

  /**
   * index of the active tab
   *
   * @type {number}
   */
  export let activeIndex = 0;

  /** if true, render rbb-like slants */
  export let slants = true;

  /**
   * function that maps a tab to `true` if disabled
   *
   * @type {(tab: any) => boolean}
   */
  export let isTabDisabled = () => false;

  /**
   * function that maps a tab to a classname that will be assigned to the
   * respective tab
   *
   * @type {(tab: any) => string | null}
   */
  export let getTabClass = () => null;

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
          return getIndexBefore(focusedIndex, tabs.length, { circular: true });
        case 'ArrowRight':
          return getIndexAfter(focusedIndex, tabs.length, { circular: true });
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
  class:tabs={true}
  class:slants
  role="tablist"
  aria-orientation="horizontal"
  aria-label={label}
  class={$$restProps.class}
>
  {#each tabs as tab, i}
    {@const active = i === activeIndex}
    {@const disabled = isTabDisabled(tab)}
    {@const className = getTabClass(tab)}
    <button
      id="{id}--tab-{i}"
      type="button"
      role="tab"
      class="{className || ''} [ tabs__tab ] [ reset ]"
      class:active
      class:disabled
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
      on:click={(e) => {
        if (disabled) return;
        /** @type {HTMLButtonElement} */ (e.currentTarget).focus();
      }}
    >
      <div>
        <slot {tab} {active}>
          {tab}
        </slot>
      </div>
    </button>
  {/each}
</div>

<style lang="scss">
  .tabs {
    --_ui-color-accent: var(--ui-color-accent, var(--c-ui-accent-blue));
    --_ui-color-secondary: var(--ui-color-secondary, var(--c-ui-gray-100));

    --c-focus: var(--_ui-color-accent);

    width: 100%;
    display: flex;

    &__tab {
      --_ui-color-accent: var(--ui-color-accent, var(--c-ui-accent-blue));
      --_ui-color-secondary: var(--ui-color-secondary, var(--c-ui-gray-100));

      --c-focus: var(--_ui-color-accent);

      flex: 1;
      font-size: var(--font-size-xs);
      padding: var(--s-px-3) var(--s-px-4);
      text-align: center;
      white-space: nowrap;

      color: var(--c-ui-gray-400);
      font-weight: var(--font-weight-semi-bold);
      background-color: var(--_ui-color-secondary);

      &.active {
        font-weight: var(--font-weight-bold);
        background-color: var(--_ui-color-accent);
        color: #ffffff;
        z-index: 1;
      }

      &.disabled {
        opacity: 0.3;
      }
    }

    &__tab + &__tab {
      margin-left: var(--s-px-1);
    }
  }

  .slants {
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
      background-color: var(--c-bg);
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

    .tabs__tab {
      transform: skew(-10deg);
      transform-origin: center;

      &:first-child {
        transform-origin: top;
      }

      &:last-child {
        transform-origin: bottom;
      }

      div {
        /* unskew text content */
        transform: skew(10deg);
        display: inline-block;
      }
    }

    .tabs__tab + .tabs__tab {
      margin-left: 0;
    }
  }
</style>
