<template>
  <BaseFormGroupLayoutDefault v-bind="$props" @change="updateValue">
    <select :id="props.name" :name="props.name" :class="classes">
      <option :selected="!props.selected" disabled>{{ props.dropdownMessage }}</option>
      <slot />
    </select>
  </BaseFormGroupLayoutDefault>
</template>

<script setup lang="ts">
// Vue
import { defineEmits } from '@composition';

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseFormInput/BaseFormInput.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseFormSelect.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

// @ts-ignore
const emit = defineEmits<{
  (event: 'update:value', value: string): void;
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
const classes = [styles.input, styles.select, ...makeClasses(ComponentStyles, props, styles)];

const updateValue: (event: Event) => void = (event: Event) => {
  emit('update:value', (event.target as HTMLInputElement).value);
  emit('reset:errors');
};
</script>
