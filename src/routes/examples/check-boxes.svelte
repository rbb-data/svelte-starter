<script>
  import CheckBoxes from '$shared/CheckBoxes.svelte';

  const options = [
    { label: 'Komponente Eins', value: 1 },
    { label: 'Komponente Zwei', value: 2 },
    { label: 'Komponente Drei', value: 3 },
    { label: 'Komponente Vier', value: 4 },
    { label: 'Komponente Fünf', value: 5 },
  ];

  const isOptionDisabled = (option) => option.value === 2;

  let selectedComponents = [1, 4];
</script>

<CheckBoxes
  id="check-boxes--choose-components"
  label="Wähle eine oder mehrere Komponenten:"
  {options}
  getOptionValue={(option) => option.value}
  colorScheme="purple"
  customColors={{ light: 'transparent' }}
  {isOptionDisabled}
  let:option
  bind:selectedValues={selectedComponents}
>
  {option.label}

  {#if isOptionDisabled(option)}
    &nbsp;<i>(nicht auswählbar)</i>
  {/if}
</CheckBoxes>
