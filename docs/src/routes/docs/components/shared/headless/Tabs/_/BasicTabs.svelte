<script>
  import { Tabs } from '@rbb-data/svelte-starter';

  const tabs = ['Tab #1', 'Tab #2', 'Tab #3'];
</script>

<Tabs {tabs} let:tab let:active>
  <span class:active>{tab}</span>
</Tabs>

<style>
  .active {
    font-weight: bold;
  }
</style>
