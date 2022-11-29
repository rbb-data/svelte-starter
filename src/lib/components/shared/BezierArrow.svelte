<script>
  /**
   * Bézier curve, to be embedded within an SVG.
   *
   * A Bézier curve is defined by a start and end point, as well as two control
   * points, one for each end. See
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#b%C3%A9zier_curves)
   * for more information.
   *
   * CSS variables:
   *
   * - `--arrow-color`: color of the arrow _(default: black)_
   * - `--arrow-width`: stroke width of the arrow _(default: 1)_
   *
   * @component
   */

  /**
   * start coordinates
   *
   * @type {number[]}
   */
  export let start;

  /**
   * end coordinates
   *
   * @type {number[]}
   */
  export let end;

  /**
   * bezier handle offset from start coordinates
   *
   * @type {number[]}
   */
  export let startHandleOffset = [0, 0];

  /**
   * bezier handle offset from end coordinates
   *
   * @type {number[]}
   */
  export let endHandleOffset = [0, 0];

  /**
   * start bezier handle coordinates; if given, `startHandleOffset` is ignored
   *
   * @type {number[] | undefined}
   */
  export let startHandle = undefined;

  /**
   * end bezier handle coordinates; if given, `endHandleOffset` is ignored
   *
   * @type {number[] | undefined}
   */
  export let endHandle = undefined;

  /**
   * position of the arrow head
   *
   * @type {'start' | 'end' | 'both'}
   */
  export let headAnchor = 'end';

  /**
   * length of the arrow head
   *
   * @type {number | undefined}
   */
  export let headLength = undefined;

  /** angle of the arrow head */
  export let headAngle = 55;

  /** renders bezier handle points for debugging */
  export let debug = false;

  /**
   * @param {number[]} p1
   * @param {number[]} p2
   */
  const dist = (p1, p2) =>
    Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));

  /**
   * @param {number} n
   * @param {number} min
   * @param {number} max
   */
  const clamp = (n, min = 0, max = 1) => Math.min(Math.max(n, min), max);

  /**
   * @param {number[]} p1
   * @param {number[]} p2
   */
  const equals = (p1, p2) => p1[0] === p2[0] && p1[1] === p2[1];

  /**
   * @param {number[]} p
   * @param {number[]} o
   */
  const addOffset = (p, o) => [p[0] + o[0], p[1] + o[1]];

  /**
   * @param {number[]} start
   * @param {number[]} end
   * @param {number[]} startHandle
   * @param {number[]} endHandle
   */
  const bezierCurve = (start, end, startHandle, endHandle) =>
    ['M', start, 'C', startHandle, endHandle, end].join(' ');

  /**
   * @param {number[]} point
   * @param {number[]} handle
   */
  function arrowHead(point, handle, { length = 4, theta = 45 } = {}) {
    const xLen = handle[0] - point[0];
    const yLen = handle[1] - point[1];

    const distance = Math.sqrt(Math.pow(xLen, 2) + Math.pow(yLen, 2));
    const ratio = length / distance;

    const mid = [point[0] + xLen * ratio, point[1] + yLen * ratio];

    /**
     * @param {number[]} p
     * @param {number[]} pivot
     * @param {number} theta
     */
    function rotate(p, pivot, theta) {
      const thetaRad = (theta * Math.PI) / 180;
      return [
        pivot[0] +
          (p[0] - pivot[0]) * Math.cos(thetaRad) -
          (p[1] - pivot[1]) * Math.sin(thetaRad),
        pivot[1] +
          (p[0] - pivot[0]) * Math.sin(thetaRad) +
          (p[1] - pivot[1]) * Math.cos(thetaRad),
      ];
    }

    return [
      'M',
      rotate(mid, point, theta),
      'L',
      point,
      'L',
      rotate(mid, point, -theta),
    ].join(' ');
  }

  /**
   * @param {number[]} start
   * @param {number[]} end
   * @param {number[]} startHandle
   * @param {number[]} endHandle
   * @param {typeof headAnchor} headAnchor
   * @param {typeof headOptions} headOptions
   */
  function arrow(start, end, startHandle, endHandle, headAnchor, headOptions) {
    let d = bezierCurve(start, end, startHandle, endHandle);

    if (headAnchor === 'start' || headAnchor === 'both') {
      const handle = equals(start, startHandle) ? end : startHandle;
      d += arrowHead(start, handle, headOptions);
    }

    if (headAnchor === 'end' || headAnchor === 'both') {
      const handle = equals(end, endHandle) ? start : endHandle;
      d += arrowHead(end, handle, headOptions);
    }

    return d;
  }

  $: sHandle = startHandle || addOffset(start, startHandleOffset);
  $: eHandle = endHandle || addOffset(end, endHandleOffset);

  $: headOptions = {
    length: headLength || clamp(0.08 * dist(start, end), 4, 8),
    theta: headAngle,
  };
</script>

<g class="arrow">
  {#if debug}
    <g class="debug">
      {#each [sHandle, eHandle] as coords}
        <circle cx={coords[0]} cy={coords[1]} r="5" />
      {/each}
      {#each [[start, sHandle], [end, eHandle]] as [s, e]}
        <line x1={s[0]} y1={s[1]} x2={e[0]} y2={e[1]} />
      {/each}
    </g>
  {/if}

  <path d={arrow(start, end, sHandle, eHandle, headAnchor, headOptions)} />
</g>

<style lang="scss">
  .arrow {
    --_color: var(--arrow-color, var(--c-ui-black));
    --_width: var(--arrow-width, 1);
  }

  path {
    stroke: var(--_color);
    stroke-width: var(--_width);
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  .debug {
    circle {
      fill: none;
      stroke: orange;
    }

    line {
      stroke: orange;
    }
  }
</style>
