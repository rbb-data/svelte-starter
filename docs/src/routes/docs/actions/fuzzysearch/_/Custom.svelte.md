This action fuzzy searches user input against a given data set. It uses [fuzzysort](https://github.com/farzher/fuzzysort) behind the scenes. Use as:

```svelte
<input
  use:fuzzysearch={{ data }}
  on:search={(e) => console.log('current suggestions:', e.detail.suggestions)}
  on:result={(e) => console.log('user-selected result:', e.detail.result)}
/>
```

The `data` argument that is passed to `fuzzysearch` can either be a list of strings, or a list of objects. In case of the latter, you can pass a `key` that the data is then searched on.

**Dispatched events:** `search` `result`

- `search` is dispatched on the input event and exposes the current list of suggestions (of type `Item[]`)
- `result` is dispatched on the change event and exposes the user-selected result if any (of type `Item | null`)
