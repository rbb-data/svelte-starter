<script lang="ts">
  /**
   * Data-driven `<text />`
   */

  import { getContext } from 'svelte/internal';

  import { get } from './utils';
  import type { LayerCakeContext } from './types';

  type D = $$Generic;

  export let color: string | undefined = undefined;
  export let outline: string | undefined = undefined;

  export let data: D | undefined = undefined;
  export let xIndex = 0;
  export let yIndex = 0;

  export let xAlign: 'left' | 'center' | 'right' = 'left';
  export let yAlign: 'top' | 'center' | 'bottom' = 'bottom';
  export let xOffset: string | number = 0;
  export let yOffset: string | number = 0;

  const textAnchor = {
    left: 'start',
    center: 'middle',
    right: 'end',
  } as const;

  const yTranslate = {
    top: '1em',
    center: '0.33em',
    bottom: '0px',
  } as const;

  const ctx = getContext<LayerCakeContext<D>>('LayerCake');
  let xGet: typeof ctx['xGet'], yGet: typeof ctx['yGet'];

  $: x = $$restProps.x || 0;
  $: y = $$restProps.y || 0;

  $: if (data != undefined && ctx != undefined) {
    xGet = ctx.xGet;
    yGet = ctx.yGet;
    x = get($xGet, data, xIndex);
    y = get($yGet, data, yIndex);
  }

  $: _xOffset = typeof xOffset === 'number' ? `${xOffset}px` : xOffset;
  $: _yOffset = typeof yOffset === 'number' ? `${yOffset}px` : yOffset;
</script>

<text
  text-anchor={textAnchor[xAlign]}
  {...$$restProps}
  {x}
  {y}
  style:transform="translate({_xOffset}, calc({yTranslate[yAlign]} + {_yOffset}))"
  style:--_color={$$restProps.fill || color || ''}
  style:--_outline={$$restProps.stroke || outline || ''}
  style:--_opacity={$$restProps.opacity || ''}
>
  <slot />
</text>

<style>
  text {
    --__color: var(--_color, var(--chart-color-text, var(--c-ui-black)));
    --__outline: var(--_outline, var(--chart-outline-text, white));
    --__opacity: var(--_opacity, var(--chart-opacity-text, 1));

    fill: var(--__color);
    opacity: var(--__opacity);

    font-size: var(--font-size, var(--font-size-sm));
    font-weight: var(--font-weight, var(--font-weight-bold));
    font-style: var(--font-style, normal);

    /* from http://owumaro.github.io/text-stroke-generator/ (stroke-size=3px) */
    text-shadow: var(--__outline) 3px 0px 0px,
      var(--__outline) 2.8348708152770996px 0.9815840721130371px 0px,
      var(--__outline) 2.357661724090576px 1.855109453201294px 0px,
      var(--__outline) 1.620906949043274px 2.5244128704071045px 0px,
      var(--__outline) 0.7057127356529236px 2.915813684463501px 0px,
      var(--__outline) -0.2871706485748291px 2.9862239360809326px 0px,
      var(--__outline) -1.2484405040740967px 2.7278923988342285px 0px,
      var(--__outline) -2.0722744464874268px 2.169257640838623px 0px,
      var(--__outline) -2.6679797172546387px 1.3718178272247314px 0px,
      var(--__outline) -2.969977378845215px 0.42336001992225647px 0px,
      var(--__outline) -2.9450221061706543px -0.5717039108276367px 0px,
      var(--__outline) -2.595860481262207px -1.503831148147583px 0px,
      var(--__outline) -1.9609308242797852px -2.2704074382781982px 0px,
      var(--__outline) -1.110129952430725px -2.787043571472168px 0px,
      var(--__outline) -0.13711915910243988px -2.9968647956848145px 0px,
      var(--__outline) 0.8509865403175354px -2.876772880554199px 0px,
      var(--__outline) 1.745410442352295px -2.439988136291504px 0px,
      var(--__outline) 2.4476890563964844px -1.734594702720642px 0px,
      var(--__outline) 2.8805108070373535px -0.8382465243339539px 0px;
  }

  .tick {
    --__color: var(--_color, var(--color-text, var(--c-ui-gray-400)));

    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-xs);
  }

  .category-tick {
    --__color: var(--_color, var(--color-text, var(--c-ui-gray-500)));

    font-weight: var(--font-weight-semi-bold);
    font-size: var(--font-size-sm);
  }

  .label {
    --__color: var(--_color, var(--color-text, var(--c-ui-gray-400)));

    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-xs);
    line-height: var(--line-height-tight);
  }

  .annotation {
    --__color: var(--_color, var(--color-text, var(--c-ui-gray-400)));

    font-style: italic;
    font-size: var(--font-size-sm);
    line-height: var(--line-height-tight);
    font-weight: var(--font-weight-regular);
  }
</style>
