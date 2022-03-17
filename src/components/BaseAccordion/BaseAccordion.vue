<template>
  <div :class="wrapperClasses" :data-state="activeBreakpointState">
    <button
      :class="triggerClasses"
      @click="updateAccordionState()"
      :aria-controls="bodyId"
      :aria-expanded="isActiveBreakpointStateOpen"
      :id="headerId"
      :disabled="props.disableToggle"
    >
      <slot name="title" />
    </button>
    <div
      :id="bodyId"
      ref="accordionContentWrapper"
      :class="contentClasses"
      :style="`--accordion-height: ${accordionMaxHeight}`"
      :aria-labelledby="headerId"
      :aria-hidden="!isActiveBreakpointStateOpen"
    >
      <div ref="accordionContent"><slot name="content" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import {
  computed,
  ref,
  onMounted,
  reactive,
  ComputedRef,
  Ref,
  onBeforeMount,
  onBeforeUnmount,
} from '@composition';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseAccordion/BaseAccordion.module.scss?module';

// Composables
import useBreakpoint from '@whirli-components/@use/breakpoint';
import useClasses from '@whirli-components/@use/class';

// Data
import { ConfigStyles, ConfigProps } from './BaseAccordion.config';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

const { getBreakpoints, activeBreakpoint } = useBreakpoint();

const accordionContentWrapper: Ref<HTMLElement> = ref({} as HTMLElement);
const accordionContent: Ref<HTMLElement> = ref({} as HTMLElement);
const accordionMaxHeight: Ref<string> = ref('');
const headerId = `${props.name}-header-id`;
const bodyId = `${props.name}-content-id`;

const isOpenInitialState: Record<string, string> = reactive({});
const accordionState: Record<string, string> = reactive({});

// Classes
const { makeClasses } = useClasses();
const staticWrapperClasses = [...makeClasses(ComponentStyles, ConfigProps, props, styles)];
const dynamicWrapperClasses: ComputedRef<string[]> = computed(() => [styles.accordion]);
const wrapperClasses: ComputedRef<string[]> = computed(() => [
  ...staticWrapperClasses,
  ...dynamicWrapperClasses.value,
]);
const triggerClasses: string[] = [styles['accordion__trigger']];
const contentClasses: string[] = [styles['accordion__content']];

const activeBreakpointState: Ref<string> = ref('closed');

const updateActiveBreakpointState = (): void => {
  activeBreakpointState.value = accordionState[activeBreakpoint.value];
};

const isActiveBreakpointStateOpen: ComputedRef<boolean> = computed(
  () => accordionState[activeBreakpoint.value] === 'open'
);

const toggleState = (state: string): string => (state === 'open' ? 'closed' : 'open');

const updateAccordionState = (): void => {
  accordionState[activeBreakpoint.value] = toggleState(accordionState[activeBreakpoint.value]);
  updateActiveBreakpointState();
};

function updateAccordionHeight(): void {
  accordionMaxHeight.value = `${accordionContent.value.offsetHeight}px`;
}

const setAccordionState = (): void => {
  let lastKey: string | null = null;
  for (const breakpoint of getBreakpoints.value) {
    accordionState[breakpoint.key] =
      typeof props.state === 'string'
        ? props.state
        : props.state[breakpoint.key] ??
          accordionState[lastKey as string] ??
          isOpenInitialState[breakpoint.key];
    lastKey = breakpoint.key;
  }
  updateActiveBreakpointState();
};

const initInitialState = (): void => {
  for (const breakpoint of getBreakpoints.value) {
    isOpenInitialState[breakpoint.key] = 'closed';
  }
  setAccordionState();
};

onBeforeMount(() => {
  initInitialState();
});

// @ts-ignore
if (process.browser) {
  const observer = new MutationObserver(updateAccordionHeight);

  onMounted(() => {
    updateAccordionHeight();

    observer.observe(accordionContent.value, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });
}
</script>
