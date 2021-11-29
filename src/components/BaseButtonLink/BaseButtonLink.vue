<template>
  <RouterLink v-if="isInternal" :to="props.url"><slot /></RouterLink>
  <a :href="props.url" v-else target="_blank" rel="nofollow noopener"><slot /></a>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps, computed } from 'vue';
import type { ComputedRef } from 'vue';

// Styles
import styles from '@whirli/BaseButtonLink/BaseButtonLink.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseButtonLink.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = makeClasses(ComponentStyles, props, styles);

// Component

const isInternal: ComputedRef<boolean> = computed((): boolean => {
  return props.url.startsWith('/');
});
</script>
