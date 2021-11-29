<template>
  <main id="main" :class="classes">
    <slot />
  </main>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli/BaseMain/BaseMain.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseMain.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = [styles.main, ...makeClasses(ComponentStyles, props, styles)];
</script>
