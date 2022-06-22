<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Chips from '$shared/Chips.svelte';

  const options = ['Berlin', 'Brandenburg', 'Stadt', 'Land'];
  const complexOptions = [
    { label: 'Berlin', value: 'berlin' },
    { label: 'Brandenburg', value: 'brandenburg' },
    { label: 'Stadt', value: 'city' },
    { label: 'Land', value: 'country' },
  ];

  /** @type {string[]} */
  let selectedValues = [];
  let selectedValuesInitiallySet = ['Berlin', 'Brandenburg'];
</script>

<Meta
  title="Components/Chips"
  component={Chips}
  argTypes={{
    id: {
      // @ts-ignore
      type: { required: true },
    },
    options: {
      // @ts-ignore
      type: { required: true },
    },
    selectedValues: {
      table: {
        defaultValue: { summary: '[]' },
      },
    },
    getOptionValue: {
      table: {
        defaultValue: { summary: '(option) => option' },
      },
    },
    isOptionDisabled: {
      table: {
        defaultValue: { summary: '(option) => false' },
      },
    },
  }}
/>

<Story name="Basic">
  <Chips
    id="my-chips"
    {options}
    label="Wähle eine oder mehrere Regionen:"
    let:option
    bind:selectedValues
  >
    {option}
  </Chips>
  <div class="result">
    Selected values:
    {#if selectedValues.length > 0}
      <i>{selectedValues}</i>
    {/if}
  </div>
</Story>

<Story name="Specify initially selected values">
  <Chips
    id="my-chips"
    {options}
    label="Wähle eine oder mehrere Regionen:"
    let:option
    bind:selectedValues={selectedValuesInitiallySet}
  >
    {option}
  </Chips>
  <div class="result">
    Selected values:
    {#if selectedValuesInitiallySet.length > 0}
      <i>{selectedValuesInitiallySet}</i>
    {/if}
  </div>
</Story>

<Story name="Update option on selection">
  <Chips
    id="my-chips"
    {options}
    label="Wähle eine oder mehrere Regionen:"
    let:option
    let:checked
    bind:selectedValues
  >
    {option}
    {#if checked}
      (checked)
    {/if}
  </Chips>
  <div class="result">
    Selected values:
    {#if selectedValues.length > 0}
      <i>{selectedValues}</i>
    {/if}
  </div>
</Story>

<Story name="Disabled option">
  <Chips
    id="my-chips"
    {options}
    label="Wähle eine oder mehrere Regionen:"
    isOptionDisabled={(option) => option === 'Berlin'}
    let:option
    bind:selectedValues
  >
    {option}
  </Chips>
  <div class="result">
    Selected value:
    {#if selectedValues.length > 0}
      <i>{selectedValues}</i>
    {/if}
  </div>
</Story>

<Story name="Complex options">
  <Chips
    id="my-chips"
    options={complexOptions}
    label="Wähle eine oder mehrere Regionen:"
    getOptionValue={(option) => option.value}
    let:option
    bind:selectedValues
  >
    {option.label}
  </Chips>
  <div class="result">
    Selected values:
    {#if selectedValues.length > 0}
      <i>{selectedValues}</i>
    {/if}
  </div>
</Story>

<Story name="Custom accent color">
  <Chips
    id="my-chips"
    {options}
    colorScheme="purple"
    label="Wähle eine oder mehrere Regionen:"
    let:option
    bind:selectedValues
  >
    {option}
  </Chips>
  <div class="result">
    Selected values:
    {#if selectedValues.length > 0}
      <i>{selectedValues}</i>
    {/if}
  </div>
</Story>

<Story name="Hide label visually">
  <Chips
    id="my-chips"
    {options}
    label="Wähle eine oder mehrere Regionen:"
    hideLabelVisually
    let:option
    bind:selectedValues
  >
    {option}
  </Chips>
  <div class="result">
    Selected values:
    {#if selectedValues.length > 0}
      <i>{selectedValues}</i>
    {/if}
  </div>
</Story>

<Story name="External label via aria-labelledby">
  <div id="select-region-label">Wähle eine oder mehrere Regionen:</div>
  <Chips
    id="my-chips"
    {options}
    aria-labelledby="select-region-label"
    let:option
    bind:selectedValues
  >
    {option}
  </Chips>
  <div class="result">
    Selected values:
    {#if selectedValues.length > 0}
      <i>{selectedValues}</i>
    {/if}
  </div>
</Story>

<style>
  .result {
    margin-top: var(--s-px-5);
    font-size: var(--font-size-sm);
    border-top: 1px dashed var(--c-ui-gray-400);
    padding-top: var(--s-px-1);
  }
</style>
