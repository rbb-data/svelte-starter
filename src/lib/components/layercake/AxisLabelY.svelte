<script lang="ts">
  import { getContext } from 'svelte/internal';

  import SvgText from './SvgText.svelte';

  import type { LayerCakeContext } from './types';

  type D = $$Generic;

  const { padding } = getContext<LayerCakeContext<D>>('LayerCake');
</script>

<SvgText
  class="label"
  xOffset={-$padding.left}
  yOffset={-$padding.top}
  xAlign="left"
  yAlign="top"
>
  <slot>Label missing</slot>
</SvgText>
