<template>
  <div :class="classes">Hello from SkeletonComponent component</div>
</template>

<script setup lang="ts">
// Styles
// @ts-ignore
import styles from '@whirli-local/components/SkeletonComponent/SkeletonComponent.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './SkeletonComponent.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

// Composables
import useClasses from '@whirli-components/@use/class';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const classes = makeClasses(ComponentStyles, props, styles);
</script>
