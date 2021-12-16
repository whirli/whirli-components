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
import { ComponentStyles as ComponentStylesInterface } from '../../@types/components';
import { Props } from '../../@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const wrapperClasses = [styles['list-item'], makeClasses(ComponentStyles, props, styles)];
const contentClasses = [styles['list-item__content']];
</script>
