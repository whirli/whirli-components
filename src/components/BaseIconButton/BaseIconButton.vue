<template>
  <component :is="props.tag" :class="[classes, disabledClasses]">
    <BaseIcon v-bind="$attrs" />
  </component>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps, computed } from 'vue';
import type { ComputedRef } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseIconButton/BaseIconButton.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseIconButton.config';
import { PropKeys } from '../BaseIconButton/BaseIconButton.constants';

// Components
import BaseIcon from '../BaseIcon/BaseIcon.vue';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes: string[] = [styles['icon-button'], ...makeClasses(ComponentStyles, props, styles)];
const disabledClasses: ComputedRef<string> = computed(() =>
  props[PropKeys.IS_DISABLED] ? styles['is-disabled'] : ''
);
</script>
