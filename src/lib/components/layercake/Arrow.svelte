<script lang="ts">
  /**
   * Arrow, either as straight line or Bézier curve.
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
   * - `--arrow-opacity`: opacity of the arrow _(default: 1)_
   *
   * The rendered markup is composed of:
   *
   * - `.arrow`: group
   * - `.arrow__shape`: path
   */

  import { getContext } from 'svelte/internal';

  import { get } from './utils';
  import type { LayerCakeContext } from './types';

  type D = $$Generic;
  type Coords = [number, number];

  /** start coordinates */
  export let start: Coords = [0, 0];

  /** end coordinates */
  export let end: Coords = [50, 0];

  export let data: [D, D] | undefined = undefined;
  export let xIndex = 0;
  export let yIndex = 0;

  /** bezier handle offset from start coordinates */
  export let startHandleOffset: [number, number] = [0, 0];

  /** bezier handle offset from end coordinates */
  export let endHandleOffset: [number, number] = [0, 0];

  /** start bezier handle coordinates; if given, `startHandleOffset` is ignored */
  export let startHandle: Coords | undefined = undefined;

  /** end bezier handle coordinates; if given, `endHandleOffset` is ignored */
  export let endHandle: Coords | undefined = undefined;

  /** position of the arrow head */
  export let headAnchor: 'start' | 'end' | 'both' = 'end';

  /** length of the arrow head */
  export let headLength: number | undefined = undefined;

  /** angle of the arrow head */
  export let headAngle = 55;

  export let width: number | undefined = undefined;
  export let color: string | undefined = undefined;
  export let opacity: number | undefined = undefined;

  /** renders bezier handle points for debugging */
  export let debug = false;

  const dist = (p1: Coords, p2: Coords) =>
    Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));

  const clamp = (n: number, min = 0, max = 1) =>
    Math.min(Math.max(n, min), max);

  const equals = (p1: Coords, p2: Coords) => p1[0] === p2[0] && p1[1] === p2[1];

  const addOffset: (p: Coords, o: Coords) => Coords = (p, o) => [
    p[0] + o[0],
    p[1] + o[1],
  ];

  const bezierCurve = (
    start: Coords,
    end: Coords,
    startHandle: Coords,
    endHandle: Coords
  ) => ['M', start, 'C', startHandle, endHandle, end].join(' ');

  function arrowHead(
    point: Coords,
    handle: Coords,
    { length = 4, theta = 45 } = {}
  ) {
    const xLen = handle[0] - point[0];
    const yLen = handle[1] - point[1];

    const distance = Math.sqrt(Math.pow(xLen, 2) + Math.pow(yLen, 2));
    const ratio = length / distance;

    const mid: Coords = [point[0] + xLen * ratio, point[1] + yLen * ratio];

    function rotate(p: Coords, pivot: Coords, theta: number) {
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

  function arrow(
    start: Coords,
    end: Coords,
    startHandle: Coords,
    endHandle: Coords,
    _headAnchor: typeof headAnchor,
    _headOptions: typeof headOptions
  ) {
    let d = bezierCurve(start, end, startHandle, endHandle);

    if (_headAnchor === 'start' || _headAnchor === 'both') {
      const handle = equals(start, startHandle) ? end : startHandle;
      d += arrowHead(start, handle, _headOptions);
    }

    if (_headAnchor === 'end' || _headAnchor === 'both') {
      const handle = equals(end, endHandle) ? start : endHandle;
      d += arrowHead(end, handle, _headOptions);
    }

    return d;
  }

  const ctx = getContext<LayerCakeContext<D>>('LayerCake');
  let xGet: typeof ctx['xGet'], yGet: typeof ctx['yGet'];

  $: _start = start;
  $: _end = end;

  $: _startHandle = startHandle || addOffset(_start, startHandleOffset);
  $: _endHandle = endHandle || addOffset(_end, endHandleOffset);

  $: headOptions = {
    length: headLength || clamp(0.08 * dist(start, end), 4, 8),
    theta: headAngle,
  };

  $: if (data != undefined && ctx != undefined) {
    xGet = ctx.xGet;
    yGet = ctx.yGet;
    _start = [get($xGet, data[0], xIndex), get($yGet, data[0], yIndex)];
    _end = [get($xGet, data[1], xIndex), get($yGet, data[1], yIndex)];
  }
</script>

<g
  class:arrow={true}
  class={$$restProps.class}
  style={$$restProps.style}
  style:--_color={color || ''}
  style:--_width={width || ''}
  style:--_opacity={opacity || ''}
>
  {#if debug}
    <g class="debug">
      {#each [_startHandle, _endHandle] as coords}
        <circle cx={coords[0]} cy={coords[1]} r="5" />
      {/each}
      {#each [[start, _startHandle], [end, _endHandle]] as [s, e]}
        <line x1={s[0]} y1={s[1]} x2={e[0]} y2={e[1]} />
      {/each}
    </g>
  {/if}

  <path
    class="arrow__shape"
    d={arrow(_start, _end, _startHandle, _endHandle, headAnchor, headOptions)}
  />
</g>

<style lang="scss">
  .arrow {
    --__color: var(--_color, var(--arrow-color, var(--c-ui-black)));
    --__width: var(--_width, var(--arrow-width, 1));
    --__opacity: var(--_opacity, var(--arrow-opacity, 1));

    &__shape {
      stroke: var(--__color);
      stroke-width: var(--__width);
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
    }
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
