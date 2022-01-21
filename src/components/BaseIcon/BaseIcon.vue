<template>
  <component :is="iconComponent" :class="classes" v-bind="$attrs" />
</template>

<script setup lang="ts">
// Vue
import { computed } from '@composition';

// Types
import type { ComputedRef } from '@composition';

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseIcon/BaseIcon.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseIcon.config';

// Components
import PackageIcons from './Icons';
import { LocalIcons } from '@whirli-local/components/BaseIcon/BaseIcon.config';

const Icons = { ...PackageIcons, ...LocalIcons };

const ComponentStyles = ConfigStyles;
import { PropKeys } from '@whirli-components/components/BaseIcon/BaseIcon.constants';

// @ts-ignore
const props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes: ComputedRef<string[]> = computed((): string[] => {
  return [styles.icon, ...makeClasses(ComponentStyles, props, styles)];
});

// Get icon
const iconComponent: ComputedRef<any> = computed((): any => {
  return Icons[props[PropKeys.ICON] as keyof typeof Icons];
});
</script>
