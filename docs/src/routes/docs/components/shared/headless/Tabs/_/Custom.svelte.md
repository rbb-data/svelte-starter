<script>
  import BasicTabsExample from './BasicTabsExample.svelte';
  import ObjectTabsExample from './ObjectTabsExample.svelte';
  import StyledTabsExample from './StyledTabsExample.svelte';
</script>

The active tab is tracked internally and marked by adding the class `.active` (no default styles are applied to the active element however, unless in `debug` mode).

`Tabs` exposes two slot props:

- `tab` is an element in `tabs`
- `active` is true if `tab` is currently selected

The most basic usage could look like:

<BasicTabsExample />

Usually, tabs are more complex and a reference to the currently selected tab is needed:

<ObjectTabsExample />

The style of `Tabs` is fully customizable:

<StyledTabsExample />
