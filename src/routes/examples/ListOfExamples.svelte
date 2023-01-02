<script lang="ts">
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
