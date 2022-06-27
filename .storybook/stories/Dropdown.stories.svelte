<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Dropdown from '$comps/shared/Dropdown.svelte';

  const options = ['Frühling', 'Sommer', 'Herbst', 'Winter'];
  const complexOptions = [
    { label: 'Frühling', value: 'spring' },
    { label: 'Sommer', value: 'summer' },
    { label: 'Herbst', value: 'autumn' },
    { label: 'Winter', value: 'winter' },
  ];
  const groupedOptions = [
    'Frühling',
    'Sommer',
    'Herbst',
    'Winter',
    'Alle Jahreszeiten',
  ];

  /** @type {string[]} */
  let selectedValue;
  let selectedValueInitiallySet = 'Sommer';
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
    getOptionValue: {
      table: {
        defaultValue: { summary: '(option) => option' },
      },
    },
    getOptionLabel: {
      table: {
        defaultValue: { summary: '(option) => option' },
      },
    },
    getOptionGroup: {
      table: {
        defaultValue: { summary: '() => 0' },
      },
    },
  }}
/>

<Story name="Basic">
  <div class="wrapper">
    <Dropdown
      id="my-unique-dropdown-id"
      {options}
      placeholder="Jahreszeiten"
      bind:selectedValue
      let:option
    >
      {option}
    </Dropdown>
    <div class="result">
      Selected value:
      {#if selectedValue}
        <i>{selectedValue}</i>
      {/if}
    </div>
  </div>
</Story>

<Story name="Open">
  <div class="wrapper">
    <Dropdown
      id="my-unique-dropdown-id"
      {options}
      placeholder="Jahreszeiten"
      isOpen
      bind:selectedValue
      let:option
    >
      {option}
    </Dropdown>
    <div class="result">
      Selected value:
      {#if selectedValue}
        <i>{selectedValue}</i>
      {/if}
    </div>
  </div>
</Story>

<Story name="Specify initially selected value">
  <div class="wrapper">
    <Dropdown
      id="my-unique-dropdown-id"
      {options}
      placeholder="Jahreszeiten"
      bind:selectedValue={selectedValueInitiallySet}
      let:option
    >
      {option}
    </Dropdown>
    <div class="result">
      Selected value:
      {#if selectedValueInitiallySet}
        <i>{selectedValueInitiallySet}</i>
      {/if}
    </div>
  </div>
</Story>

<Story name="Complex options">
  <div class="wrapper">
    <Dropdown
      id="my-unique-dropdown-id"
      options={complexOptions}
      placeholder="Jahreszeiten"
      getOptionValue={(option) => option.value}
      getOptionLabel={(option) => option.label}
      bind:selectedValue
      let:option
    >
      {option.label}
    </Dropdown>
    <div class="result">
      Selected value:
      {#if selectedValue}
        <i>{selectedValue}</i>
      {/if}
    </div>
  </div>
</Story>

<Story name="Grouped options">
  <div class="wrapper">
    <Dropdown
      id="my-unique-dropdown-id"
      options={groupedOptions}
      placeholder="Jahreszeiten"
      getOptionGroup={(option) => (option === 'Alle Jahreszeiten' ? 1 : 0)}
      bind:selectedValue
      let:option
    >
      {option}
    </Dropdown>
    <div class="result">
      Selected value:
      {#if selectedValue}
        <i>{selectedValue}</i>
      {/if}
    </div>
  </div>
</Story>

<style>
  .wrapper {
    height: 200px;
  }

  .result {
    margin-top: var(--s-px-5);
    font-size: var(--font-size-sm);
    border-top: 1px dashed var(--c-ui-gray-400);
    padding-top: var(--s-px-1);
  }
</style>
