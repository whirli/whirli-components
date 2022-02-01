<template>
  <div :class="classes"><slot /></div>
</template>

<script setup lang="ts">
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseGrid/BaseGrid.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseGrid.config';

// Composables
import useClasses from '@whirli-components/@use/class';

const ComponentStyles = ConfigStyles;

// @ts-ignore
const props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const classes = [styles.grid, ...makeClasses(ComponentStyles, ConfigProps, props, styles)];
</script>
