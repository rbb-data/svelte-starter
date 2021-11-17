<script lang="ts">
  export let tabs = [];
  export let activeIndex = 0;

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
