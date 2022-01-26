import styles from '@whirli-local/components/config.scss';
import { computed, ComputedRef } from '@composition';

interface Breakpoint {
  getBreakpoints: ComputedRef<Record<string, string>[]>;
  activeBreakpoint: ComputedRef<string>;
}

export default function useBreakpoint(): Breakpoint {
  const getBreakpoints: ComputedRef<Record<string, string>[]> = computed(() => {
    const breakpoints: Record<string, string>[] = [];
    for (const [key, value] of Object.entries(styles)) {
      if (key.startsWith(styles.prefix)) {
        const preparedKey: string = key.replace(styles.prefix, '');
        breakpoints.push({
          key: preparedKey,
          minWidth: value,
        });
      }
    }

    return breakpoints;
  });

  const activeBreakpoint: ComputedRef<string> = computed(() => {
    const windowSize = window.outerWidth;
    let activeSize = 'default';
    for (const breakpoint of getBreakpoints.value) {
      if (windowSize > parseInt(breakpoint.minWidth)) {
        activeSize = breakpoint.key;
      } else {
        break;
      }
    }
    return activeSize;
  });

  return {
    getBreakpoints,
    activeBreakpoint,
  };
}
