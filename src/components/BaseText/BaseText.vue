<template>
  <component :is="props.tag" :class="classes"><slot /></component>
</template>

<script setup lang="ts">
// Vue
// Styles
import styles from '@whirli-local/components/BaseText/BaseText.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseText.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = [styles.text, ...makeClasses(ComponentStyles, props, styles)];
</script>
