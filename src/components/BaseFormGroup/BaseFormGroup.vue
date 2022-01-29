<template>
  <div :class="classes"><slot /></div>
</template>

<script setup lang="ts">
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseFormGroup/BaseFormGroup.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseFormGroup.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes: string[] = [styles['form-group'], ...makeClasses(ComponentStyles, ConfigProps, props, styles)];
</script>
