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
  let selectedValuesInitiallySet = 'Berlin';
</script>

<Meta title="Components/CheckBoxes" component={CheckBoxes} />

<Story name="Basic">
  <CheckBoxes
    id="my-check-boxes"
    {options}
    label="Wähle Regionen"
    let:option
    bind:selectedValues
  >
    {option}
  </CheckBoxes>
  <div>
    Selected values:
    {#if selectedValues.length > 0}
      {selectedValues}
    {/if}
  </div>
</Story>

<Story name="Initially selected value">
  <CheckBoxes
    id="my-check-boxes"
    {options}
    label="Wähle Regionen"
    let:option
    bind:selectedValues={selectedValuesInitiallySet}
  >
    {option}
  </CheckBoxes>
  <div>
    Selected values:
    {#if selectedValuesInitiallySet.length > 0}
      {selectedValuesInitiallySet}
    {/if}
  </div>
</Story>

<Story name="Disabled option">
  <CheckBoxes
    id="my-check-boxes"
    {options}
    label="Wähle Regionen"
    isDisabled={(option) => option === 'Berlin'}
    let:option
    bind:selectedValues
  >
    {option}
  </CheckBoxes>
  <div>
    Selected value:
    {#if selectedValues.length > 0}
      {selectedValues}
    {/if}
  </div>
</Story>

<Story name="Complex options">
  <CheckBoxes
    id="my-check-boxes"
    options={complexOptions}
    label="Wähle Regionen"
    getValue={(option) => option.value}
    let:option
    bind:selectedValues
  >
    {option.label}
  </CheckBoxes>
  <div>
    Selected values:
    {#if selectedValues.length > 0}
      {selectedValues}
    {/if}
  </div>
</Story>

<Story name="Custom accent color">
  <CheckBoxes
    id="my-check-boxes"
    {options}
    accentColor="beige"
    label="Wähle Regionen"
    let:option
    bind:selectedValues
  >
    {option}
  </CheckBoxes>
  <div>
    Selected values:
    {#if selectedValues.length > 0}
      {selectedValues}
    {/if}
  </div>
</Story>

<Story name="Hide label visually">
  <CheckBoxes
    id="my-check-boxes"
    {options}
    label="Wähle Regionen"
    hideLabelVisually
    let:option
    bind:selectedValues
  >
    {option}
  </CheckBoxes>
  <div>
    Selected values:
    {#if selectedValues.length > 0}
      {selectedValues}
    {/if}
  </div>
</Story>

<Story name="External label">
  <div id="select-region-label">Wähle eine Region</div>
  <CheckBoxes
    id="my-check-boxes"
    {options}
    aria-labelledby="select-region-label"
    let:option
    bind:selectedValues
  >
    {option}
  </CheckBoxes>
  <div>
    Selected values:
    {#if selectedValues.length > 0}
      {selectedValues}
    {/if}
  </div>
</Story>
