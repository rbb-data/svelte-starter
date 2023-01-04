Arrow, either as straight line or Bézier curve.

A Bézier curve is defined by a start and end point, as well as two control
points, one for each end. See
[MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#b%C3%A9zier_curves)
for more information.

**CSS variables:**

- `--arrow-color`: color of the arrow _(default: black)_
- `--arrow-width`: stroke width of the arrow _(default: 1)_
- `--arrow-opacity`: opacity of the arrow _(default: 1)_

**The rendered markup is composed of:**

- `.arrow`: group
- `.arrow__shape`: path
