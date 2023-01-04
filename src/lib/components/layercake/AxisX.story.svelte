<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import { LayerCake, Svg } from 'layercake';

  import AxisX from '$lib/components/layercake/AxisX.svelte';

  const data = [
    { x: 0, y: 10 },
    { x: 10, y: 30 },
    { x: 20, y: 25 },
    { x: 30, y: 50 },
    { x: 40, y: 10 },
    { x: 50, y: 0 },
  ];

  let showDomainLine = true;
  let showGridLines = false;
  let showTickLines = true;
</script>

<Hst.Story
  group="layercake"
  title="AxisX"
  layout={{ type: 'grid', width: '100%' }}
>
  <Hst.Variant title="Basic">
    <div class="layercake">
      <LayerCake
        {data}
        padding={{ top: 24, right: 12, bottom: 24, left: 12 }}
        x="x"
        y="y"
      >
        <Svg>
          <AxisX {showDomainLine} {showGridLines} {showTickLines} />
        </Svg>
      </LayerCake>
    </div>
  </Hst.Variant>

  <Hst.Variant title="On top">
    <div class="layercake">
      <LayerCake
        {data}
        padding={{ top: 24, right: 12, bottom: 24, left: 12 }}
        x="x"
        y="y"
      >
        <Svg>
          <AxisX {showDomainLine} {showGridLines} {showTickLines} onTop />
        </Svg>
      </LayerCake>
    </div>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Checkbox title="Show domain line" bind:value={showDomainLine} />
    <Hst.Checkbox title="Show grid lines" bind:value={showGridLines} />
    <Hst.Checkbox title="Show tick lines" bind:value={showTickLines} />
  </svelte:fragment>
</Hst.Story>

<style>
  .layercake {
    height: 100px;
  }
</style>
