<template>
  <BaseOverlay :state="props.state">
    <div
      ref="modal"
      :class="wrapperClasses"
      aria-modal="true"
      :aria-labelledby="uniqueId"
      role="dialog"
      :aria-hidden="!isOpen"
    >
      <BaseSpacer size="3xl" />
      <div :id="uniqueId" :class="titleClasses">
        <slot name="title" />
      </div>
      <div :class="contentClasses">
        <slot name="content" />
      </div>
      <BaseSpacer size="3xl" />
      <div :class="styles['modal__close-icon']">
        <BaseIconButton ref="modalClose" icon="Cross" @click="emit('modal:close')" aria-label="Close modal" />
      </div>
    </div>
  </BaseOverlay>
</template>

<script setup lang="ts">
// Vue
import { defineEmits, watch, ref, computed, Ref, ComputedRef } from '@composition';

// Components
import BaseOverlay from '@whirli-components/components/BaseOverlay/BaseOverlay.vue';
import BaseSpacer from '@whirli-components/components/BaseSpacer/BaseSpacer.vue';
import BaseIconButton from '@whirli-components/components/BaseIconButton/BaseIconButton.vue';

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseModal/BaseModal.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseModal.config';

// Composables
import useComponent from '@whirli-components/@use/component';
import useFocusTrap from '@whirli-components/@use/focusTrap';
import useClasses from '@whirli-components/@use/class';

const { uniqueId } = useComponent();
const { initFocusTrap, destroyFocusTrap } = useFocusTrap();

const ComponentStyles = ConfigStyles;

// @ts-ignore
const props = defineProps(ConfigProps);
// @ts-ignore
const emit = defineEmits(['modal:close', 'modal:open']);

// Classes
const { makeClasses } = useClasses();
const wrapperClasses = [styles.modal, ...makeClasses(ComponentStyles, ConfigProps, props, styles)];
const titleClasses = [styles['modal__title']];
const contentClasses = [styles['modal__content']];

const modal: Ref<HTMLElement> = ref(null as unknown as HTMLElement);
const modalClose: Ref<HTMLElement> = ref(null as unknown as HTMLElement);

const isOpen: ComputedRef<boolean> = computed(() => props.state === 'open');

watch(
  () => props.state,
  (newState: string) => {
    if (newState === 'open') {
      initFocusTrap(modal.value);
    } else {
      destroyFocusTrap(modal.value);
    }
  }
);
</script>
