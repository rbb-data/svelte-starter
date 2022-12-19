<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
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
</script>

<Meta title="Viz/LayerCake/Arrow" component={Arrow} />

<Story name="Basic">
  <svg width="100" height="100">
    <Arrow />
  </svg>
</Story>

<Story name="Custom coordinates">
  <svg width="100" height="100">
    <Arrow start={[0, 0]} end={[100, 100]} />
  </svg>
</Story>

<Story name="Custom color">
  <svg width="100" height="100">
    <Arrow start={[0, 0]} end={[100, 100]} color="orange" />
  </svg>
</Story>

<Story name="Thicker stroke">
  <svg width="100" height="100">
    <Arrow start={[0, 0]} end={[100, 100]} width={2} />
  </svg>
</Story>

<Story name="Debug">
  <svg width="100" height="100">
    <Arrow start={[0, 0]} end={[100, 100]} debug />
  </svg>
</Story>

<Story name="Bézier Curve">
  <svg width="100" height="100">
    <Arrow
      start={[0, 0]}
      end={[100, 100]}
      startHandleOffset={[40, 0]}
      endHandleOffset={[0, -40]}
      debug
    />
  </svg>
</Story>

<Story name="Arrow heads on both sides">
  <svg width="100" height="100">
    <Arrow
      start={[0, 0]}
      end={[100, 100]}
      startHandle={[40, 0]}
      endHandle={[100, 60]}
      headAnchor="both"
      debug
    />
  </svg>
</Story>

<Story name="Narrow arrow head">
  <svg width="100" height="100">
    <Arrow
      start={[0, 0]}
      end={[100, 100]}
      startHandle={[40, 0]}
      endHandle={[100, 60]}
      headAngle={30}
      debug
    />
  </svg>
</Story>

<Story name="Large arrow head">
  <svg width="100" height="100">
    <Arrow
      start={[0, 0]}
      end={[100, 100]}
      startHandle={[40, 0]}
      endHandle={[100, 60]}
      headLength={12}
      debug
    />
  </svg>
</Story>

<Story name="Within LayerCake">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
      <Svg>
        <AxisX />
        <AxisY />

        <Circle data={data[0]} r="5" />
        <Circle data={data[1]} r="5" />

        <Arrow data={[data[0], data[1]]} />
      </Svg>
    </LayerCake>
  </div>
</Story>

<style>
  svg {
    overflow: visible;
  }

  .layercake {
    height: 200px;
  }
</style>
