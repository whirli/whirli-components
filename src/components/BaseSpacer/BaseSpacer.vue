<template>
  <div :class="classes" />
</template>

<script setup lang="ts">
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseSpacer/BaseSpacer.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseSpacer.config';

// Composables
import useClasses from '@whirli-components/@use/class';

const ComponentStyles = ConfigStyles;

// @ts-ignore
const props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const classes = [styles.spacer, ...makeClasses(ComponentStyles, ConfigProps, props, styles)];
</script>
