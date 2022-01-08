<template>
  <component :is="props.tag" :class="[classes, disabledClasses]">
    <BaseIcon v-bind="$attrs" />
  </component>
</template>

<script setup lang="ts">
// Vue
import { computed } from '@composition';
import type { ComputedRef } from '@composition';

// Styles
import styles from '@whirli-local/components/BaseIconButton/BaseIconButton.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseIconButton.config';
import { PropKeys } from '@whirli-components/components/BaseIconButton/BaseIconButton.constants';

// Components
import BaseIcon from '@whirli-components/components/BaseIcon/BaseIcon.vue';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes: string[] = [styles['icon-button'], ...makeClasses(ComponentStyles, props, styles)];
const disabledClasses: ComputedRef<string> = computed(() =>
  props[PropKeys.IS_DISABLED] ? styles['is-disabled'] : ''
);
</script>
