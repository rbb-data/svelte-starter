<script lang="ts">
  import { base } from '$app/paths';
  import { dev } from '$app/environment';

  /**
   * internal app url that the link points to
   *
   * Note: must start with a slash
   */
  export let href: string;

  $: _href = base + href + (dev ? '' : href === '/' ? 'index.html' : '.html');
</script>

<a {...$$restProps} href={_href} rel="{$$restProps.rel || ''} external">
  <slot />
</a>
