Input widget with an associated popup for suggestions.

**CSS variables:**

- `--ui-color-accent`: accent color _(default: blue)_

**The rendered markup is composed of:**

- `.search`: assigned the given id, wrapper element
- `.search__form`: form that wraps the label, input and buttons
- `.search__label`: label
- `.search__field`: input field that wraps the text input and buttons
- `.search__input`: text input
- `.search__button-submit`: submit button
- `.search__suggestions`: list of suggestions (only visible if expanded)
- `.search__suggestion`: with classes `.focused`, `.highlighted` and
  `.selected` applied appropriately
