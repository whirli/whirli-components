<template>
  <div :class="classes">Hello from SkeletonComponent component</div>
</template>

<script setup lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli-local/components/SkeletonComponent/SkeletonComponent.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './SkeletonComponent.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '../../@types/components';
import { Props } from '../../@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = makeClasses(ComponentStyles, props, styles);
</script>
