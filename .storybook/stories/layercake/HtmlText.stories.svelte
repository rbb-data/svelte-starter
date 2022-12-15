<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Html, LayerCake, Svg } from 'layercake';

  import HtmlText from '$lib/components/layercake/HtmlText.svelte';
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

<Meta title="Viz/LayerCake/HtmlText" component={HtmlText} />

<Story name="Basic">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
      <Svg>
        <AxisX />
        <AxisY />
      </Svg>
      <Html>
        <HtmlText data={data[2]}>Multi-line text</HtmlText>
      </Html>
    </LayerCake>
  </div>
</Story>

<Story name="With Custom attributes">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
      <Svg>
        <AxisX />
        <AxisY />
      </Svg>
      <Html>
        <HtmlText
          data={data[2]}
          color="orange"
          outline="black"
          outline-width="2">Multi-line text</HtmlText
        >
      </Html>
    </LayerCake>
  </div>
</Story>

<Story name="With Custom offsets">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
      <Svg>
        <AxisX />
        <AxisY />
      </Svg>
      <Html>
        <HtmlText data={data[2]} xOffset={5} yOffset={5}>
          Multi-line text
        </HtmlText>
      </Html>
    </LayerCake>
  </div>
</Story>

<Story name="Align on x-axis">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
      <Svg>
        <Circle cx="50" cy="50" color="red" />
        <Circle cx="50" cy="100" color="red" />
        <Circle cx="50" cy="150" color="red" />
      </Svg>
      <Html>
        <HtmlText x="50px" y="50px" xAlign="left" outline="none">Left</HtmlText>
        <HtmlText x="50px" y="100px" xAlign="center" outline="none"
          >Center</HtmlText
        >
        <HtmlText x="50px" y="150px" xAlign="right" outline="none"
          >Right</HtmlText
        >
      </Html>
    </LayerCake>
  </div>
</Story>

<Story name="Align on y-axis">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
      <Svg>
        <Circle cx="30" cy="100" color="red" />
        <Circle cx="100" cy="100" color="red" />
        <Circle cx="170" cy="100" color="red" />
      </Svg>
      <Html>
        <HtmlText x="30px" y="100px" yAlign="bottom" outline="none">
          Bottom
        </HtmlText>
        <HtmlText x="100px" y="100px" yAlign="center" outline="none">
          Center
        </HtmlText>
        <HtmlText x="170px" y="100px" yAlign="top" outline="none">Top</HtmlText>
      </Html>
    </LayerCake>
  </div>
</Story>

<Story name="Within LayerCake">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
      <Svg>
        <AxisX />
        <AxisY />
      </Svg>
      <Html>
        <HtmlText data={data[2]}>Multi-line text</HtmlText>
      </Html>
    </LayerCake>
  </div>
</Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
