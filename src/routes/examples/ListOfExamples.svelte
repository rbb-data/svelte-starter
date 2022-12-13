<script lang="ts">
  import InternalLink from '$lib/components/shared/InternalLink.svelte';

  const examples = [
    { label: 'Liniendiagramm', href: '/examples/line-chart' },
    { label: 'Scatterplot', href: '/examples/scatter-plot' },
    {
      label: 'Balkendiagramm (horizontal)',
      href: '/examples/horizontal-bar-chart',
    },
    {
      label: 'Balkendiagramm (vertikal)',
      href: '/examples/vertical-bar-chart',
    },
  ];
</script>

<ul>
  {#each examples as { label, href }}
    <li>
      <InternalLink {href}>
        {label}
      </InternalLink>
    </li>
  {/each}
</ul>
