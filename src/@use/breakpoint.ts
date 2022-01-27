// @ts-ignore
import { computed, ComputedRef } from '@composition';
import styles from '@whirli-local/components/config.scss';

import { Breakpoint as BreakpointObject } from '@whirli-components/@types/breakpoints';

import useScreen from '@whirli-components/@use/screen';

interface Breakpoint {
  getBreakpoints: ComputedRef<BreakpointObject[]>;
  activeBreakpoint: ComputedRef<string>;
}

export default function useBreakpoint(): Breakpoint {
  const getBreakpoints: ComputedRef<BreakpointObject[]> = computed(() => {
    const breakpoints: BreakpointObject[] = [];
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
    const { screenWidth } = useScreen();
    let activeSize = 'default';
    for (const breakpoint of getBreakpoints.value) {
      if (screenWidth.value > parseInt(breakpoint.minWidth)) {
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
