<script lang="ts">
  /**
   * Y-Axis label
   */

  import { getContext } from 'svelte/internal';

  import SvgText from './SvgText.svelte';

  import type { LayerCakeContext } from './types';

  type D = $$Generic;

  const { padding } = getContext<LayerCakeContext<D>>('LayerCake');
</script>

<SvgText
  xOffset={-$padding.left}
  yOffset={-$padding.top}
  xAlign="left"
  yAlign="top"
  {...$$restProps}
  class="label {$$restProps.class || ''}"
>
  <slot>Label missing</slot>
</SvgText>
