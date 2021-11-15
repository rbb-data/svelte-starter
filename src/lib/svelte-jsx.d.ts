/* eslint-disable @typescript-eslint/no-unused-vars */

interface XY {
  x: number;
  y: number;
}

interface XYd extends XY {
  dx: number;
  dy: number;
}

declare namespace svelte.JSX {
  interface SVGAttributes<T> {
    // custom events defined in `src/lib/actions/pannable.ts`
    onpanstart?: (e: CustomEvent<XY>) => void;
    onpanmove?: (e: CustomEvent<XYd>) => void;
    onpanend?: (e: CustomEvent<XY>) => void;
  }
}
