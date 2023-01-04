<script lang="ts">
  /**
   * Select a single value (based on the native `<select />` element)
   *
   * The rendered markup is composed of:
   *
   * - `.select`: wrapper element
   * - `.select__label`: label
   * - `.select__field`: clickable selection field
   */

  import DropdownIcon from '$icons/DropdownIcon.svelte';

  type Option = $$Generic;

  /** globally unique id */
  export let id: string;

  /** label of the input group */
  export let label: string | undefined = undefined;

  /** list of options to choose from */
  export let options: Option[];

  /** currently selected item */
  export let selectedOption: Option | undefined = undefined;

  /** hides label visually but keep it around for screen readers */
  export let hideLabelVisually = false;
</script>

<div class="select">
  <label
    for={id}
    class="select__label"
    class:visually-hidden={hideLabelVisually}
  >
    {label}
  </label>
  <div class="select__wrapper">
    <select
      {id}
      class:select__field={true}
      class:reset={true}
      {...$$restProps}
      bind:value={selectedOption}
    >
      {#each options as option}
        {@const selected = option === selectedOption}
        <option value={option} class:selected>
          <slot {option} {selected}>
            {option}
          </slot>
        </option>
      {/each}
    </select>
    <DropdownIcon />
  </div>
</div>

<style lang="scss">
  .select {
    --padding-v: var(--s-px-3);
    --padding-h: var(--s-px-4);
    --icon-size: 1.6em;
    --icon-padding-right: var(--s-px-4);
    --icon-padding-left: var(--s-px-2);

    --c-focus: var(--c-ui-black);

    --padding-r: calc(
      var(--icon-size) + var(--icon-padding-left) + var(--icon-padding-right)
    );

    width: 100%;
    position: relative;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semi-bold);
    line-height: var(--line-height-tight);

    &__label {
      display: block;
      font-weight: var(--font-weight-semi-bold);
      font-size: var(--font-size-sm);
      margin-bottom: var(--s-px-2);
    }

    &__wrapper {
      width: 100%;
      position: relative;
    }

    &__field {
      width: 100%;
      padding: var(--padding-v) var(--padding-r) var(--padding-v)
        var(--padding-h);
      background-color: var(--c-ui-gray-100);
      position: relative;

      &[disabled] {
        color: rgba(0, 0, 0, 0.3);
        background-color: rgba(
          235,
          235,
          235,
          0.3
        ); /* var(--c-ui-gray-100) with opacity 0.3 */
      }

      &[disabled] + :global(svg) {
        opacity: 0.3;
      }
    }

    :global(svg) {
      width: var(--icon-size);
      height: var(--icon-size);
      position: absolute;
      top: 50%;
      right: var(--icon-padding-right);
      transform: translateY(-50%);
      touch-action: none;
      pointer-events: none;
    }
  }
</style>
