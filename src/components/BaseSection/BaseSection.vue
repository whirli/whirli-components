<template>
  <section :class="classes">
    <BaseSpacer :size="size.top" />
    <slot />
    <BaseSpacer :size="size.bottom" />
  </section>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps, computed } from 'vue';

// Types
import type { ComputedRef } from 'vue';
import { ComputedSize } from './BaseSection.types';

// Components
import BaseSpacer from '../BaseSpacer/BaseSpacer.vue';

// Styles
import styles from '@whirli/BaseSection/BaseSection.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseSection.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = makeClasses(ComponentStyles, props, styles);

const size: ComputedRef<ComputedSize> = computed(() => {
  return {
    top: props.size.top ? props.size.top : props.size.bottom ? undefined : props.size,
    bottom: props.size.bottom ? props.size.bottom : props.size.top ? undefined : props.size,
  };
});
</script>
