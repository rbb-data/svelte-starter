<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Dropdown from '$lib/components/shared/Dropdown.svelte';

  let selectedOption: string;
  let selectedComplexOption: { label: string; value: string };
  let selectedOptionInitiallySet = 'Sommer';
</script>

<Meta
  title="UI/Dropdown"
  component={Dropdown}
  argTypes={{
    id: {
      // @ts-ignore
      type: { required: true },
    },
    options: {
      // @ts-ignore
      type: { required: true },
    },
    placeholder: {
      // @ts-ignore
      type: { required: true },
    },
    formatOption: {
      table: {
        defaultValue: { summary: '(option) => option' },
      },
    },
  }}
/>

<Story name="Basic">
  <div class="wrapper">
    <Dropdown
      id="my-unique-dropdown-id"
      label="Wähle eine Jahreszeit"
      options={['Frühling', 'Sommer', 'Herbst', 'Winter']}
      placeholder="Jahreszeiten"
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

<Story name="Initially Open">
  <div class="wrapper">
    <Dropdown
      id="my-unique-dropdown-id"
      label="Wähle eine Jahreszeit"
      options={['Frühling', 'Sommer', 'Herbst', 'Winter']}
      placeholder="Jahreszeiten"
      isOpen={true}
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
    <Dropdown
      id="my-unique-dropdown-id"
      label="Wähle eine Jahreszeit"
      options={['Frühling', 'Sommer', 'Herbst', 'Winter']}
      placeholder="Jahreszeiten"
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
    <Dropdown
      id="my-unique-dropdown-id"
      label="Wähle eine Jahreszeit"
      options={[
        { label: 'Frühling', value: 'spring' },
        { label: 'Sommer', value: 'summer' },
        { label: 'Herbst', value: 'autumn' },
        { label: 'Winter', value: 'winter' },
      ]}
      placeholder="Jahreszeiten"
      formatOption={(option) => option.label}
      bind:selectedOption={selectedComplexOption}
      let:option
    >
      {option.label}
    </Dropdown>
    <div class="result">
      Selected value:
      {#if selectedOption}
        {JSON.stringify(selectedOption, null, 2)}
      {/if}
    </div>
  </div>
</Story>

<Story name="Disabled">
  <div class="wrapper">
    <Dropdown
      id="my-unique-dropdown-id"
      label="Wähle eine Jahreszeit"
      options={['Frühling', 'Sommer', 'Herbst', 'Winter']}
      placeholder="Jahreszeiten"
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
    <Dropdown
      id="my-unique-dropdown-id"
      label="Wähle eine Jahreszeit"
      hideLabelVisually
      options={['Frühling', 'Sommer', 'Herbst', 'Winter']}
      placeholder="Jahreszeiten"
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
