<template>
  <div :class="classes"><slot /></div>
</template>

<script setup lang="ts">
// Vue
;

// Styles
import styles from '@whirli-local/components/BaseGrid/BaseGrid.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseGrid.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = [styles.grid, ...makeClasses(ComponentStyles, props, styles)];
</script>
