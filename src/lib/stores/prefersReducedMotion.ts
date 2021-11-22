import { readable } from 'svelte/store';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

const prefersReducedMotion = readable(
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
