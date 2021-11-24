<template>
  <div :class="classes">First component two</div>
</template>

<script setup="props">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli/FirstComponent/FirstComponent.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './FirstComponent.config.ts';

const FirstComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class.ts';
const { makeClasses } = useClasses();
const classes = makeClasses(FirstComponentStyles, props, styles);
</script>
