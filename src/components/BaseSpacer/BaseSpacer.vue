<template>
  <div :class="[classes, styles.spacer]" />
</template>

<script setup="props">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli/BaseSpacer/BaseSpacer.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseSpacer.config.ts';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class.ts';
const { makeClasses } = useClasses();
const classes = makeClasses(ComponentStyles, props, styles);
</script>
