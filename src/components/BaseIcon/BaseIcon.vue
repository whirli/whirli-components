<template>
  <component :is="iconComponent" :class="classes" v-bind="$attrs" />
</template>

<script setup lang="ts">
// Vue
import { defineProps, computed } from 'vue';

// Types
import type { ComputedRef, Component } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseIcon/BaseIcon.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseIcon.config';

// Components
import Icons from './Icons';

const ComponentStyles = ConfigStyles;
import { PropKeys } from '../BaseIcon/BaseIcon.constants';

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = [styles.icon, ...makeClasses(ComponentStyles, props, styles)];

// Get icon
const iconComponent: ComputedRef<Component> = computed(() => {
  return Icons[props[PropKeys.ICON] as keyof typeof Icons];
});
</script>
