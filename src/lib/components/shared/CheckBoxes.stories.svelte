<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import CheckBoxes from '$shared/CheckBoxes.svelte';

  const options = ['Berlin', 'Brandenburg', 'Stadt', 'Land'];
  const complexOptions = [
    { label: 'Berlin', value: 'berlin' },
    { label: 'Brandenburg', value: 'brandenburg' },
    { label: 'Stadt', value: 'city' },
    { label: 'Land', value: 'country' },
  ];

  let selectedValues = [];
  let selectedValuesInitiallySet = ['Berlin', 'Brandenburg'];
</script>

<Meta
  title="Components/CheckBoxes"
  component={CheckBoxes}
  argTypes={{
    id: {
      type: { required: true },
    },
    options: {
      type: { required: true },
    },
    selectedValues: {
      table: {
        defaultValue: { summary: '[]' },
      },
    },
    getOptionValue: {
      table: {
        type: { summary: '(option: any) => any' },
        defaultValue: { summary: '(option) => option' },
      },
    },
    isOptionDisabled: {
      table: {
        type: { summary: '(option: any) => boolean' },
        defaultValue: { summary: '(option) => false' },
      },
    },
  }}
/>

<Story name="Basic">
  <CheckBoxes
    id="my-check-boxes"
    {options}
    label="Wähle eine oder mehrere Regionen:"
    let:option
    bind:selectedValues
  >
    {option}
  </CheckBoxes>
  <div class="result">
    Selected values:
    {#if selectedValues.length > 0}
      <i>{selectedValues}</i>
    {/if}
  </div>
</Story>

<Story name="Specify initially selected values">
  <CheckBoxes
    id="my-check-boxes"
    {options}
    label="Wähle eine oder mehrere Regionen:"
    let:option
    bind:selectedValues={selectedValuesInitiallySet}
  >
    {option}
  </CheckBoxes>
  <div class="result">
    Selected values:
    {#if selectedValuesInitiallySet.length > 0}
      <i>{selectedValuesInitiallySet}</i>
    {/if}
  </div>
</Story>

<Story name="Update option on selection">
  <CheckBoxes
    id="my-check-boxes"
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
  </CheckBoxes>
  <div class="result">
    Selected values:
    {#if selectedValues.length > 0}
      <i>{selectedValues}</i>
    {/if}
  </div>
</Story>

<Story name="Disabled option">
  <CheckBoxes
    id="my-check-boxes"
    {options}
    label="Wähle eine oder mehrere Regionen:"
    isOptionDisabled={(option) => option === 'Berlin'}
    let:option
    bind:selectedValues
  >
    {option}
  </CheckBoxes>
  <div class="result">
    Selected value:
    {#if selectedValues.length > 0}
      <i>{selectedValues}</i>
    {/if}
  </div>
</Story>

<Story name="Complex options">
  <CheckBoxes
    id="my-check-boxes"
    options={complexOptions}
    label="Wähle eine oder mehrere Regionen:"
    getOptionValue={(option) => option.value}
    let:option
    bind:selectedValues
  >
    {option.label}
  </CheckBoxes>
  <div class="result">
    Selected values:
    {#if selectedValues.length > 0}
      <i>{selectedValues}</i>
    {/if}
  </div>
</Story>

<Story name="Custom accent color">
  <CheckBoxes
    id="my-check-boxes"
    {options}
    colorScheme="beige"
    label="Wähle eine oder mehrere Regionen:"
    let:option
    bind:selectedValues
  >
    {option}
  </CheckBoxes>
  <div class="result">
    Selected values:
    {#if selectedValues.length > 0}
      <i>{selectedValues}</i>
    {/if}
  </div>
</Story>

<Story name="Hide label visually">
  <CheckBoxes
    id="my-check-boxes"
    {options}
    label="Wähle eine oder mehrere Regionen:"
    hideLabelVisually
    let:option
    bind:selectedValues
  >
    {option}
  </CheckBoxes>
  <div class="result">
    Selected values:
    {#if selectedValues.length > 0}
      <i>{selectedValues}</i>
    {/if}
  </div>
</Story>

<Story name="External label via aria-labelledby">
  <div id="select-region-label">Wähle eine oder mehrere Regionen:</div>
  <CheckBoxes
    id="my-check-boxes"
    {options}
    aria-labelledby="select-region-label"
    let:option
    bind:selectedValues
  >
    {option}
  </CheckBoxes>
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
