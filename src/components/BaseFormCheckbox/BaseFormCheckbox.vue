<template>
  <BaseFormGroupLayoutSecondary v-bind="$props">
    <input
      type="checkbox"
      :id="props.name"
      :name="props.name"
      :class="classes"
      :disabled="props.disabled"
      :aria-disabled="props.disabled"
      :aria-describedby="getErrorId(props.name, $props.error)"
      :checked="props.modelValue"
      @change="updateValue($event)"
    />
  </BaseFormGroupLayoutSecondary>
</template>

<script setup lang="ts">
// Vue
import { defineEmits } from '@composition';

// Styles
// @ts-ignore
import sharedStyles from '@whirli-local/components/BaseFormInput/BaseFormInput.module.scss?module';
// @ts-ignore
import styles from '@whirli-local/components/BaseFormCheckbox/BaseFormCheckbox.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseFormCheckbox.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

// Components
import BaseFormGroupLayoutSecondary from '@whirli-components/components/BaseFormGroup/BaseFormGroupLayoutSecondary.vue';

// Composables
import useClasses from '@whirli-components/@use/class';
import useForm from '@whirli-components/@use/form';

// @ts-ignore
const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void;
  (event: 'reset:errors'): void;
}>();

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const classes = [
  sharedStyles['input-shared'],
  styles.checkbox,
  ...makeClasses(ComponentStyles, ConfigProps, props, styles),
  ...makeClasses(ComponentStyles, ConfigProps, props, sharedStyles),
];

const updateValue: (event: Event) => void = (event: Event) => {
  emit('update:modelValue', Boolean((event.target as HTMLInputElement).checked));
  emit('reset:errors');
};

const { getErrorId } = useForm();
</script>
