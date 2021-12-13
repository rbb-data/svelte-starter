import { readable } from 'svelte/store';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

/**
 * Readable store that is true if the user prefers reduced motion
 *
 * @type {import('svelte/store').Readable<boolean>}
 */
const prefersReducedMotion = readable(
  window.matchMedia(reducedMotionQuery).matches,
  (set) => {
    /** @type {(event: MediaQueryListEvent) => void} */
    const updateMotionPreference = (event) => {
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
