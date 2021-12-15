<script>
  import Showcase from '$lib/components/Showcase.svelte';
  import SvelteSnippet from '$lib/components/SvelteSnippet.svelte';

  import Basic from './Basic.svelte';

  const script = `import { tooltip } from '@rbb-data/svelte-starter/actions';

// can render anything but is typically absolutley positioned
import Tooltip from './Tooltip.svelte';`;

  const markup = `<!-- 'Tooltip' must render markup id'ed by 'tooltip'-->
<div
  use:tooltip={{
    id: 'tooltip',
    Component: Tooltip,
    options: { props: { message: 'Hello!' } },
  }}
>
  Hover over me to see a tooltip
</div>`;
</script>

<div class="wide">
  <Showcase>
    <SvelteSnippet
      slot="left"
      title="BasicTooltipExample.svelte"
      {script}
      {markup}
    />
    <Basic slot="right" />
  </Showcase>
</div>
