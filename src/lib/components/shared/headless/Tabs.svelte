<script>
  /**
   * Renders a list of selectable tabs
   *
   * @component
   */

  import focus from '$lib/actions/focus';

  /**
   * list of tabs
   *
   * @type {any[]}
   */
  export let tabs;

  /** initial index of the active tab */
  export let initialIndex = 0;

  /**
   * index of the active tab
   *
   * @exposed
   */
  export let activeIndex = initialIndex;

  /**
   * if true, minimal styling is applied to highlight the selected tab for
   * debugging purposes; however, this is not recommended for production use
   */
  export let debug = false;

  /** @param {KeyboardEvent} e */
  function handleKeyDown(e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const toLeft = e.key === 'ArrowLeft';

    let nextIndex = toLeft ? activeIndex - 1 : activeIndex + 1;
    if (nextIndex < 0) nextIndex = tabs.length - 1;
    else if (nextIndex >= tabs.length) nextIndex = 0;

    activeIndex = nextIndex;
  }
</script>

<ul class="tabs" role="tablist" on:keydown={handleKeyDown}>
  {#each tabs as tab, tabIndex}
    <li
      role="tab"
      class:active={tabIndex === activeIndex}
      class:highlight={debug}
      aria-selected={tabIndex === activeIndex}
      tabindex={tabIndex === activeIndex ? 0 : -1}
      on:pointerdown={() => (activeIndex = tabIndex)}
      use:focus={tabIndex === activeIndex}
    >
      <slot {tab} active={tabIndex === activeIndex} />
    </li>
  {/each}
</ul>

<style>
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  li {
    display: inline-block;
  }

  li.active.highlight {
    font-weight: bold;
  }

  li:hover {
    cursor: pointer;
  }
</style>
