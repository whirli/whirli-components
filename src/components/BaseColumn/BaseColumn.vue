<template>
  <div :class="classes"><slot /></div>
</template>

<script setup lang="ts">
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseColumn/BaseColumn.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseColumn.config';

// Composables
import useClasses from '@whirli-components/@use/class';

const ComponentStyles = ConfigStyles;

// @ts-ignore
const props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const classes = [styles.column, ...makeClasses(ComponentStyles, ConfigProps, props, styles)];
</script>
