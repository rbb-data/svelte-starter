<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Select from '$lib/components/shared/Select.svelte';

  let selectedOption: string;
  let selectedComplexOption: { label: string; value: string };
  let selectedOptionInitiallySet = 'Sommer';

  $: console.log(selectedComplexOption);
</script>

<Meta title="UI/Select" component={Select} />

<Story name="Basic">
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
</Story>

<Story name="Specify initially selected value">
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
</Story>

<Story name="Complex options">
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
</Story>

<Story name="Disabled">
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
</Story>

<Story name="Hide label visually">
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
</Story>

<style>
  .wrapper {
    height: 250px;
  }

  .result {
    margin-top: var(--s-px-5);
    font-size: var(--font-size-sm);
    border-top: 1px dashed var(--c-ui-gray-400);
    padding-top: var(--s-px-1);
  }
</style>
