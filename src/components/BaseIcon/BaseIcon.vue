<template>
  <component :is="iconComponent" :class="classes" v-bind="$attrs" />
</template>

<script setup lang="ts">
// Vue
import { computed, ComputedRef } from '@composition';

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseIcon/BaseIcon.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseIcon.config';

// Components
// @ts-ignore
import PackageIcons from './Icons';
import { LocalIcons } from '@whirli-local/components/BaseIcon/BaseIcon.config';

import { PropKeys } from '@whirli-components/components/BaseIcon/BaseIcon.constants';

// Composables
import useClasses from '@whirli-components/@use/class';

const Icons = { ...PackageIcons, ...LocalIcons };

const ComponentStyles = ConfigStyles;

// @ts-ignore
const props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const classes: ComputedRef<string[]> = computed((): string[] => {
  return [styles.icon, ...makeClasses(ComponentStyles, ConfigProps, props, styles)];
});

// Get icon
// eslint-disable-next-line
const iconComponent: ComputedRef<any> = computed((): any => {
  return Icons[props[PropKeys.ICON] as keyof typeof Icons];
});
</script>
