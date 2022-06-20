<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import RadioButtons from '$shared/RadioButtons.svelte';

  const options = ['Berlin', 'Brandenburg', 'Stadt', 'Land'];
  const complexOptions = [
    { label: 'Berlin', value: 'berlin' },
    { label: 'Brandenburg', value: 'brandenburg' },
    { label: 'Stadt', value: 'city' },
    { label: 'Land', value: 'country' },
  ];

  let selectedValue;
  let selectedValueInitiallySet = 'Berlin';
</script>

<Meta title="Components/RadioButtons" component={RadioButtons} />

<Story name="Basic">
  <RadioButtons
    id="my-radio-buttons"
    {options}
    label="Wähle eine Region"
    let:option
    bind:selectedValue
  >
    {option}
  </RadioButtons>
  <div>
    Selected value:
    {#if selectedValue}
      {selectedValue}
    {/if}
  </div>
</Story>

<Story name="Initially selected value">
  <RadioButtons
    id="my-radio-buttons"
    {options}
    label="Wähle eine Region"
    let:option
    bind:selectedValue={selectedValueInitiallySet}
  >
    {option}
  </RadioButtons>
  <div>
    Selected value:
    {#if selectedValueInitiallySet}
      {selectedValueInitiallySet}
    {/if}
  </div>
</Story>

<Story name="Update option on selection">
  <RadioButtons
    id="my-radio-buttons"
    {options}
    label="Wähle eine Region"
    let:option
    let:checked
    bind:selectedValue={selectedValueInitiallySet}
  >
    {option}
    {#if checked}
      (checked)
    {/if}
  </RadioButtons>
  <div>
    Selected value:
    {#if selectedValueInitiallySet}
      {selectedValueInitiallySet}
    {/if}
  </div>
</Story>

<Story name="Disabled option">
  <RadioButtons
    id="my-radio-buttons"
    {options}
    label="Wähle eine Region"
    isDisabled={(option) => option === 'Berlin'}
    let:option
    bind:selectedValue
  >
    {option}
  </RadioButtons>
  <div>
    Selected value:
    {#if selectedValue}
      {selectedValue}
    {/if}
  </div>
</Story>

<Story name="Complex options">
  <RadioButtons
    id="my-radio-buttons"
    options={complexOptions}
    label="Wähle eine Region"
    getValue={(option) => option.value}
    let:option
    bind:selectedValue
  >
    {option.label}
  </RadioButtons>
  <div>
    Selected value:
    {#if selectedValue}
      {selectedValue}
    {/if}
  </div>
</Story>

<Story name="Custom accent color">
  <RadioButtons
    id="my-radio-buttons"
    {options}
    accentColor="beige"
    label="Wähle eine Region"
    let:option
    bind:selectedValue
  >
    {option}
  </RadioButtons>
  <div>
    Selected value:
    {#if selectedValue}
      {selectedValue}
    {/if}
  </div>
</Story>

<Story name="Hide label visually">
  <RadioButtons
    id="my-radio-buttons"
    {options}
    label="Wähle eine Region"
    hideLabelVisually
    let:option
    bind:selectedValue
  >
    {option}
  </RadioButtons>
  <div>
    Selected value:
    {#if selectedValue}
      {selectedValue}
    {/if}
  </div>
</Story>

<Story name="External label">
  <div id="select-region-label">Wähle eine Region</div>
  <RadioButtons
    id="my-radio-buttons"
    {options}
    aria-labelledby="select-region-label"
    let:option
    bind:selectedValue
  >
    {option}
  </RadioButtons>
  <div>
    Selected value:
    {#if selectedValue}
      {selectedValue}
    {/if}
  </div>
</Story>
