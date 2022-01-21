<template>
  <div :class="classes">Hello from BaseFormInput component</div>
</template>

<script setup lang="ts">
// Vue
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseFormInput/BaseFormInput.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseFormInput.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = makeClasses(ComponentStyles, props, styles);
</script>
