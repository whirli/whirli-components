<template>
  <component :is="props.tag" :class="wrapperClasses">
    <div :class="contentClasses"><slot /></div>
  </component>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseListItem/BaseListItem.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseListItem.config';

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
const wrapperClasses = [styles['list-item'], makeClasses(ComponentStyles, props, styles)];
const contentClasses = [styles['list-item__content']];
</script>
