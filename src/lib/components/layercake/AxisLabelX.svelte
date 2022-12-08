<script lang="ts">
  import { getContext } from 'svelte/internal';

  import SvgText from './SvgText.svelte';

  import type { LayerCakeContext } from './types';

  type D = $$Generic;

  const { width, height, padding } =
    getContext<LayerCakeContext<D>>('LayerCake');
</script>

<SvgText
  class="label"
  x={$width}
  y={$height}
  yOffset={$padding.bottom}
  xAlign="right"
>
  <slot>Label missing</slot>
</SvgText>
