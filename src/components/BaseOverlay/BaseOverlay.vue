<template>
  <div :class="wrapperClasses">
    <div :class="contentClasses">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from '@composition';
import { ComputedRef } from '@composition';

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseOverlay/BaseOverlay.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseOverlay.config';

// Composables
import useClasses from '@whirli-components/@use/class';

const ComponentStyles = ConfigStyles;

// @ts-ignore
const props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const wrapperClasses: ComputedRef<string[]> = computed(() => {
  return [styles.overlay, ...makeClasses(ComponentStyles, ConfigProps, props, styles)];
});

const contentClasses = [styles['overlay__content']];
</script>
