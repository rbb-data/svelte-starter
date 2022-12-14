<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { LayerCake, Svg } from 'layercake';

  import Group from '$lib/components/layercake/Group.svelte';
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

<Meta title="Viz/LayerCake/Group" component={Group} />

<Story name="Basic">
  <div class="layercake">
    <LayerCake {data} padding={{ left: 20, bottom: 30 }} x="x" y="y">
      <Svg>
        <AxisX />
        <AxisY />

        <Group {data} let:d>
          <Circle data={d} />
        </Group>
      </Svg>
    </LayerCake>
  </div>
</Story>

<style>
  .layercake {
    height: 200px;
  }
</style>
