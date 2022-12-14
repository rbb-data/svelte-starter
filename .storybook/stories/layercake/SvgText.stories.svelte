<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { LayerCake, Svg } from 'layercake';

  import SvgText from '$lib/components/layercake/SvgText.svelte';
  import AxisX from '$lib/components/layercake/AxisX.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';
  import Circle from '$lib/components/layercake/Circle.svelte';

  const data = [
    { x: 0, y: 10 },
    { x: 10, y: 30 },
    { x: 20, y: 25 },
    { x: 30, y: 50 },
    { x: 40, y: 10 },
    { x: 50, y: 0 },
  ];
</script>

<Meta title="Viz/LayerCake/SvgText" component={SvgText} />

<Story name="Basic">
  <svg width="150" height="50">
    <SvgText x="10" y="50%">Single-line text</SvgText>
  </svg>
</Story>

<Story name="Custom attributes">
  <svg width="150" height="50">
    <SvgText x="10" y="50%" color="orange" outline="black" outline-width="2">
      Single-line text
    </SvgText>
  </svg>
</Story>

<Story name="With Custom offsets">
  <svg width="150" height="50">
    <SvgText x="10" y="50%" xOffset={5} yOffset={5}>Single-line text</SvgText>
  </svg>
</Story>

<Story name="Align on x-axis">
  <svg width="100" height="100">
    <Circle cx="50" cy="25%" color="red" />
    <SvgText x="50" y="25%" xAlign="left" outline="none">Left</SvgText>

    <Circle cx="50" cy="50%" color="red" />
    <SvgText x="50" y="50%" xAlign="center" outline="none">Center</SvgText>

    <Circle cx="50" cy="75%" color="red" />
    <SvgText x="50" y="75%" xAlign="right" outline="none">Right</SvgText>
  </svg>
</Story>

<Story name="Align on y-axis">
  <svg width="300" height="100">
    <Circle cx="75%" cy="50%" color="red" />
    <SvgText x="75%" y="50%" yAlign="top" outline="none">Top</SvgText>

    <Circle cx="50%" cy="50%" color="red" />
    <SvgText x="50%" y="50%" yAlign="center" outline="none">Center</SvgText>

    <Circle cx="25%" cy="50%" color="red" />
    <SvgText x="25%" y="50%" yAlign="bottom" outline="none">Bottom</SvgText>
  </svg>
</Story>

<Story name="Within LayerCake">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
      <Svg>
        <AxisX />
        <AxisY />

        <SvgText data={data[2]}>Single-line text</SvgText>
      </Svg>
    </LayerCake>
  </div>
</Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
