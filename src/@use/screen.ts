// @ts-ignore
import { ref, Ref, onBeforeUnmount } from '@composition';

interface Screen {
  screenWidth: Ref<number>;
}

export default function useScreen(): Screen {
  let canSetScreenWith: number;
  const screenWidth: Ref<number> = ref(0);

  // @ts-ignore
  if (process.browser) {
    const setScreenWidth = (): void => {
      screenWidth.value = window.outerWidth;
    };

    const debounceSetScreenWidth = (): void => {
      clearTimeout(canSetScreenWith);
      canSetScreenWith = setTimeout(() => {
        setScreenWidth();
      }, 100);
    };

    // Cant call onMounted / onBeforeMount - Get following error:
    // onBeforeMount / onMounted is called when there is no active component instance to be associated with.
    // This works
    window.addEventListener('resize', debounceSetScreenWidth);
    setScreenWidth();

    onBeforeUnmount(() => {
      window.removeEventListener('resize', debounceSetScreenWidth);
    });
  }

  return {
    screenWidth,
  };
}
