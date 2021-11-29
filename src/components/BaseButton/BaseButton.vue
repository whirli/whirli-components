<template>
  <div :class="classes">Hello from BaseButton component</div>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli/BaseButton/BaseButton.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseButton.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = makeClasses(ComponentStyles, props, styles);
</script>
