<template>
  <label :for="props.name" :class="[classes, requiredClass]"><slot /></label>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseFormLabel/BaseFormLabel.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseFormLabel.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '../../@types/components';
import { Props } from '../../@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes: string[] = [styles.label, ...makeClasses(ComponentStyles, props, styles)];
const requiredClass: string = props.required ? styles.required : '';
</script>
