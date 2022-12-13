<script lang="ts">
  import { group, type GroupOptions } from 'friendly-charts';

  type D = $$Generic;

  export let data: D[];

  export let label: GroupOptions['label'] | undefined = undefined;
  export let type: GroupOptions['type'] | undefined = undefined;

  let friendly: GroupOptions;
  $: if (label != undefined) {
    friendly = {
      id: $$restProps.id,
      label,
      type,
    };
  }
</script>

<g class={$$restProps.class} style={$$restProps.style} use:group={friendly}>
  {#each data as d}
    <slot {d} />
  {/each}
</g>
