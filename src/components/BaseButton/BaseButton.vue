<template>
  <component
    :is="button"
    :type="props.type"
    :url="props.url"
    :class="classes"
    :state="props.state"
    v-bind="$attrs"
  >
    <slot />
    <template #processing>
      <slot name="processing" />
    </template>
    <template #loading>
      <slot name="loading" />
    </template>
  </component>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps, computed } from 'vue';
import type { ComputedRef, Component } from 'vue';

// components
import BaseButtonDefault from '../BaseButtonDefault/BaseButtonDefault.vue';
import BaseButtonLink from '../BaseButtonLink/BaseButtonLink.vue';

// Styles
import styles from '@whirli-local/BaseButton/BaseButton.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseButton.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = [styles.button, ...makeClasses(ComponentStyles, props, styles)];

const button: ComputedRef<Component> = computed((): Component => {
  return props.url !== undefined ? BaseButtonLink : BaseButtonDefault;
});
</script>
