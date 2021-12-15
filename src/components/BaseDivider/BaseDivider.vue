<template>
  <hr :class="classes" />
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseDivider/BaseDivider.module.scss';

// Types
import {
  ComponentStyles as ComponentStylesInterface,
  ComponentProps as ComponentPropsInterface,
} from '../../@types/components';

// Data
import { ConfigStyles, ConfigProps } from './BaseDivider.config';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: ComponentPropsInterface = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = [styles.divider, ...makeClasses(ComponentStyles, props, styles)];
</script>
