<template>
  <BaseText v-bind="$attrs" :class="classes" v-if="$slots.default"><slot /></BaseText>
</template>

<script setup lang="ts">
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseFormError/BaseFormError.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseFormError.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

// Components
import BaseText from '@whirli-components/components/BaseText/BaseText.vue';

// Composables
import useClasses from '@whirli-components/@use/class';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const classes = [styles.error, ...makeClasses(ComponentStyles, ConfigProps, props, styles)];
</script>
