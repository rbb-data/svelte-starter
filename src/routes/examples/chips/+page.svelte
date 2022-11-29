<script>
  import CheckBoxes from '$lib/components/shared/CheckBoxes.svelte';
  import Button from '$lib/components/shared/Button.svelte';
  import CheckIcon from '$icons/Check.svelte';

  const criterions = [
    'Diskutiert',
    'In Planung',
    'Wird geprüft',
    'Außer Kraft gesetzt',
    'In Kraft getreten',
    'Überarbeitet',
    'Angefochten',
  ];

  /** @type {string[]} */
  let selectedCriterions = ['In Kraft getreten'];
</script>

<div class="wrapper">
  <CheckBoxes
    id="chips--choose-criterions"
    class="chips"
    label="Wähle deine Kriterien:"
    options={criterions}
    bind:selectedOptions={selectedCriterions}
    let:option
    let:selected
  >
    <div class="check-box" class:selected>
      {#if selected}
        <CheckIcon />
      {/if}
      <span class="content">{option}</span>
    </div>
  </CheckBoxes>

  <Button>Ergebnisse anzeigen</Button>
</div>

<style lang="scss">
  .wrapper {
    --button-color-accent: var(--c-ui-accent-turquoise);
    --ui-color-accent: var(--c-turquoise-300);
    --ui-color-secondary: var(--c-ui-gray-100);
  }

  .check-box {
    --icon-size: 1.6em;
    --icon-padding: var(--s-px-1);

    position: relative;

    .content {
      display: inline-block;
      margin-left: 0;
    }

    :global(svg) {
      width: var(--icon-size);
      height: var(--icon-size);

      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    &.selected {
      .content {
        margin-left: calc(var(--icon-size) + var(--icon-padding));
      }
    }
  }

  .wrapper :global(button) {
    width: 100%;
    margin-top: var(--s-px-5);
  }
</style>
