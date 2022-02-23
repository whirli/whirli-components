<template>
  <component :is="props.tag" :class="classes"><slot /></component>
</template>

<script setup lang="ts">
// Vue
import { computed, ComputedRef } from '@composition';
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseText/BaseText.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseText.config';

// Composables
import useClasses from '@whirli-components/@use/class';

const ComponentStyles = ConfigStyles;

// @ts-ignore
const props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const classes: ComputedRef<string[]> = computed(() => [
  styles.text,
  ...makeClasses(ComponentStyles, ConfigProps, props, styles),
]);
</script>
