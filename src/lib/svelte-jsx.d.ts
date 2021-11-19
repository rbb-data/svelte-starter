/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */

interface XY {
  x: number;
  y: number;
}

interface XYd extends XY {
  dx: number;
  dy: number;
}

interface Pannable {
  // custom events defined in `src/lib/actions/pannable.ts`
  onpanstart?: (e: CustomEvent<XY>) => void;
  onpanmove?: (e: CustomEvent<XYd>) => void;
  onpanend?: (e: CustomEvent<XY>) => void;
}

interface FuzzySearch {
  onsearch?: (e: CustomEvent<{ suggestions: Array<Suggestion> }>) => void;
  onresult?: (e: CustomEvent<{ result: Suggestion }>) => void;
}

declare namespace svelte.JSX {
  interface SVGAttributes<T> extends Pannable {}
  interface HTMLAttributes<T> extends Pannable, FuzzySearch {}
}
