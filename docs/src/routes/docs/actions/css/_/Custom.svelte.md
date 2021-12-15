<script>
  import ColorPickerExample from './ColorPickerExample.svelte';
</script>

For example:

```svelte
<div use:css={{ 'my-dynamically-set-color': 'steelblue' }}>...</div>
```

sets the CSS variable `--my-dynamically-set-color` to `'steelblue'` on that element. The variable can then be referenced in the style tag like any other CSS variable:

```css
div {
  background-color: var(--my-dynamically-set-color);
}
```

## Example

Check out this example of an element whose background color is controlled by user input:

<ColorPickerExample />
