<script>
  import Chips from '$comps/shared/Chips.svelte';
  import Button from '$comps/shared/Button.svelte';
  import CheckIcon from '$icons/Check.svelte';

  import { cUiGray100 } from '$lib/tokens';

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
  <Chips
    id="chips--choose-criterions"
    label="Wähle deine Kriterien:"
    options={criterions}
    colorScheme="turquoise"
    customColors={{ light: cUiGray100 }}
    bind:selectedValues={selectedCriterions}
    let:option
    let:checked
  >
    <div class="check-box" class:checked>
      {#if checked}
        <CheckIcon />
      {/if}
      <span class="content">{option}</span>
    </div>
  </Chips>

  <Button accentColor="turquoise" class="chips--show-results">
    Ergebnisse anzeigen
  </Button>
</div>

<style lang="scss">
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

    &.checked {
      .content {
        margin-left: calc(var(--icon-size) + var(--icon-padding));
      }
    }
  }

  .wrapper :global(.chips--show-results) {
    width: 100%;
    margin-top: var(--s-px-5);
  }
</style>
