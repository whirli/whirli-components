<template>
  <div :class="wrapperClasses">
    <button
      :class="triggerClasses"
      @click="setAccordionToggleState()"
      :aria-controls="bodyId"
      :aria-expanded="isAccordionOpen"
      :id="headerId"
    >
      <slot name="title" />
    </button>
    <div
      :id="bodyId"
      ref="accordionContentWrapper"
      :class="contentClasses"
      :style="`--accordion-height: ${accordionMaxHeight}`"
      :aria-labelledby="headerId"
      :aria-hidden="!isAccordionOpen"
    >
      <div ref="accordionContent"><slot name="content" /></div>
    </div>
  </div>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps, computed, ref, onMounted, onUnmounted } from 'vue';
import type { ComputedRef, Ref } from 'vue';

// Types
import {
  ComponentStyles as ComponentStylesInterface,
  ComponentProps as ComponentPropsInterface,
} from '../../@types/components';

// Styles
import styles from '@whirli-local/components/BaseAccordion/BaseAccordion.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseAccordion.config';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: ComponentPropsInterface = defineProps(ConfigProps);

const TOGGLE_STATES: Record<string, string> = {
  DEFAULT: 'toggle-default',
  ALT: 'toggle-alt',
};

const accordionContentWrapper: Ref<HTMLElement> = ref({} as HTMLElement);
const accordionContent: Ref<HTMLElement> = ref({} as HTMLElement);
const accordionMaxHeight: Ref<string> = ref('');
const accordionToggleState: Ref<string> = ref(TOGGLE_STATES.DEFAULT);
const isAccordionOpen: Ref<boolean> = ref(false);
const headerId = `${props.name}-header-id`;
const bodyId = `${props.name}-content-id`;

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const wrapperClasses: ComputedRef<string[]> = computed(() => [
  styles.accordion,
  styles[accordionToggleState.value],
  ...makeClasses(ComponentStyles, props, styles),
]);
const triggerClasses: string[] = [styles['accordion__trigger']];
const contentClasses: string[] = [styles['accordion__content']];

function updateAccordionHeight(): void {
  accordionMaxHeight.value = `${accordionContent.value.offsetHeight}px`;
}

function setAccordionToggleState(): void {
  accordionToggleState.value =
    accordionToggleState.value === TOGGLE_STATES.DEFAULT ? TOGGLE_STATES.ALT : TOGGLE_STATES.DEFAULT;
  setAccordionOpenState();
}

function setAccordionOpenState(): void {
  // @todo - Revisit this function
  setTimeout(() => {
    isAccordionOpen.value = accordionContentWrapper.value.clientHeight > 0;
  }, 1000);
}

function windowResized(): void {
  accordionToggleState.value = TOGGLE_STATES.DEFAULT;
  setAccordionOpenState();
}

onMounted(() => {
  updateAccordionHeight();
  setAccordionOpenState();
  window.addEventListener('resize', windowResized);
});

onUnmounted(() => {
  window.removeEventListener('resize', windowResized);
});
</script>
