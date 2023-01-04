import { readable, type Readable } from 'svelte/store';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

/**
 * Readable store that is true if the user has requested to minimize the amount
 * of non-essential motion
 */
const prefersReducedMotion: Readable<boolean> = readable(
  window.matchMedia(reducedMotionQuery).matches,
  (set) => {
    const updateMotionPreference = (event: MediaQueryListEvent) => {
      set(event.matches);
    };

    const mediaQueryList = window.matchMedia(reducedMotionQuery);
    mediaQueryList.addEventListener('change', updateMotionPreference);

    return () => {
      mediaQueryList.removeEventListener('change', updateMotionPreference);
    };
  }
);

export default prefersReducedMotion;
