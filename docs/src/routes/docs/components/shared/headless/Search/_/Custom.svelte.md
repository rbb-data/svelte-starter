<script>
  import BasicFuzzysearchExample from './BasicFuzzysearchExample.svelte';
  import BasicGeolocalizationExample from './BasicGeolocalizationExample.svelte';
  import CustomButtonExample from './CustomButtonExample.svelte';
  import StyledSearchExample from './StyledSearchExample.svelte';
</script>

As headless components don't control styling, this renders a _browser-styled_ form containing an input field as well as a reset and submit button by default.

<BasicFuzzysearchExample />

The prop `search` can be any valid Svelte action that handles the relevant events appropriately (see API table). The library comes with two options out of the box, `fuzzysearch` and `geolocalization`.

<BasicGeolocalizationExample />

Binding to `result` is a common pattern to access the currently selected item.

Custom reset und submit buttons can be passed as slots. If you do so, make sure to add the appropriate types, or the form will not work as expected.

<CustomButtonExample />

**A11y:** If you replace the inside of a button with an icon, make sure to add an `aria-label` to the button. This ensures the button is meaningfully announced by screen readers.

Headless components don't come with any styling and are fully customizable. The currently selected suggestion is marked by adding `.active` to the list of classes. An example of how to apply styles to `Search`:

<StyledSearchExample />

Prefixing global CSS selectors with the current wrapper class ensures that the styles are scoped to this element.

**Note:** By default the currently selected suggestion is not highlighted. Setting `debug` to `true` applies minimal styling to the highlighted selection for debugging purposes (however, this is not meant for production!).
