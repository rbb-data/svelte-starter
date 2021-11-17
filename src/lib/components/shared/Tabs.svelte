<script lang="ts">
  export let tabs = [];
  export let activeIndex = 0;
</script>

<ul class="tabs">
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
