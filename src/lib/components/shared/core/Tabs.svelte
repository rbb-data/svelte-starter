<script lang="ts">
  import type { Component } from '$lib/types';

  import focus from '$lib/actions/focus';

  // list of tabs (a tab is any svelte component that can be rendered)
  export let tabs: Array<Component>;

  // initial index of the active tab
  export let initialIndex = 0;

  // the index of the active tab
  export let activeIndex = initialIndex;

  function handleKeyDown(e: KeyboardEvent) {
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
      aria-selected={tabIndex === activeIndex}
      tabindex={tabIndex === activeIndex ? 0 : -1}
      on:pointerdown={() => (activeIndex = tabIndex)}
      use:focus={activeIndex === tabIndex}
    >
      <svelte:component this={tab.component} {...tab.props} />
    </li>
  {/each}
</ul>

<style>
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
  }

  li {
    flex: 1;
  }

  li:hover {
    cursor: pointer;
  }
</style>
