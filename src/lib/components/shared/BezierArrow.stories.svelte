<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Svg from './Svg.svelte';
  import BezierArrow from './BezierArrow.svelte';
</script>

<Meta
  title="Data Viz/BezierArrow"
  component={BezierArrow}
  argTypes={{
    start: {
      // @ts-ignore
      type: { required: true },
    },
    end: {
      // @ts-ignore
      type: { required: true },
    },
    startHandleOffset: {
      table: {
        defaultValue: { summary: '[0, 0]' },
      },
    },
    endHandleOffset: {
      table: {
        defaultValue: { summary: '[0, 0]' },
      },
    },
  }}
/>

<Story name="Basic">
  <Svg width={100} height={100}>
    <BezierArrow start={[0, 0]} end={[100, 100]} />
  </Svg>
</Story>

<Story name="Debug">
  <Svg width={100} height={100}>
    <BezierArrow start={[0, 0]} end={[100, 100]} debug />
  </Svg>
</Story>

<Story name="Curve (specified by offsetting start and end points)">
  <Svg width={100} height={100}>
    <BezierArrow
      start={[0, 0]}
      end={[100, 100]}
      startHandleOffset={[40, 0]}
      endHandleOffset={[0, -40]}
      debug
    />
  </Svg>
</Story>

<Story name="Curve (start and end handle manually specified)">
  <Svg width={100} height={100}>
    <BezierArrow
      start={[0, 0]}
      end={[100, 100]}
      startHandle={[40, 0]}
      endHandle={[100, 60]}
      debug
    />
  </Svg>
</Story>

<Story name="Arrow heads on both sides">
  <Svg width={100} height={100}>
    <BezierArrow
      start={[0, 0]}
      end={[100, 100]}
      startHandle={[40, 0]}
      endHandle={[100, 60]}
      headAnchor="both"
      debug
    />
  </Svg>
</Story>

<Story name="Narrow arrow head">
  <Svg width={100} height={100}>
    <BezierArrow
      start={[0, 0]}
      end={[100, 100]}
      startHandle={[40, 0]}
      endHandle={[100, 60]}
      headAngle={30}
      debug
    />
  </Svg>
</Story>

<Story name="Large arrow head">
  <Svg width={100} height={100}>
    <BezierArrow
      start={[0, 0]}
      end={[100, 100]}
      startHandle={[40, 0]}
      endHandle={[100, 60]}
      headLength={12}
      debug
    />
  </Svg>
</Story>
