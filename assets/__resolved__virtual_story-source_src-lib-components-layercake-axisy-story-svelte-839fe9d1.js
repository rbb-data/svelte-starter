const __resolved__virtual_storySource_srcLibComponentsLayercakeAxisyStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  export let Hst: Hst;

  import { LayerCake, Svg } from 'layercake';

  import AxisY from '$lib/components/layercake/AxisY.svelte';

  const data = [
    { x: 0, y: 10 },
    { x: 10, y: 30 },
    { x: 20, y: 25 },
    { x: 30, y: 50 },
    { x: 40, y: 10 },
    { x: 50, y: 0 },
  ];

  let showDomainLine = false;
  let showGridLines = true;
  let showTickLines = false;
<\/script>

<Hst.Story
  group="layercake"
  title="AxisY"
  layout={{ type: 'grid', width: '100%' }}
>
  <div class="layercake">
    <LayerCake
      {data}
      padding={{ top: 24, right: 12, bottom: 24, left: 24 }}
      x="x"
      y="y"
    >
      <Svg>
        <AxisY {showDomainLine} {showGridLines} {showTickLines} />
      </Svg>
    </LayerCake>
  </div>

  <svelte:fragment slot="controls">
    <Hst.Checkbox title="Show domain line" bind:value={showDomainLine} />
    <Hst.Checkbox title="Show grid lines" bind:value={showGridLines} />
    <Hst.Checkbox title="Show tick lines" bind:value={showTickLines} />
  </svelte:fragment>
</Hst.Story>

<style>
  .layercake {
    height: 250px;
  }
</style>
`;
export {
  __resolved__virtual_storySource_srcLibComponentsLayercakeAxisyStorySvelte as default
};
