<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import RadioButtons from '$lib/components/shared/RadioButtons.svelte';

  /** @type {string} */
  let selectedOption;
  let selectedOptionInitiallySet = 'Berlin';
</script>

<Meta
  title="UI/RadioButtons"
  component={RadioButtons}
  argTypes={{
    id: {
      // @ts-ignore
      type: { required: true },
    },
    options: {
      // @ts-ignore
      type: { required: true },
    },
    label: {
      // @ts-ignore
      type: { required: true },
    },
    isOptionDisabled: {
      table: {
        defaultValue: { summary: '(option) => false' },
      },
    },
  }}
/>

<Story name="Basic">
  <RadioButtons
    id="basic"
    options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
    label="Wähle eine oder mehrere Regionen:"
    bind:selectedOption
  />
  <div class="result">
    Selected values:
    {#if selectedOption}
      <i>{selectedOption}</i>
    {/if}
  </div>
</Story>

<Story name="Specify initially selected values">
  <RadioButtons
    id="radio-buttons-with-initial-values"
    options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
    label="Wähle eine oder mehrere Regionen:"
    bind:selectedOption={selectedOptionInitiallySet}
  />
  <div class="result">
    Selected values:
    {#if selectedOptionInitiallySet.length > 0}
      <i>{selectedOptionInitiallySet}</i>
    {/if}
  </div>
</Story>

<Story name="Custom option label">
  <RadioButtons
    id="custom-option-label"
    options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
    label="Wähle eine oder mehrere Regionen:"
    bind:selectedOption
    let:option
    let:selected
  >
    Hallo, {option}!
    {#if selected}
      (selected)
    {/if}
  </RadioButtons>
  <div class="result">
    Selected values:
    {#if selectedOption}
      <i>{selectedOption}</i>
    {/if}
  </div>
</Story>

<Story name="Disabled option">
  <RadioButtons
    id="disabled-option"
    options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
    label="Wähle eine oder mehrere Regionen:"
    isOptionDisabled={(option) => option === 'Berlin'}
    bind:selectedOption
    let:option
  />
  <div class="result">
    Selected value:
    {#if selectedOption}
      <i>{selectedOption}</i>
    {/if}
  </div>
</Story>

<Story name="Complex options">
  <RadioButtons
    id="complex-options"
    options={[
      { label: 'Berlin', value: 'berlin' },
      { label: 'Brandenburg', value: 'brandenburg' },
      { label: 'Stadt', value: 'city' },
      { label: 'Land', value: 'country' },
    ]}
    label="Wähle eine oder mehrere Regionen:"
    bind:selectedOption
    let:option
  >
    {option.label}
  </RadioButtons>
  <div class="result">
    Selected values:
    {#if selectedOption}
      <i>{JSON.stringify(selectedOption)}</i>
    {/if}
  </div>
</Story>

<Story name="Custom accent color">
  <RadioButtons
    id="custom-accent-color"
    options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
    label="Wähle eine oder mehrere Regionen:"
    --ui-color-accent="var(--c-ui-accent-purple)"
    --ui-color-secondary="var(--c-purple-100)"
    bind:selectedOption
  />
  <div class="result">
    Selected values:
    {#if selectedOption}
      <i>{selectedOption}</i>
    {/if}
  </div>
</Story>

<Story name="Hide label visually">
  <RadioButtons
    id="hide-label-visually"
    options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
    label="Wähle eine oder mehrere Regionen:"
    hideLabelVisually
    bind:selectedOption
  />
  <div class="result">
    Selected values:
    {#if selectedOption}
      <i>{selectedOption}</i>
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
