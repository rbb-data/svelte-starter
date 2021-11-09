export type ActionReturn<Params> = {
  destroy?: () => void;
  update?: (params: Params) => void;
} | void;
