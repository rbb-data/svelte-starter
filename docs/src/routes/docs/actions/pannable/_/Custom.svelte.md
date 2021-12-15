<script>
  import APITable from '$lib/components/APITable.svelte';
  
  import DraggableCircleExample from './DraggableCircleExample.svelte';

  export let meta;
  const { name, description, params } = meta[1];
</script>

`pannable` recognizes when an element is interacted with, tracks a pointer's position, and dispatches three custom events:

- `panstart` when the interaction starts (exposes `{ x: number, y: number }`)
- `panmove` when the pointer is being moved (exposes `{ x: number, y: number, dx: number, dy: number }`)
- `panend` when the interaction ends (exposes `{ x: number, y: number }`)

Use as:

```svelte
<circle
  use:pannable={{ ignorePointers: ['mouse'] }}
  on:panstart={(e) => console.log('panning started', e.detail)}
  on:panmove={(e) => console.log('pointer is moving...', e.detail)}
  on:panend={(e) => console.log('panning ended', e.detail)}
  r="10"
/>
```

`ignorePointers` allows to ignore interactions from specific pointers.

## Dragging

`pannable.js` also exports an additional function `drag` that makes it easy to make an element draggable. For example, the blue circle on the right is draggable, try it!

<DraggableCircleExample />

`drag` can be configured to move an element along a specified axis or within given bounds. Check out its API:

<div class="wide">
<APITable {params} />
</div>
