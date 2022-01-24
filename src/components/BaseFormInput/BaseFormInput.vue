<template>
  <BaseFormGroupLayoutDefault v-bind="$props">
    <textarea
      v-if="isTextarea"
      :id="props.name"
      :name="props.name"
      :class="classes"
      :disabled="props.disabled"
      :aria-disabled="props.disabled"
      :value="props.value"
      @keyup="updateValue"
      @keydown="resetErrors"
      @change="onChange"
    ></textarea>
    <input
      v-else
      :type="props.type"
      :id="props.name"
      :name="props.name"
      :class="classes"
      :disabled="props.disabled"
      :aria-disabled="props.disabled"
      :multiple="props.multiple"
      :value="props.value"
      @keyup="updateValue"
      @keydown="resetErrors"
      @change="onChange"
    />
  </BaseFormGroupLayoutDefault>
</template>

<script setup lang="ts">
// Vue
import { defineEmits } from '@composition';

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseFormInput/BaseFormInput.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseFormInput.config';

// Constants
import { PropKeys } from './BaseFormInput.constants';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

// @ts-ignore
const emit = defineEmits<{
  (event: 'update:value', value: string): void;
  (event: 'reset:errors'): void;
  (event: 'update:image', value: FileList | null): void;
}>();

// Components
import BaseFormGroupLayoutDefault from '@whirli-components/components/BaseFormGroup/BaseFormGroupLayoutDefault.vue';

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = [styles['input-shared'], styles.input, ...makeClasses(ComponentStyles, props, styles)];

const isTextarea = props[PropKeys.TYPE] === 'textarea';

const updateValue: (event: Event) => void = (event: Event) => {
  emit('update:value', (event.target as HTMLInputElement).value);
};

const resetErrors: () => void = () => {
  emit('reset:errors');
};
const onChange: (event: Event) => void = (event: Event) => {
  emit('update:image', (event.target as HTMLInputElement).files);
};
</script>
