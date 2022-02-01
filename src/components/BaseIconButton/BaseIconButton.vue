<template>
  <component :is="props.tag" :class="[classes, disabledClasses]">
    <BaseIcon v-bind="$attrs" />
  </component>
</template>

<script setup lang="ts">
// Vue
import { computed, ComputedRef } from '@composition';

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseIconButton/BaseIconButton.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseIconButton.config';
import { PropKeys } from '@whirli-components/components/BaseIconButton/BaseIconButton.constants';

// Components
import BaseIcon from '@whirli-components/components/BaseIcon/BaseIcon.vue';

// Composables
import useClasses from '@whirli-components/@use/class';

const ComponentStyles = ConfigStyles;

// @ts-ignore
const props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const classes: string[] = [
  styles['icon-button'],
  ...makeClasses(ComponentStyles, ConfigProps, props, styles),
];
const disabledClasses: ComputedRef<string> = computed(() =>
  props[PropKeys.IS_DISABLED] ? styles['is-disabled'] : ''
);
</script>
