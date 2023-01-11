<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import Select from '$lib/components/shared/Select.svelte';

  let selectedOption: string;
  let selectedComplexOption: { label: string; value: string };
  let selectedOptionInitiallySet = 'Sommer';
</script>

<Hst.Story group="ui" title="Select" layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Basic">
    <div class="wrapper">
      <Select
        id="my-unique-select-id"
        label="Wähle eine Jahreszeit"
        options={['Frühling', 'Sommer', 'Herbst', 'Winter']}
        bind:selectedOption
      />
      <div class="result">
        Selected value:
        {#if selectedOption}
          <i>{selectedOption}</i>
        {/if}
      </div>
    </div>
  </Hst.Variant>

  <Hst.Variant title="Specify initially selected value">
    <div class="wrapper">
      <Select
        id="my-unique-select-id"
        label="Wähle eine Jahreszeit"
        options={['Frühling', 'Sommer', 'Herbst', 'Winter']}
        bind:selectedOption={selectedOptionInitiallySet}
      />
      <div class="result">
        Selected value:
        {#if selectedOptionInitiallySet}
          <i>{selectedOptionInitiallySet}</i>
        {/if}
      </div>
    </div>
  </Hst.Variant>

  <Hst.Variant title="Complex options">
    <div class="wrapper">
      <Select
        id="my-unique-select-id"
        label="Wähle eine Jahreszeit"
        options={[
          { label: 'Frühling', value: 'spring' },
          { label: 'Sommer', value: 'summer' },
          { label: 'Herbst', value: 'autumn' },
          { label: 'Winter', value: 'winter' },
        ]}
        bind:selectedOption={selectedComplexOption}
        let:option
      >
        {option.label}
      </Select>
      <div class="result">
        Selected value:
        {#if selectedComplexOption}
          {JSON.stringify(selectedComplexOption, null, 2)}
        {/if}
      </div>
    </div>
  </Hst.Variant>

  <Hst.Variant title="Disabled">
    <div class="wrapper">
      <Select
        id="my-unique-select-id"
        label="Wähle eine Jahreszeit"
        options={['Frühling', 'Sommer', 'Herbst', 'Winter']}
        disabled
        bind:selectedOption
      />
      <div class="result">
        Selected value:
        {#if selectedOption}
          <i>{selectedOption}</i>
        {/if}
      </div>
    </div>
  </Hst.Variant>

  <Hst.Variant title="Hide label visually">
    <div class="wrapper">
      <Select
        id="my-unique-select-id"
        label="Wähle eine Jahreszeit"
        hideLabelVisually
        options={['Frühling', 'Sommer', 'Herbst', 'Winter']}
        bind:selectedOption
      />
      <div class="result">
        Selected value:
        {#if selectedOption}
          <i>{selectedOption}</i>
        {/if}
      </div>
    </div>
  </Hst.Variant>
</Hst.Story>

<style>
  .wrapper {
    height: 250px;
    padding: 0 var(--s-px-1);
  }

  .result {
    margin-top: var(--s-px-5);
    font-size: var(--font-size-sm);
    border-top: 1px dashed var(--c-ui-gray-400);
    padding-top: var(--s-px-1);
  }
</style>
