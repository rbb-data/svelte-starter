import * as tokens from '$lib/tokens';

export type AccentColor =
  | 'blue'
  | 'black'
  | 'turquoise'
  | 'purple'
  | 'yellow'
  | 'red';

export type TokenKey = keyof typeof tokens;
