<template>
  <BaseFormGroupLayoutDefault v-bind="$props">
    <select :id="props.name" :name="props.name" :class="classes">
      <slot />
    </select>
  </BaseFormGroupLayoutDefault>
</template>

<script setup lang="ts">
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseFormInput/BaseFormInput.module.scss?module';

// Data
import {
  ConfigStyles,
  ConfigProps,
} from '@whirli-components/components/BaseFormGroup/BaseFormGroupLayout.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

// Components
import BaseFormGroupLayoutDefault from '@whirli-components/components/BaseFormGroup/BaseFormGroupLayoutDefault.vue';

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = [styles.input, styles.select, ...makeClasses(ComponentStyles, props, styles)];
</script>
