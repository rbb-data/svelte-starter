<script>
  import { Tabs } from '@rbb-data/svelte-starter';

  const tabs = ['Tab #1', 'Tab #2', 'Tab #3'];

  /** @type {number} */
  let activeIndex;
</script>

<div class="wrapper">
  <Tabs {tabs} bind:activeIndex let:tab let:active>
    <span class:active>{tab}</span>
  </Tabs>
</div>

Active: {tabs[activeIndex]}

<style>
  .wrapper :global(.tabs) {
    display: flex;
    gap: 10px;
  }

  .wrapper :global(.tabs li) {
    flex: 1;
    text-align: center;
    background-color: aliceblue;
    border-radius: 0.4rem;
  }

  .wrapper :global(.tabs li.active) {
    outline: 3px solid steelblue;
  }
</style>
