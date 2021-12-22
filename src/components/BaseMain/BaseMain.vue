<template>
  <main id="main" :class="classes">
    <slot />
  </main>
</template>

<script setup lang="ts">
// Vue
// Styles
import styles from '@whirli-local/components/BaseMain/BaseMain.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseMain.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = [styles.main, ...makeClasses(ComponentStyles, props, styles)];
</script>
