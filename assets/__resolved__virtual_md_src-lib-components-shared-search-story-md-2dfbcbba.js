const html = "<p>Input widget with an associated popup for suggestions.</p>\n<p><strong>CSS variables:</strong></p>\n<ul>\n<li><code>--ui-color-accent</code>: accent color <em>(default: blue)</em></li>\n</ul>\n<p><strong>The rendered markup is composed of:</strong></p>\n<ul>\n<li><code>.search</code>: assigned the given id, wrapper element</li>\n<li><code>.search__form</code>: form that wraps the label, input and buttons</li>\n<li><code>.search__label</code>: label</li>\n<li><code>.search__field</code>: input field that wraps the text input and buttons</li>\n<li><code>.search__input</code>: text input</li>\n<li><code>.search__button-submit</code>: submit button</li>\n<li><code>.search__suggestions</code>: list of suggestions (only visible if expanded)</li>\n<li><code>.search__suggestion</code>: with classes <code>.focused</code>, <code>.highlighted</code> and<br>\n<code>.selected</code> applied appropriately</li>\n</ul>\n";
const frontmatter = {};
const relativePath = "src/lib/components/shared/Search.story.md";
export {
  frontmatter,
  html,
  relativePath
};
