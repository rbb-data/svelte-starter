<script lang="ts">
  /**
   * X-Axis label
   *
   * @component
   */

  import { getContext } from 'svelte/internal';

  import SvgText from './SvgText.svelte';

  import type { LayerCakeContext } from './types';

  type D = $$Generic;

  const { width, height, padding } =
    getContext<LayerCakeContext<D>>('LayerCake');
</script>

<SvgText
  x={$width}
  y={$height}
  yOffset={$padding.bottom}
  xAlign="right"
  {...$$restProps}
  class="label {$$restProps.class || ''}"
>
  <slot>Label missing</slot>
</SvgText>
