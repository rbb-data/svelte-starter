export interface ParamDoc {
  name: string;
  description: string;
  type: string;
  optional: boolean;
  default: string;
  isExposed: boolean;
}

export type SvelteType = 'component' | 'action' | 'store';

export interface NavSection {
  heading?: string;
  urlPrefix: string;
  type: SvelteType;
  items: string[];
}
