<script lang="ts">
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
   */

  import { getIndexBefore, getIndexAfter } from './helpers';

  type Tab = $$Generic;

  /** globally unique id, must match the id of the associated TabPanels element */
  export let id: string;

  /** list of tabs */
  export let tabs: Tab[];

  /** visually hidden label */
  export let label: string;

  /** index of the active tab */
  export let activeIndex = 0;

  /** if true, render rbb-like slants */
  export let slants = true;

  /** function that maps a tab to `true` if disabled */
  export let isTabDisabled: (tab: Tab) => boolean = () => false;

  /**
   * function that maps a tab to a classname that will be assigned to the
   * respective tab
   */
  export let getTabClass: (tab: Tab) => string | null = () => null;

  let buttons: HTMLButtonElement[] = [];

  let focusedIndex = activeIndex;

  function handleKeyDown(e: KeyboardEvent) {
    type AllowedKey = 'Home' | 'End' | 'ArrowLeft' | 'ArrowRight';

    const getNextIndex = (keyPressed: AllowedKey) => {
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
    const nextIndex = getNextIndex(e.key as AllowedKey);
    buttons[nextIndex].focus();
    focusedIndex = nextIndex;
  }
</script>

<div
  {id}
  class:tabs={true}
  role="tablist"
  aria-orientation="horizontal"
  aria-label={label}
  class={$$restProps.class}
  style={$$restProps.style}
>
  {#each tabs as tab, i}
    {@const active = i === activeIndex}
    {@const disabled = isTabDisabled(tab)}
    {@const className = getTabClass(tab)}
    {@const slantPosition =
      i === 0 ? 'right' : i === tabs.length - 1 ? 'left' : 'both'}
    <button
      id="{id}--tab-{i}"
      type="button"
      role="tab"
      class="{className || ''} | tabs__tab | reset"
      class:slant={slants}
      class:active
      class:disabled
      data-slant-position={slantPosition}
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

    // remove extra space when using slants
    :global(.tabs__tab.slant + .tabs__tab.slant) {
      margin-left: 0;
    }
  }
</style>
