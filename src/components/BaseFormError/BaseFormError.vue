<template>
  <BaseText v-bind="$attrs" :class="classes" v-if="$slots.default"><slot /></BaseText>
</template>

<script setup lang="ts">
// Vue
// Styles
import styles from '@whirli-local/components/BaseFormError/BaseFormError.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseFormError.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
import BaseText from '@whirli-components/components/BaseText/BaseText.vue';
const { makeClasses } = useClasses();
const classes = [styles.error, ...makeClasses(ComponentStyles, props, styles)];
</script>
