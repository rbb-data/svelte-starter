<script lang="ts">
  /**
   * HTML text to be rendered above a chart
   */

  import { getContext } from 'svelte/internal';

  import { get } from './utils';
  import type { LayerCakeContext, Accessor } from './types';

  type D = $$Generic;

  export let x: string | number = 0;
  export let y: string | number = 0;
  export let color: string | undefined = undefined;
  export let outline: string | undefined = undefined;

  export let data: D | undefined = undefined;
  export let xIndex = 0;
  export let yIndex = 0;

  export let xData: ReturnType<Accessor<D>> | undefined = undefined;
  export let yData: ReturnType<Accessor<D>> | undefined = undefined;

  export let xAlign: 'left' | 'center' | 'right' = 'left';
  export let yAlign: 'top' | 'center' | 'bottom' = 'bottom';
  export let xOffset = 0;
  export let yOffset = 0;

  let maxWidth: string;

  const xTranslate = {
    left: '0px',
    center: '-50%',
    right: '-100%',
  } as const;

  const yTranslate = {
    top: '0px',
    center: '-50%',
    bottom: '-100%',
  } as const;

  const ctx = getContext<LayerCakeContext<D>>('LayerCake');
  let xScale: typeof ctx['xScale'],
    yScale: typeof ctx['yScale'],
    xGet: typeof ctx['xGet'],
    yGet: typeof ctx['yGet'],
    ctxWidth: typeof ctx['width'],
    padding: typeof ctx['padding'];

  $: left = (typeof x === 'number' ? `${x}px` : x) || '0px';
  $: top = (typeof y === 'number' ? `${y}px` : y) || '0px';

  $: if (ctx != undefined) {
    xGet = ctx.xGet;
    yGet = ctx.yGet;
    ctxWidth = ctx.width;
    padding = ctx.padding;

    let l = null; // left value (x-coordinate)
    let t = null; // top value (y-coordinate)

    if (data != undefined) {
      l = get($xGet, data, xIndex);
      t = get($yGet, data, yIndex);
    }

    if (xData != undefined) {
      xScale = ctx.xScale;
      l = $xScale(xData);
    }

    if (yData != undefined) {
      yScale = ctx.yScale;
      t = $yScale(yData);
    }

    if (l != null) left = l.toString() + 'px';
    if (t != null) top = t.toString() + 'px';

    // get max width
    if (l != null) {
      const w = $ctxWidth - l + $padding.right - xOffset;
      maxWidth = `${w}px`;
    }
  }

  $: _xOffset = typeof xOffset === 'number' ? `${xOffset}px` : xOffset;
  $: _yOffset = typeof yOffset === 'number' ? `${yOffset}px` : yOffset;
</script>

<div
  class:html-text={true}
  {...$$restProps}
  style:left
  style:top
  style:max-width={maxWidth}
  style:transform="translate(calc({xTranslate[xAlign]} + {_xOffset}), calc({yTranslate[
    yAlign
  ]} + {_yOffset}))"
  style:--_color={$$restProps.fill || color || ''}
  style:--_outline={$$restProps.stroke || outline || ''}
  style:--_opacity={$$restProps.opacity || ''}
>
  <slot />
</div>

<style>
  div {
    --__color: var(--_color, var(--chart-color-text, var(--c-ui-black)));
    --__outline: var(--_outline, var(--chart-outline-text, white));
    --__opacity: var(--_opacity, var(--chart-opacity-text, 1));

    position: absolute;
    color: var(--__color);
    opacity: var(--__opacity);

    font-size: var(--font-size, var(--font-size-sm));
    font-weight: var(--font-weight, var(--font-weight-bold));
    font-style: var(--font-style, normal);
    line-height: var(--line-height, 1);
    background-color: var(--background-color, none);

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

  .georgia {
    font-family: Georgia, serif;
  }
</style>
