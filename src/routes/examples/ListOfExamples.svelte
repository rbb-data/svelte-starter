<script lang="ts">
  import { ascending } from 'd3-array';

  import InternalLink from '$lib/components/shared/InternalLink.svelte';

  const examples = [
    { label: 'Line chart', href: '/examples/line-chart' },
    { label: 'Scatter plot', href: '/examples/scatter-plot' },
    {
      label: 'Bar chart',
      href: '/examples/bar-chart',
    },
    {
      label: 'Bar chart (vertical)',
      href: '/examples/bar-chart-vertical',
    },
    {
      label: 'Stacked bar chart',
      href: '/examples/stacked-bar-chart',
    },
    {
      label: 'Stacked bar chart (vertical)',
      href: '/examples/stacked-bar-chart-vertical',
    },
    {
      label: 'Slope chart',
      href: '/examples/slope-chart',
    },
    {
      label: 'Area chart',
      href: '/examples/area-chart',
    },
    {
      label: 'Stacked area chart',
      href: '/examples/stacked-area-chart',
    },
  ].sort((a, b) => ascending(a.label, b.label));
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
