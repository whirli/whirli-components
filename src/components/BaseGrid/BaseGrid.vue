<template>
  <div :class="classes"><slot /></div>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli/BaseGrid/BaseGrid.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseGrid.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);
const classes = [styles.grid];
</script>
