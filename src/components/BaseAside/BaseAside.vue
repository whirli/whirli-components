<template>
  <aside id="aside" :class="classes">
    <slot />
  </aside>
</template>

<script setup lang="ts">
// Vue
// Styles
import styles from '@whirli-local/components/BaseAside/BaseAside.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseAside.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = [styles.aside, ...makeClasses(ComponentStyles, props, styles)];
</script>
