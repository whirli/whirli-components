<template>
  <div :class="classes">First component two</div>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli/FirstComponent/FirstComponent.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './FirstComponent.config';

const FirstComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = makeClasses(FirstComponentStyles, props, styles);
</script>
