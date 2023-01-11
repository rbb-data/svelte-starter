const __resolved__virtual_storySource_srcLibComponentsSharedRadiobuttonsStorySvelte = `<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import RadioButtons from '$lib/components/shared/RadioButtons.svelte';

  let selectedOption: string;
  let selectedComplexOption: { label: string; value: string };
  let selectedOptionInitiallySet = 'Berlin';
<\/script>

<Hst.Story
  group="ui"
  title="RadioButtons"
  layout={{ type: 'grid', width: '100%' }}
>
  <Hst.Variant title="Basic">
    <RadioButtons
      id="my-unique-radio-id"
      options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
      label="Wähle eine Region:"
      bind:selectedOption
    />
    <div class="result">
      Selected values:
      {#if selectedOption}
        <i>{selectedOption}</i>
      {/if}
    </div>
  </Hst.Variant>

  <Hst.Variant title="Specify initially selected values">
    <RadioButtons
      id="my-unique-radio-id"
      options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
      label="Wähle eine Region:"
      bind:selectedOption={selectedOptionInitiallySet}
    />
    <div class="result">
      Selected values:
      {#if selectedOptionInitiallySet.length > 0}
        <i>{selectedOptionInitiallySet}</i>
      {/if}
    </div>
  </Hst.Variant>

  <Hst.Variant title="Custom option label">
    <RadioButtons
      id="my-unique-radio-id"
      options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
      label="Wähle eine Region:"
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
  </Hst.Variant>

  <Hst.Variant title="Disabled option">
    <RadioButtons
      id="my-unique-radio-id"
      options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
      label="Wähle eine Region:"
      isOptionDisabled={(option) => option === 'Berlin'}
      bind:selectedOption
    />
    <div class="result">
      Selected value:
      {#if selectedOption}
        <i>{selectedOption}</i>
      {/if}
    </div>
  </Hst.Variant>

  <Hst.Variant title="Complex options">
    <RadioButtons
      id="my-unique-radio-id"
      options={[
        { label: 'Berlin', value: 'berlin' },
        { label: 'Brandenburg', value: 'brandenburg' },
        { label: 'Stadt', value: 'city' },
        { label: 'Land', value: 'country' },
      ]}
      label="Wähle eine Region:"
      bind:selectedOption={selectedComplexOption}
      let:option
    >
      {option.label}
    </RadioButtons>
    <div class="result">
      Selected values:
      {#if selectedComplexOption}
        <i>{JSON.stringify(selectedComplexOption)}</i>
      {/if}
    </div>
  </Hst.Variant>

  <Hst.Variant title="Custom accent color">
    <RadioButtons
      id="my-unique-radio-id"
      class="radio-buttons-with-custom-colors"
      options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
      label="Wähle eine Region:"
      bind:selectedOption
    />
    <div class="result">
      Selected values:
      {#if selectedOption}
        <i>{selectedOption}</i>
      {/if}
    </div>
  </Hst.Variant>

  <Hst.Variant title="Hide label visually">
    <RadioButtons
      id="my-unique-radio-id"
      options={['Berlin', 'Brandenburg', 'Stadt', 'Land']}
      label="Wähle eine Region:"
      hideLabelVisually
      bind:selectedOption
    />
    <div class="result">
      Selected values:
      {#if selectedOption}
        <i>{selectedOption}</i>
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

  :global(.radio-buttons-with-custom-colors) {
    --ui-color-accent: var(--c-ui-accent-purple);
    --ui-color-secondary: var(--c-purple-100);
  }
</style>
`;
export {
  __resolved__virtual_storySource_srcLibComponentsSharedRadiobuttonsStorySvelte as default
};
