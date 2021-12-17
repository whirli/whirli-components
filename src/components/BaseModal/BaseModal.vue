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

<script setup="props" lang="ts">
// Vue
import { defineProps, defineEmits } from 'vue';

// Components
import BaseOverlay from '../BaseOverlay/BaseOverlay.vue';
import BaseSpacer from '../BaseSpacer/BaseSpacer.vue';
import BaseIconButton from '../BaseIconButton/BaseIconButton.vue';

// Styles
import styles from '@whirli-local/components/BaseModal/BaseModal.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseModal.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

const emits = defineEmits(['modal:close', 'modal:open']);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const wrapperClasses = [styles.modal, ...makeClasses(ComponentStyles, props, styles)];
const contentClasses = [styles['modal__content']];
</script>
