<template>
  <BaseFormGroupLayoutDefault v-bind="$props" @change="updateValue">
    <select :id="props.name" :name="props.name" :class="classes" :disabled="props.disabled">
      <option v-if="props.hasDropdownMessage" :selected="!props.selected" disabled>
        {{ props.dropdownMessage }}
      </option>
      <slot />
    </select>
  </BaseFormGroupLayoutDefault>
</template>

<script setup lang="ts">
// Vue
import { defineEmits } from '@composition';

// Styles
// @ts-ignore
import sharedStyles from '@whirli-local/components/BaseFormInput/BaseFormInput.module.scss?module';
import styles from '@whirli-local/components/BaseFormSelect/BaseFormSelect.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseFormSelect.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

// @ts-ignore
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
  (event: 'reset:errors'): void;
}>();

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

// Components
import BaseFormGroupLayoutDefault from '@whirli-components/components/BaseFormGroup/BaseFormGroupLayoutDefault.vue';

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = [
  sharedStyles['input-shared'],
  styles.select,
  ...makeClasses(ComponentStyles, props, styles),
  ...makeClasses(ComponentStyles, props, sharedStyles),
];

const updateValue: (event: Event) => void = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
  emit('reset:errors');
};
</script>
