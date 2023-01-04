<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import { LayerCake, Svg } from 'layercake';

  import SvgText from '$lib/components/layercake/SvgText.svelte';
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

  let text = 'Text';
</script>

<Hst.Story
  group="layercake"
  title="SvgText"
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
          <SvgText data={data[2]}>{text}</SvgText>
        </Svg>
      </LayerCake>
    </div>

    <svelte:fragment slot="controls">
      <Hst.Text title="Text" bind:value={text} />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="With custom attributes">
    <div class="layercake">
      <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
        <Svg>
          <AxisX />
          <AxisY />
          <SvgText
            data={data[2]}
            color="orange"
            outline="black"
            outline-width="2"
          >
            {text}
          </SvgText>
        </Svg>
      </LayerCake>
    </div>

    <svelte:fragment slot="controls">
      <Hst.Text title="Text" bind:value={text} />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="With custom offsets">
    <div class="layercake">
      <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
        <Svg>
          <AxisX />
          <AxisY />
          <SvgText data={data[2]} xOffset={5} yOffset={5}>
            {text}
          </SvgText>
        </Svg>
      </LayerCake>
    </div>

    <svelte:fragment slot="controls">
      <Hst.Text title="Text" bind:value={text} />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="Align along x-axis">
    <div class="layercake">
      <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
        <Svg>
          <LineV x="50" color="red" />
          <SvgText x="50px" y="20px" xAlign="left" outline="none">Left</SvgText>
          <SvgText x="50px" y="60px" xAlign="center" outline="none">
            Center
          </SvgText>
          <SvgText x="50px" y="100px" xAlign="right" outline="none">
            Right
          </SvgText>
        </Svg>
      </LayerCake>
    </div>
  </Hst.Variant>

  <Hst.Variant title="Align on y-axis">
    <div class="layercake">
      <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
        <Svg>
          <LineH y="100" color="red" />
          <SvgText x="30px" y="100px" yAlign="bottom" outline="none">
            Bottom
          </SvgText>
          <SvgText x="100px" y="100px" yAlign="center" outline="none">
            Center
          </SvgText>
          <SvgText x="170px" y="100px" yAlign="top" outline="none">Top</SvgText>
        </Svg>
      </LayerCake>
    </div>
  </Hst.Variant>
</Hst.Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
