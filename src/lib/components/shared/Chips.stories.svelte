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

  let selectedValues = [];
  let selectedValuesInitiallySet = ['Berlin', 'Brandenburg'];
</script>

<Meta title="Components/Chips" component={Chips} />

<Story name="Basic">
  <Chips
    id="my-chips"
    {options}
    label="Wähle Regionen"
    let:option
    bind:selectedValues
  >
    {option}
  </Chips>
  <div>
    Selected values:
    {#if selectedValues.length > 0}
      {selectedValues}
    {/if}
  </div>
</Story>

<Story name="Initially selected value">
  <Chips
    id="my-chips"
    {options}
    label="Wähle Regionen"
    let:option
    bind:selectedValues={selectedValuesInitiallySet}
  >
    {option}
  </Chips>
  <div>
    Selected values:
    {#if selectedValuesInitiallySet.length > 0}
      {selectedValuesInitiallySet}
    {/if}
  </div>
</Story>

<Story name="Update option on selection">
  <Chips
    id="my-chips"
    {options}
    label="Wähle Regionen"
    let:option
    let:checked
    bind:selectedValues
  >
    {option}
    {#if checked}
      (checked)
    {/if}
  </Chips>
  <div>
    Selected values:
    {#if selectedValues.length > 0}
      {selectedValues}
    {/if}
  </div>
</Story>

<Story name="Disabled option">
  <Chips
    id="my-chips"
    {options}
    label="Wähle Regionen"
    isDisabled={(option) => option === 'Berlin'}
    let:option
    bind:selectedValues
  >
    {option}
  </Chips>
  <div>
    Selected value:
    {#if selectedValues.length > 0}
      {selectedValues}
    {/if}
  </div>
</Story>

<Story name="Complex options">
  <Chips
    id="my-chips"
    options={complexOptions}
    label="Wähle Regionen"
    getValue={(option) => option.value}
    let:option
    bind:selectedValues
  >
    {option.label}
  </Chips>
  <div>
    Selected values:
    {#if selectedValues.length > 0}
      {selectedValues}
    {/if}
  </div>
</Story>

<Story name="Custom accent color">
  <Chips
    id="my-chips"
    {options}
    accentColor="beige"
    label="Wähle Regionen"
    let:option
    bind:selectedValues
  >
    {option}
  </Chips>
  <div>
    Selected values:
    {#if selectedValues.length > 0}
      {selectedValues}
    {/if}
  </div>
</Story>

<Story name="Hide label visually">
  <Chips
    id="my-chips"
    {options}
    label="Wähle Regionen"
    hideLabelVisually
    let:option
    bind:selectedValues
  >
    {option}
  </Chips>
  <div>
    Selected values:
    {#if selectedValues.length > 0}
      {selectedValues}
    {/if}
  </div>
</Story>

<Story name="External label">
  <div id="select-region-label">Wähle eine Region</div>
  <Chips
    id="my-chips"
    {options}
    aria-labelledby="select-region-label"
    let:option
    bind:selectedValues
  >
    {option}
  </Chips>
  <div>
    Selected values:
    {#if selectedValues.length > 0}
      {selectedValues}
    {/if}
  </div>
</Story>
