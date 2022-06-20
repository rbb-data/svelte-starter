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
  <div id="my-radio-buttons--basic_label" class="visually-hidden">
    Wähle eine Region:
  </div>
  <RadioButtons
    id="my-radio-buttons--basic"
    {options}
    aria-labelledby="my-radio-buttons--basic_label"
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
  <div id="my-radio-buttons--selected-value_label" class="visually-hidden">
    Wähle eine Region:
  </div>
  <RadioButtons
    id="my-radio-buttons--selected-value"
    {options}
    aria-labelledby="my-radio-buttons--selected-value_label"
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

<Story name="Complex options">
  <div id="my-radio-buttons--complex-options_label" class="visually-hidden">
    Wähle eine Region:
  </div>
  <RadioButtons
    id="my-radio-buttons--complex-options"
    options={complexOptions}
    label="Wähle eine Region"
    getValue={(option) => option.value}
    aria-labelledby="my-radio-buttons--complex-options_label"
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
  <div id="my-radio-buttons--custom-accent-color_label" class="visually-hidden">
    Wähle eine Region:
  </div>
  <RadioButtons
    id="my-radio-buttons--custom-accent-color"
    {options}
    label="Wähle eine Region"
    accentColor="beige"
    aria-labelledby="my-radio-buttons--basic_label"
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
