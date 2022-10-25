<script>
  import { base } from '$app/paths';

  import RadioButtons from '$lib/components/shared/RadioButtons.svelte';
  import Button from '$lib/components/shared/Button.svelte';

  const regions = [
    { label: 'Berlin', value: 'berlin', svgFilename: 'Berlin.svg' },
    {
      label: 'Brandenburg',
      value: 'brandenburg',
      svgFilename: 'Brandenburg.svg',
    },
    { label: 'Stadt', value: 'stadt', svgFilename: 'City.svg' },
    { label: 'Land', value: 'land', svgFilename: 'Countryside.svg' },
  ];

  /** @type {string} */
  let selectedRegion;
</script>

<div class="wrapper">
  <RadioButtons
    id="radio-buttons--choose-region"
    label="Wähle eine Region"
    hideLabelVisually
    options={regions}
    getOptionValue={(option) => option.value}
    let:option
    bind:selectedValue={selectedRegion}
  >
    <span class="content">
      {option.label}

      {#if option.value === 'stadt' || option.value === 'land'}
        &nbsp;<i>(anderswo in Deutschland)</i>
      {/if}
    </span>

    <img src="{base}/icons/{option.svgFilename}" alt="" />
  </RadioButtons>

  <Button>Termin vereinbaren</Button>
</div>

<style lang="scss">
  .wrapper :global {
    #radio-buttons--choose-region {
      --icon-size: 1.8em;
      --icon-padding-left: var(--s-px-1);
      --icon-padding-right: var(--s-px-2);

      label {
        position: relative;

        .content {
          padding-right: calc(
            var(--icon-size) + var(--icon-padding-left) +
              var(--icon-padding-right)
          );
        }

        img {
          position: absolute;
          width: var(--icon-size);
          height: var(--icon-size);
          top: 50%;
          right: var(--icon-padding-right);
          transform: translateY(-50%);
        }
      }
    }

    button {
      width: 100%;
      margin-top: var(--s-px-5);
    }
  }
</style>
