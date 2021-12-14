<template>
  <div :class="wrapperClasses">
    <button :class="triggerClasses" @click="setAccordionToggleState()" :aria-controls="bodyId" :id="headerId">
      <slot name="title" />
    </button>
    <div
      :id="bodyId"
      ref="accordionContentWrapper"
      :class="contentClasses"
      :style="`--accordion-height: ${accordionMaxHeight}`"
      :aria-labelledby="headerId"
      :aria-expanded="isAccordionOpen"
    >
      <div ref="accordionContent" :aria-hidden="!isAccordionOpen"><slot name="content" /></div>
    </div>
  </div>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps, computed, ref, onMounted, onUpdated, nextTick } from 'vue';
import type { ComputedRef, Ref } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseAccordion/BaseAccordion.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseAccordion.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

const TOGGLE_STATES: Record<string, string> = {
  DEFAULT: 'toggle-default',
  ALT: 'toggle-alt',
};

const accordionContentWrapper: Ref<HTMLElement> = ref({} as HTMLElement);
const accordionContent: Ref<HTMLElement> = ref({} as HTMLElement);
const accordionMaxHeight: Ref<string> = ref('');
const accordionToggleState: Ref<string> = ref(TOGGLE_STATES.DEFAULT);
const isAccordionOpen: ComputedRef<boolean> = computed(() => true);
const headerId = `${props.name}-header-id`;
const bodyId = `${props.name}-body-id`;

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const wrapperClasses: ComputedRef<string[]> = computed(() => [
  styles.accordion,
  styles[accordionToggleState.value],
  ...makeClasses(ComponentStyles, props, styles),
]);
const triggerClasses = [styles['accordion__trigger']];
const contentClasses = [styles['accordion__content']];

function updateAccordionHeight(): void {
  accordionMaxHeight.value = `${accordionContent.value.offsetHeight}px`;
}

function setAccordionToggleState(): void {
  accordionToggleState.value =
    accordionToggleState.value === TOGGLE_STATES.DEFAULT ? TOGGLE_STATES.ALT : TOGGLE_STATES.DEFAULT;
}

onMounted(() => {
  updateAccordionHeight();
  window.addEventListener('resize', async () => {
    accordionToggleState.value = TOGGLE_STATES.DEFAULT;
    updateAccordionHeight();
  });
});
</script>
