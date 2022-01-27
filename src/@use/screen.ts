// @ts-ignore
import { ref, Ref, onBeforeMount } from '@composition';

interface Screen {
  screenWidth: Ref<number>;
}

export default function useScreen(): Screen {
  let canSetScreenWith: number;
  const screenWidth: Ref<number> = ref(0);

  const setScreenWidth = (): void => {
    screenWidth.value = window.outerWidth;
  };

  const debounceSetScreenWidth = (): void => {
    clearTimeout(canSetScreenWith);
    canSetScreenWith = setTimeout(() => {
      setScreenWidth();
    }, 100);
  };

  window.addEventListener('resize', debounceSetScreenWidth);
  setScreenWidth();

  return {
    screenWidth,
  };
}
