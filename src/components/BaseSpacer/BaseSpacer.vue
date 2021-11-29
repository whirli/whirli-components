<template>
  <div :class="classes" />
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli/BaseSpacer/BaseSpacer.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseSpacer.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = [styles.spacer, ...makeClasses(ComponentStyles, props, styles)];
</script>
