<script>
  import RadioButtons from '$comps/shared/RadioButtons.svelte';
  import Button from '$comps/shared/Button.svelte';

  const SVG_BASEPATH =
    'https://storage.googleapis.com/rbb-data-static/therapy-interactive/icons';

  const regions = [
    { label: 'Berlin', value: 'berlin', svgFilename: 'berlin.svg' },
    {
      label: 'Brandenburg',
      value: 'brandenburg',
      svgFilename: 'brandenburg.svg',
    },
    { label: 'Stadt', value: 'stadt', svgFilename: 'city.svg' },
    { label: 'Land', value: 'land', svgFilename: 'country.svg' },
  ];

  /** @type {string} */
  let selectedRegion;
</script>

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

  <img src="{SVG_BASEPATH}/{option.svgFilename}" alt="" />
</RadioButtons>

<Button class="button--call-therapist">Termin vereinbaren</Button>

<style lang="scss">
  :global {
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

    .button--call-therapist {
      width: 100%;
      margin-top: var(--s-px-5);
    }
  }
</style>
