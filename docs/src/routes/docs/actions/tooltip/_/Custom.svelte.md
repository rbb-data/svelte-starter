<script>
  import BasicTooltipExample from './BasicTooltipExample.svelte';
</script>

`tooltip` creates and destroys a (tooltip) component on interaction with an element. Check out this demo where the `Tooltip` component is rendered dynamically on hover (or touch) with props as given in `options.props`:

<BasicTooltipExample />

The initialization `options` are passed to `Component` on creation; see [Svelte's docs](https://svelte.dev/docs#Creating_a_component) for more information. `Component` is rendered into `document.body` by default.

**Note:** `Component` must render an element that is uniquely identified by `id`.
