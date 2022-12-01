<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import CheckBoxes from '$lib/components/shared/CheckBoxes.svelte';

  let selectedOptions: string[] = [];
  let selectedComplexOptions: { label: string; value: string }[] = [];
  let selectedOptionsInitiallySet = ['Berlin', 'Brandenburg'];
</script>

<Meta title="UI/CheckBoxes" component={CheckBoxes} />

<Story name="Basic">
  <CheckBoxes
    id="basic"
    options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
    label="Wähle eine oder mehrere Regionen:"
    bind:selectedOptions
  />
  <div class="result">
    Selected values:
    {#if selectedOptions.length > 0}
      <i>{selectedOptions}</i>
    {/if}
  </div>
</Story>

<Story name="Specify initially selected values">
  <CheckBoxes
    id="check-boxes-with-initial-values"
    options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
    label="Wähle eine oder mehrere Regionen:"
    bind:selectedOptions={selectedOptionsInitiallySet}
  />
  <div class="result">
    Selected values:
    {#if selectedOptionsInitiallySet.length > 0}
      <i>{selectedOptionsInitiallySet}</i>
    {/if}
  </div>
</Story>

<Story name="Custom option label">
  <CheckBoxes
    id="custom-option-label"
    options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
    label="Wähle eine oder mehrere Regionen:"
    bind:selectedOptions
    let:option
    let:selected
  >
    Hallo, {option}!
    {#if selected}
      (selected)
    {/if}
  </CheckBoxes>
  <div class="result">
    Selected values:
    {#if selectedOptions.length > 0}
      <i>{selectedOptions}</i>
    {/if}
  </div>
</Story>

<Story name="Disabled option">
  <CheckBoxes
    id="disabled-option"
    options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
    label="Wähle eine oder mehrere Regionen:"
    isOptionDisabled={(option) => option === 'Berlin'}
    bind:selectedOptions
  />
  <div class="result">
    Selected value:
    {#if selectedOptions.length > 0}
      <i>{selectedOptions}</i>
    {/if}
  </div>
</Story>

<Story name="Complex options">
  <CheckBoxes
    id="complex-options"
    options={[
      { label: 'Berlin', value: 'berlin' },
      { label: 'Brandenburg', value: 'brandenburg' },
      { label: 'Stadt', value: 'city' },
      { label: 'Land', value: 'country' },
    ]}
    label="Wähle eine oder mehrere Regionen:"
    bind:selectedComplexOptions
    let:option
  >
    {option.label}
  </CheckBoxes>
  <div class="result">
    Selected values:
    {#if selectedOptions.length > 0}
      <i>{JSON.stringify(selectedOptions)}</i>
    {/if}
  </div>
</Story>

<Story name="Custom accent color">
  <CheckBoxes
    id="custom-accent-color"
    options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
    label="Wähle eine oder mehrere Regionen:"
    --ui-color-accent="var(--c-ui-accent-purple)"
    --ui-color-secondary="var(--c-purple-100)"
    bind:selectedOptions
  />
  <div class="result">
    Selected values:
    {#if selectedOptions.length > 0}
      <i>{selectedOptions}</i>
    {/if}
  </div>
</Story>

<Story name="Hide label visually">
  <CheckBoxes
    id="hide-label-visually"
    options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
    label="Wähle eine oder mehrere Regionen:"
    hideLabelVisually
    bind:selectedOptions
  />
  <div class="result">
    Selected values:
    {#if selectedOptions.length > 0}
      <i>{selectedOptions}</i>
    {/if}
  </div>
</Story>

<Story name="Chips">
  <CheckBoxes
    id="chips"
    class="chips"
    options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
    label="Wähle eine oder mehrere Regionen:"
    bind:selectedOptions
  />
  <div class="result">
    Selected values:
    {#if selectedOptions.length > 0}
      <i>{selectedOptions}</i>
    {/if}
  </div>
</Story>

<style lang="scss">
  .result {
    margin-top: var(--s-px-5);
    font-size: var(--font-size-sm);
    border-top: 1px dashed var(--c-ui-gray-400);
    padding-top: var(--s-px-1);
  }
</style>
