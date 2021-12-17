<template>
  <BaseText v-bind="$attrs" :class="classes" v-if="$slots.default"><slot /></BaseText>
</template>

<script setup lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseFormError/BaseFormError.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseFormError.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '../../@types/components';
import { Props } from '../../@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
import BaseText from '../BaseText/BaseText.vue';
const { makeClasses } = useClasses();
const classes = [styles.error, ...makeClasses(ComponentStyles, props, styles)];
</script>
