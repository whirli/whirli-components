<template>
  <div :class="classes"><slot /></div>
</template>

<script setup lang="ts">
// Vue
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseColumn/BaseColumn.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseColumn.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = [styles.column, ...makeClasses(ComponentStyles, props, styles)];
</script>
