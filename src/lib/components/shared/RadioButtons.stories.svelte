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

<Meta
  title="Components/RadioButtons"
  component={RadioButtons}
  argTypes={{
    id: {
      type: { required: true },
    },
    options: {
      type: { required: true },
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
  <RadioButtons
    id="my-radio-buttons"
    {options}
    label="Wähle eine Region"
    let:option
    bind:selectedValue
  >
    {option}
  </RadioButtons>
  <div class="result">
    Selected value:
    {#if selectedValue}
      <i>{selectedValue}</i>
    {/if}
  </div>
</Story>

<Story name="Specify initially selected value">
  <RadioButtons
    id="my-radio-buttons"
    {options}
    label="Wähle eine Region"
    let:option
    bind:selectedValue={selectedValueInitiallySet}
  >
    {option}
  </RadioButtons>
  <div class="result">
    Selected value:
    {#if selectedValueInitiallySet}
      <i>{selectedValueInitiallySet}</i>
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
    bind:selectedValue
  >
    {option}
    {#if checked}
      (checked)
    {/if}
  </RadioButtons>
  <div class="result">
    Selected value:
    {#if selectedValue}
      <i>{selectedValue}</i>
    {/if}
  </div>
</Story>

<Story name="Disabled option">
  <RadioButtons
    id="my-radio-buttons"
    {options}
    label="Wähle eine Region"
    isOptionDisabled={(option) => option === 'Berlin'}
    let:option
    bind:selectedValue
  >
    {option}
  </RadioButtons>
  <div class="result">
    Selected value:
    {#if selectedValue}
      <i>{selectedValue}</i>
    {/if}
  </div>
</Story>

<Story name="Complex options">
  <RadioButtons
    id="my-radio-buttons"
    options={complexOptions}
    label="Wähle eine Region"
    getOptionValue={(option) => option.value}
    let:option
    bind:selectedValue
  >
    {option.label}
  </RadioButtons>
  <div class="result">
    Selected value:
    {#if selectedValue}
      <i>{selectedValue}</i>
    {/if}
  </div>
</Story>

<Story name="Custom accent color">
  <RadioButtons
    id="my-radio-buttons"
    {options}
    colorScheme="beige"
    label="Wähle eine Region"
    let:option
    bind:selectedValue
  >
    {option}
  </RadioButtons>
  <div class="result">
    Selected value:
    {#if selectedValue}
      <i>{selectedValue}</i>
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
  <div class="result">
    Selected value:
    {#if selectedValue}
      <i>{selectedValue}</i>
    {/if}
  </div>
</Story>

<Story name="External label via aria-labelledby">
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
  <div class="result">
    Selected value:
    {#if selectedValue}
      <i>{selectedValue}</i>
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
