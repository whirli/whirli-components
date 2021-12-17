<template>
  <component :is="props.tag" :class="classes"><slot /></component>
</template>

<script setup lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseText/BaseText.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseText.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = [styles.text, ...makeClasses(ComponentStyles, props, styles)];
</script>
