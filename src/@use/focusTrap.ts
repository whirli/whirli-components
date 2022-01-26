import { ref, nextTick, Ref } from '@composition';

interface FocusTrap {
  initFocusTrap: (element: HTMLElement) => void;
  destroyFocusTrap: (element: HTMLElement) => void;
}

const focusElements: Ref<HTMLElement[]> = ref([]);
const firstFocusElement: Ref<HTMLElement | null> = ref(null);
const lastFocusElement: Ref<HTMLElement | null> = ref(null);
const canTabBackwards: Ref<boolean> = ref(false);

const getKeyboardFocusableElements = (element: Element): HTMLElement[] => {
  return [
    ...element.querySelectorAll(
      'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
    ),
  ].filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')) as HTMLElement[];
};

const addFocusTrapEventListeners = (event: KeyboardEvent): void => {
  const isTabPressed = event.key === 'Tab';

  if (!isTabPressed) return;

  if (event.shiftKey) {
    if (document.activeElement === firstFocusElement.value) {
      event.preventDefault();
      (lastFocusElement.value as HTMLElement).focus();
    }
  } else {
    if (document.activeElement === lastFocusElement.value) {
      event.preventDefault();
      (firstFocusElement.value as HTMLElement).focus();
      canTabBackwards.value = true;
    }
  }
};

export default function useFocusTrap(): FocusTrap {
  const initFocusTrap = (element: HTMLElement): void => {
    focusElements.value = getKeyboardFocusableElements(element);
    firstFocusElement.value = focusElements.value[0];
    lastFocusElement.value = focusElements.value[focusElements.value.length - 1];

    element.setAttribute('tabindex', '1');
    nextTick(() => {
      (firstFocusElement.value as HTMLElement).focus();
      element.removeAttribute('tabindex');
    });
    element.addEventListener('keydown', addFocusTrapEventListeners);
  };

  const destroyFocusTrap = (element: HTMLElement): void => {
    element.removeAttribute('tabindex');
    element.removeEventListener('keydown', addFocusTrapEventListeners);
  };

  return {
    initFocusTrap,
    destroyFocusTrap,
  };
}
