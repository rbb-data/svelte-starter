<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import BezierArrow from '$lib/components/shared/BezierArrow.svelte';
</script>

<Meta title="Viz/BezierArrow" component={BezierArrow} />

<Story name="Basic">
  <svg width="100" height="100">
    <BezierArrow start={[0, 0]} end={[100, 100]} />
  </svg>
</Story>

<Story name="Custom color">
  <svg width="100" height="100">
    <g class="custom-color">
      <BezierArrow start={[0, 0]} end={[100, 100]} />
    </g>
  </svg>
</Story>

<Story name="Thicker stroke">
  <svg width="100" height="100">
    <g class="thicker-stroke">
      <BezierArrow start={[0, 0]} end={[100, 100]} />
    </g>
  </svg>
</Story>

<Story name="Debug">
  <svg width="100" height="100">
    <BezierArrow start={[0, 0]} end={[100, 100]} debug />
  </svg>
</Story>

<Story name="Curve (specified by offsetting start and end points)">
  <svg width="100" height="100">
    <BezierArrow
      start={[0, 0]}
      end={[100, 100]}
      startHandleOffset={[40, 0]}
      endHandleOffset={[0, -40]}
      debug
    />
  </svg>
</Story>

<Story name="Curve (start and end handle manually specified)">
  <svg width="100" height="100">
    <BezierArrow
      start={[0, 0]}
      end={[100, 100]}
      startHandle={[40, 0]}
      endHandle={[100, 60]}
      debug
    />
  </svg>
</Story>

<Story name="Arrow heads on both sides">
  <svg width="100" height="100">
    <BezierArrow
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
    <BezierArrow
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
    <BezierArrow
      start={[0, 0]}
      end={[100, 100]}
      startHandle={[40, 0]}
      endHandle={[100, 60]}
      headLength={12}
      debug
    />
  </svg>
</Story>

<style>
  svg {
    overflow: visible;
  }

  .custom-color {
    --arrow-color: var(--c-ui-accent-red);
  }

  .thicker-stroke {
    --arrow-width: 2;
  }
</style>
