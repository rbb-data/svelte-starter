<script lang="ts">
  import InternalLink from '$lib/components/shared/InternalLink.svelte';
</script>

<nav>
  <ul>
    <li>
      <InternalLink href="/">← Home</InternalLink>
    </li>
    <li>
      <InternalLink href="/examples">← Beispiele</InternalLink>
    </li>
  </ul>
</nav>

<slot />

<style lang="scss">
  nav {
    margin-bottom: var(--s-rem-6);
  }

  ul {
    list-style: none;
    padding: 0;
  }
</style>
