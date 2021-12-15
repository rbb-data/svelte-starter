<script>
  import { tooltip } from '@rbb-data/svelte-starter/actions';

  // can render anything but is typically absolutley positioned
  import Tooltip from './Tooltip.svelte';
</script>

<!-- 'Tooltip' must render markup id'ed by 'tooltip'-->
<div
  use:tooltip={{
    id: 'tooltip',
    Component: Tooltip,
    options: { props: { message: 'Hello!' } },
  }}
>
  Hover over me to see a tooltip
</div>

<style>
  div {
    border: 1px dashed black;
    height: min-content;
  }
</style>
