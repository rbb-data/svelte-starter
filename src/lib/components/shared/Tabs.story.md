`<Tabs />` and `<TabPanels />` work together to orchestrate horizontally
aligned tabs. This component controls the tabs itself (i.e. the clickable
elements rendered as buttons).

**CSS variables:**

- `--ui-color-accent`: accent color _(default: blue)_
- `--ui-color-secondary`: secondary color _(default: light gray)_

**The rendered markup is composed of:**

- `.tabs`: assigned the given id
- `.tabs__tab`: with classes `.active` and `.disabled` applied appropriately

**Note:** Must be used in conjunction with `<TabPanels />`.
