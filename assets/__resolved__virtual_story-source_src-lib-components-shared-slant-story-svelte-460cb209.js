const __resolved__virtual_storySource_srcLibComponentsSharedSlantStorySvelte = `<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import Slant from './Slant.svelte';
  import * as tokens from '$lib/tokens';

  let text = 'Text';
  let position: 'right' | 'left' | 'both' = 'right';
  let direction: 'forward' | 'backward' = 'forward';
<\/script>

<Hst.Story group="ui" title="Slant" layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Basic">
    <Slant {position} {direction} />
  </Hst.Variant>

  <Hst.Variant title="With text">
    <Slant {position} {direction}>
      {text}
    </Slant>

    <svelte:fragment slot="controls">
      <Hst.Text title="Text" bind:value={text} />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="With custom colors">
    <Slant
      {position}
      {direction}
      backgroundColor={tokens.cYellow200}
      color="black"
    >
      {text}
    </Slant>

    <svelte:fragment slot="controls">
      <Hst.Text title="Text" bind:value={text} />
    </svelte:fragment>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Radio
      title="Position"
      options={[
        { label: 'Right', value: 'right' },
        { label: 'Left', value: 'left' },
        { label: 'Both', value: 'both' },
      ]}
      bind:value={position}
    />
    <Hst.Radio
      title="Direction"
      options={[
        { label: 'Forward', value: 'forward' },
        { label: 'Backward', value: 'backward' },
      ]}
      bind:value={direction}
    />
  </svelte:fragment>
</Hst.Story>
`;
export {
  __resolved__virtual_storySource_srcLibComponentsSharedSlantStorySvelte as default
};
