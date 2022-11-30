<script lang="ts">
  import CheckBoxes from '$lib/components/shared/CheckBoxes.svelte';

  const options = [
    { label: 'Komponente Eins', value: 1 },
    { label: 'Komponente Zwei', value: 2 },
    { label: 'Komponente Drei', value: 3 },
    { label: 'Komponente Vier', value: 4 },
    { label: 'Komponente Fünf', value: 5 },
  ];

  const isOptionDisabled = (option: typeof options[number]) =>
    option.value === 2;

  let selectedComponents = [options[0], options[3]];
</script>

<CheckBoxes
  id="check-boxes--choose-components"
  label="Wähle eine oder mehrere Komponenten:"
  {options}
  {isOptionDisabled}
  bind:selectedOptions={selectedComponents}
  let:option
>
  {option.label}

  {#if isOptionDisabled(option)}
    &nbsp;<i>(nicht auswählbar)</i>
  {/if}
</CheckBoxes>
