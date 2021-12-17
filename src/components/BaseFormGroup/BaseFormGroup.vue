<template>
  <div :class="classes"><slot /></div>
</template>

<script setup lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseFormGroup/BaseFormGroup.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseFormGroup.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '../../@types/components';
import { Props } from '../../@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes: string[] = [styles['form-group'], ...makeClasses(ComponentStyles, props, styles)];
</script>
