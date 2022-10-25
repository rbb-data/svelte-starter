<script>
  import { base } from '$app/paths';
  import { dev } from '$app/env';

  /**
   * internal app url that the link points to
   *
   * Note: must start with a slash
   *
   * @type {string}
   */
  export let href;

  $: _href = base + href + (dev ? '' : 'index.html');
</script>

<a {...$$restProps} href={_href} rel="{$$restProps.rel || ''} external">
  <slot />
</a>
