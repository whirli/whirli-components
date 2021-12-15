<template>
  <component :is="props.tag" :class="classes">
    <BaseIcon v-bind="$attrs" />
  </component>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseIconButton/BaseIconButton.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseIconButton.config';

// Components
import BaseIcon from '../BaseIcon/BaseIcon.vue';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = [styles['icon-button'], makeClasses(ComponentStyles, props, styles)];
</script>
