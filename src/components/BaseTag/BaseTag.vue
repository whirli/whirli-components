<template>
  <component :is="props.tag" :class="classes"><slot /></component>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseTag/BaseTag.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseTag.config';

// Types
import {
  ComponentStyles as ComponentStylesInterface,
  ComponentProps as ComponentPropsInterface,
} from '../../@types/components';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: ComponentPropsInterface = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = [styles.tag, ...makeClasses(ComponentStyles, props, styles)];
</script>
