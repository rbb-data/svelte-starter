<script lang="ts">
  import type { Component } from '$lib/types';

  // list of tabs (a tab is any svelte component that can be rendered)
  export let tabs: Array<Component>;

  // initial index of the active tab
  export let initialIndex = 0;

  // the index of the active tab
  export let activeIndex = initialIndex;

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const toLeft = e.key === 'ArrowLeft';
    if (
      (toLeft && activeIndex === 0) ||
      (!toLeft && activeIndex === tabs.length - 1)
    )
      return;
    toLeft ? activeIndex-- : activeIndex++;
  }
</script>

<ul class="tabs" tabindex="0" on:keydown={handleKeyDown}>
  {#each tabs as tab, tabIndex}
    <li
      class:active={tabIndex === activeIndex}
      on:pointerdown={() => (activeIndex = tabIndex)}
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
