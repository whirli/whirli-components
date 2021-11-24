<template>
  <div :class="classes">Hello from SkeletonComponent component</div>
</template>

<script setup="props">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli/SkeletonComponent/SkeletonComponent.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './SkeletonComponent.config.ts';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class.ts';
const { makeClasses } = useClasses();
const classes = makeClasses(ComponentStyles, props, styles);
</script>
