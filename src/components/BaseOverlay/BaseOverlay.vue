<template>
  <div :class="wrapperClasses">
    <div :class="contentClasses">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { defineProps, computed } from 'vue';
import { ComputedRef } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseOverlay/BaseOverlay.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseOverlay.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const wrapperClasses: ComputedRef<string[]> = computed(() => {
  return [styles.overlay, ...makeClasses(ComponentStyles, props, styles)];
});

const contentClasses = [styles['overlay__content']];
</script>
