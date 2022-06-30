<script>
  import Tabs from '$comps/shared/Tabs.svelte';
  import TabPanels from '$comps/shared/TabPanels.svelte';

  import {
    cUiAccentBlue,
    cUiAccentPurple,
    cUiAccentYellow,
    cBlue100,
    cPurple100,
    cYellow100,
  } from '$lib/tokens';

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  /** @type {number} */
  let activeIndex;

  /** @param {typeof tabs[0]} tab */
  function getAccentColor(tab) {
    switch (tab) {
      case 'Tab 1':
        return cUiAccentBlue;
      case 'Tab 2':
        return cUiAccentPurple;
      case 'Tab 3':
        return cUiAccentYellow;
    }
    return cUiAccentBlue;
  }

  /** @param {typeof tabs[0]} tab */
  function getLightColor(tab) {
    switch (tab) {
      case 'Tab 1':
        return cBlue100;
      case 'Tab 2':
        return cPurple100;
      case 'Tab 3':
        return cYellow100;
    }
    return cBlue100;
  }
</script>

<Tabs
  id="colored-tabs"
  aria-label="Wähle einen Tab"
  slants={false}
  {tabs}
  isTabDisabled={(tab) => tab === 'Tab 3'}
  customColors={{
    accent: getAccentColor,
    light: getLightColor,
    focus: getAccentColor,
  }}
  let:tab
  bind:activeIndex
>
  {tab}
</Tabs>

<TabPanels id="colored-tabs" {tabs} {activeIndex} let:tab>
  <div class="panel">Panel for {tab}</div>
</TabPanels>

<style lang="scss">
  :global {
    #colored-tabs {
      [role='tab'] {
        background-color: #ffffff;
        border-bottom: 2px solid var(--c-accent);

        &.active {
          color: var(--c-ui-gray-500);
          background-color: var(--c-light);
        }

        &.disabled {
          border-bottom-color: rgba(
            191,
            191,
            191,
            0.3
          ); /* #bfbfbf with 0.3 opacity */
        }
      }
    }
  }

  .panel {
    margin: var(--s-px-2) 0;
    font-size: var(--font-size-sm);
    font-style: italic;
  }
</style>
