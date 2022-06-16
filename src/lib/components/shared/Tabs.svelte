<script>
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

<div role="tablist" {...$$restProps}>
  {#each tabs as tab, i}
    {@const isActive = i === activeIndex}
    <button
      type="button"
      id="{id}-tab"
      role="tab"
      class="reset"
      aria-controls="{id}-tabpanel"
      aria-selected={isActive}
      tabindex={isActive ? 0 : -1}
      bind:this={buttons[i]}
      on:focus={() => (activeIndex = i)}
      on:click={(e) => e.currentTarget.focus()}
      on:touchstart|preventDefault={(e) => e.currentTarget.focus()}
      on:keydown={handleKeyDown}
    >
      <slot {tab} />
    </button>
  {/each}
</div>

<style>
  [role='tablist'] {
    width: 100%;
    display: flex;
  }

  [role='tab'] {
    --color: var(--c-gray-500);
    --background-color: var(--c-gray-100);
    --font-weight: var(--font-weight-normal);

    flex: 1;
    font-size: var(--font-size-xs);
    padding: var(--s-px-2) var(--s-px-4);
    text-align: center;
    white-space: nowrap;
    cursor: pointer;

    color: var(--color);
    background-color: var(--background-color);
    font-weight: var(--font-weight);
  }

  [role='tab'] + [role='tab'] {
    margin-left: var(--s-px-1);
  }

  [role='tab'][aria-selected='true'] {
    --font-weight: var(--font-weight-bold);
    --background-color: steelblue;
    --color: white;
  }
</style>
