<template>
  <label :for="props.name" :class="[classes, requiredClass]"><slot /></label>
</template>

<script setup lang="ts">
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseFormLabel/BaseFormLabel.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseFormLabel.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

// Composables
import useClasses from '@whirli-components/@use/class';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const classes: string[] = [styles.label, ...makeClasses(ComponentStyles, ConfigProps, props, styles)];
const requiredClass: string = props.required ? styles.required : '';
</script>
