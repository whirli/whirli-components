<template>
  <aside id="aside" :class="classes">
    <slot />
  </aside>
</template>

<script setup lang="ts">
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseAside/BaseAside.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseAside.config';

// Composables
import useClasses from '@whirli-components/@use/class';

const ComponentStyles = ConfigStyles;

// @ts-ignore
const props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const classes = [styles.aside, ...makeClasses(ComponentStyles, ConfigProps, props, styles)];
</script>
