const __resolved__virtual_storySource_srcLibComponentsLayercakeArrowStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  export let Hst: Hst;

  import { LayerCake, Svg } from 'layercake';

  import Arrow from '$lib/components/layercake/Arrow.svelte';
  import Circle from '$lib/components/layercake/Circle.svelte';
  import AxisX from '$lib/components/layercake/AxisX.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';

  const data = [
    { x: 0, y: 10 },
    { x: 10, y: 30 },
    { x: 20, y: 25 },
    { x: 30, y: 50 },
    { x: 40, y: 10 },
    { x: 50, y: 0 },
  ];

  let startX = 0;
  let startY = 50;
  let endX = 80;
  let endY = 50;
  let startHandleOffsetX = 20;
  let startHandleOffsetY = -20;
  let endHandleOffsetX = -20;
  let endHandleOffsetY = -20;
  let headAnchor: 'start' | 'end' | 'both' = 'end';
  let headLength: number;
  let headAngle: number;
  let debug = false;
<\/script>

<Hst.Story
  group="layercake"
  title="Arrow"
  layout={{ type: 'grid', width: '100%' }}
>
  <Hst.Variant title="Basic">
    <svg width="100" height="100">
      <Arrow
        start={[startX, startY]}
        end={[endX, endY]}
        {headAnchor}
        {headLength}
        {headAngle}
        {debug}
      />
    </svg>
  </Hst.Variant>

  <Hst.Variant title="Curve">
    <svg width="100" height="100">
      <Arrow
        start={[startX, startY]}
        end={[endX, endY]}
        startHandleOffset={[startHandleOffsetX, startHandleOffsetY]}
        endHandleOffset={[endHandleOffsetX, endHandleOffsetY]}
        {headAnchor}
        {headLength}
        {headAngle}
        {debug}
      />
    </svg>

    <svelte:fragment slot="controls">
      <Hst.Number
        title="Start handle offset (x-coord)"
        bind:value={startHandleOffsetX}
      />
      <Hst.Number
        title="Start handle offset (y-coord)"
        bind:value={startHandleOffsetY}
      />
      <Hst.Number
        title="End handle offset (x-coord)"
        bind:value={endHandleOffsetX}
      />
      <Hst.Number
        title="End handle offset (y-coord)"
        bind:value={endHandleOffsetY}
      />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="Within chart">
    <div class="layercake">
      <LayerCake
        {data}
        padding={{ top: 6, right: 8, bottom: 24, left: 24 }}
        x="x"
        y="y"
      >
        <Svg>
          <AxisX />
          <AxisY />

          <Circle data={data[0]} r="5" />
          <Circle data={data[1]} r="5" />

          <Arrow data={[data[0], data[1]]} />
        </Svg>
      </LayerCake>
    </div>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Number title="Start (x-coord)" bind:value={startX} />
    <Hst.Number title="Start (y-coord)" bind:value={startY} />
    <Hst.Number title="End (x-coord)" bind:value={endX} />
    <Hst.Number title="End (y-coord)" bind:value={endY} />

    <Hst.Radio
      title="Head anchor"
      options={[
        { label: 'Start', value: 'start' },
        { label: 'End', value: 'end' },
        { label: 'Both', value: 'both' },
      ]}
      bind:value={headAnchor}
    />
    <Hst.Number title="Head length" bind:value={headLength} />
    <Hst.Number title="Head angle" bind:value={headAngle} />
    <Hst.Checkbox title="Debug" bind:value={debug} />
  </svelte:fragment>
</Hst.Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
`;
export {
  __resolved__virtual_storySource_srcLibComponentsLayercakeArrowStorySvelte as default
};
