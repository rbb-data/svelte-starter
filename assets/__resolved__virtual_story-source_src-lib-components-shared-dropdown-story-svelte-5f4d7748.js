const __resolved__virtual_storySource_srcLibComponentsSharedDropdownStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  export let Hst: Hst;

  import Dropdown from './Dropdown.svelte';

  let selectedOption: string;
  let selectedComplexOption: { label: string; value: string };
  let selectedOptionInitiallySet = 'Sommer';
<\/script>

<Hst.Story group="ui" title="Dropdown" layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Basic">
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
  </Hst.Variant>

  <Hst.Variant title="Initially Open">
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
  </Hst.Variant>

  <Hst.Variant title="Specify initially selected value">
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
  </Hst.Variant>

  <Hst.Variant title="Complex options">
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
        {#if selectedComplexOption}
          {JSON.stringify(selectedComplexOption, null, 2)}
        {/if}
      </div>
    </div>
  </Hst.Variant>

  <Hst.Variant title="Disabled">
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
  </Hst.Variant>

  <Hst.Variant title="Hide clear button">
    <div class="wrapper">
      <Dropdown
        id="my-unique-dropdown-id"
        label="Wähle eine Jahreszeit"
        options={['Frühling', 'Sommer', 'Herbst', 'Winter']}
        placeholder="Jahreszeiten"
        hideClearButton
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
`;
export {
  __resolved__virtual_storySource_srcLibComponentsSharedDropdownStorySvelte as default
};
