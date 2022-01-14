<script>
  import BasicSvgExample from './BasicSvgExample.svelte';
  import BoundedSvgExample from './BoundedSvgExample.svelte';
</script>

For a good explanation of the implemented sizing pattern for charts, check out [Amelia Wattenberger's blog post](https://wattenberger.com/blog/react-and-d3#sizing-responsivity).

The component shows the outline of the SVG (dashed) and the canvas (light blue) in debug mode:

<BasicSvgExample />

Typically, one would bind to the internally managed `boundedWidth` and
`boundedHeight` and pass some SVG elements as props:

<BoundedSvgExample />
