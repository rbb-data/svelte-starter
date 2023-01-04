const __resolved__virtual_storySource_srcLibComponentsLayercakeHtmltextStorySvelte = `<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import { LayerCake, Svg, Html } from 'layercake';

  import HtmlText from '$lib/components/layercake/HtmlText.svelte';
  import AxisX from '$lib/components/layercake/AxisX.svelte';
  import AxisY from '$lib/components/layercake/AxisY.svelte';
  import LineV from './LineV.svelte';
  import LineH from './LineH.svelte';

  const data = [
    { x: 0, y: 10 },
    { x: 10, y: 30 },
    { x: 20, y: 25 },
    { x: 30, y: 50 },
    { x: 40, y: 10 },
    { x: 50, y: 0 },
  ];

  let text = 'Multi-line text with a line break';
<\/script>

<Hst.Story
  group="layercake"
  title="HtmlText"
  layout={{ type: 'grid', width: '100%' }}
>
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
        </Svg>
        <Html>
          <HtmlText data={data[4]}>{text}</HtmlText>
        </Html>
      </LayerCake>
    </div>

    <svelte:fragment slot="controls">
      <Hst.Text title="Text" bind:value={text} />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="With custom attributes">
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
        </Svg>
        <Html>
          <HtmlText
            data={data[4]}
            color="orange"
            outline="black"
            outline-width="2"
          >
            {text}
          </HtmlText>
        </Html>
      </LayerCake>
    </div>

    <svelte:fragment slot="controls">
      <Hst.Text title="Text" bind:value={text} />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="With custom offsets">
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
        </Svg>
        <Html>
          <HtmlText data={data[4]} xOffset={5} yOffset={5}>
            {text}
          </HtmlText>
        </Html>
      </LayerCake>
    </div>

    <svelte:fragment slot="controls">
      <Hst.Text title="Text" bind:value={text} />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="Align along x-axis">
    <div class="layercake">
      <LayerCake
        {data}
        padding={{ top: 6, right: 8, bottom: 24, left: 24 }}
        x="x"
        y="y"
      >
        <Svg>
          <LineV x="50" color="red" />
        </Svg>
        <Html>
          <HtmlText x="50px" y="20px" xAlign="left" outline="none">
            Left
          </HtmlText>
          <HtmlText x="50px" y="60px" xAlign="center" outline="none">
            Center
          </HtmlText>
          <HtmlText x="50px" y="100px" xAlign="right" outline="none">
            Right
          </HtmlText>
        </Html>
      </LayerCake>
    </div>
  </Hst.Variant>

  <Hst.Variant title="Align on y-axis">
    <div class="layercake">
      <LayerCake
        {data}
        padding={{ top: 6, right: 8, bottom: 24, left: 24 }}
        x="x"
        y="y"
      >
        <Svg>
          <LineH y="100" color="red" />
        </Svg>
        <Html>
          <HtmlText x="30px" y="100px" yAlign="bottom" outline="none">
            Bottom
          </HtmlText>
          <HtmlText x="100px" y="100px" yAlign="center" outline="none">
            Center
          </HtmlText>
          <HtmlText x="170px" y="100px" yAlign="top" outline="none">
            Top
          </HtmlText>
        </Html>
      </LayerCake>
    </div>
  </Hst.Variant>
</Hst.Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
`;
export {
  __resolved__virtual_storySource_srcLibComponentsLayercakeHtmltextStorySvelte as default
};
