<script lang="ts">
  import InternalLink from '$lib/components/shared/InternalLink.svelte';

  const examples = [{ label: 'Liniendiagramm', href: '/examples/line-chart' }];
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
