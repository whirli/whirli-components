<template>
  <div :class="classes"><slot /></div>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli-local/BaseColumn/BaseColumn.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseColumn.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = [styles.column, ...makeClasses(ComponentStyles, props, styles)];
</script>
