<template>
  <aside id="aside" :class="classes">
    <slot />
  </aside>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseAside/BaseAside.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseAside.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = [styles.aside, ...makeClasses(ComponentStyles, props, styles)];
</script>
