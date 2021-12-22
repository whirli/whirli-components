<template>
  <div :class="classes">Hello from SkeletonComponent component</div>
</template>

<script setup lang="ts">
// Vue

// Styles
import styles from '@whirli-local/components/SkeletonComponent/SkeletonComponent.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './SkeletonComponent.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = makeClasses(ComponentStyles, props, styles);
</script>
