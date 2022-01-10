<template>
  <BaseOverlay :state="props.state">
    <div :class="wrapperClasses">
      <div :class="styles['modal__close-icon']">
        <BaseIconButton icon="Cross" @click="$emit('modal:close')" />
      </div>
      <BaseSpacer size="3xl" />
      <div :class="contentClasses">
        <slot />
      </div>
      <BaseSpacer size="3xl" />
    </div>
  </BaseOverlay>
</template>

<script setup lang="ts">
// Vue
import { defineEmits } from '@composition';

// Components
import BaseOverlay from '@whirli-components/components/BaseOverlay/BaseOverlay.vue';
import BaseSpacer from '@whirli-components/components/BaseSpacer/BaseSpacer.vue';
import BaseIconButton from '@whirli-components/components/BaseIconButton/BaseIconButton.vue';

// Styles
import styles from '@whirli-local/components/BaseModal/BaseModal.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseModal.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

const emits = defineEmits(['modal:close', 'modal:open']);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const wrapperClasses = [styles.modal, ...makeClasses(ComponentStyles, props, styles)];
const contentClasses = [styles['modal__content']];
</script>
