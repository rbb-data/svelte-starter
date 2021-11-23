import type { SvelteComponent } from 'svelte';

// svelte action return type
export type ActionReturn<Params> = {
  destroy?: () => void;
  update?: (params: Params) => void;
} | void;

// specification of a component
export interface Component {
  component: typeof SvelteComponent;
  props: Record<string, unknown>;
}
