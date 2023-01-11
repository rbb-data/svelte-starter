<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import CheckBoxes from '$lib/components/shared/CheckBoxes.svelte';

  let selectedOptions: string[] = [];
  let selectedComplexOptions: { label: string; value: string }[] = [];
  let selectedOptionsInitiallySet = ['Berlin', 'Brandenburg'];
</script>

<Hst.Story
  group="ui"
  title="CheckBoxes"
  layout={{ type: 'grid', width: '100%' }}
>
  <Hst.Variant title="Basic">
    <CheckBoxes
      id="my-unique-checkboxes-id"
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
  </Hst.Variant>

  <Hst.Variant title="Specify initially selected values">
    <CheckBoxes
      id="my-unique-checkboxes-id"
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
  </Hst.Variant>

  <Hst.Variant title="Custom option label">
    <CheckBoxes
      id="my-unique-checkboxes-id"
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
  </Hst.Variant>

  <Hst.Variant title="Disabled option">
    <CheckBoxes
      id="my-unique-checkboxes-id"
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
  </Hst.Variant>

  <Hst.Variant title="Complex options">
    <CheckBoxes
      id="my-unique-checkboxes-id"
      options={[
        { label: 'Berlin', value: 'berlin' },
        { label: 'Brandenburg', value: 'brandenburg' },
        { label: 'Stadt', value: 'city' },
        { label: 'Land', value: 'country' },
      ]}
      label="Wähle eine oder mehrere Regionen:"
      bind:selectedOptions={selectedComplexOptions}
      let:option
    >
      {option.label}
    </CheckBoxes>
    <div class="result">
      Selected values:
      {#if selectedComplexOptions.length > 0}
        <i>{JSON.stringify(selectedComplexOptions)}</i>
      {/if}
    </div>
  </Hst.Variant>

  <Hst.Variant title="Custom accent color">
    <CheckBoxes
      id="my-unique-checkboxes-id"
      class="checkboxes-with-custom-colors"
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
  </Hst.Variant>

  <Hst.Variant title="Hide label visually">
    <CheckBoxes
      id="my-unique-checkboxes-id"
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
  </Hst.Variant>

  <Hst.Variant title="Chips">
    <CheckBoxes
      id="my-unique-checkboxes-id"
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
  </Hst.Variant>
</Hst.Story>

<style lang="scss">
  .result {
    margin-top: var(--s-px-5);
    font-size: var(--font-size-sm);
    border-top: 1px dashed var(--c-ui-gray-400);
    padding-top: var(--s-px-1);
  }

  :global(.checkboxes-with-custom-colors) {
    --ui-color-accent: var(--c-ui-accent-purple);
    --ui-color-secondary: var(--c-purple-100);
  }
</style>
