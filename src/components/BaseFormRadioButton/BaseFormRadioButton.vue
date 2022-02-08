<template>
  <BaseFormGroupLayoutTertiary :name="id">
    <template #preLabel>
      <slot name="preLabel" />
    </template>
    <template #postInput>
      <slot name="postInput" />
    </template>
    <span :class="wrapperClasses">
      <input
        type="radio"
        :class="inputClasses"
        v-bind="$attrs"
        :disabled="props.disabled"
        :aria-disabled="props.disabled"
        :aria-describedby="getErrorId(props.name, $props.error)"
        :name="props.group"
        :id="id"
        :value="props.value"
        :checked="isChecked"
        @change="updateValue()"
      />
      <span :class="displayClasses" />
      <div ref="renderElement" :aria-checked="props.modelValue" :class="fakerClasses" role="radio">
        <slot name="default" />
      </div>
    </span>
  </BaseFormGroupLayoutTertiary>
</template>

<script setup lang="ts">
// Vue
import { computed, defineEmits, ComputedRef } from '@composition';

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseFormRadioButton/BaseFormRadioButton.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseFormRadioButton.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

// Components
// @ts-ignore
import BaseFormGroupLayoutTertiary from '@whirli-components/components/BaseFormGroup/BaseFormGroupLayoutTertiary.vue';

// Composables
import useClasses from '@whirli-components/@use/class';
import useForm from '@whirli-components/@use/form';

// @ts-ignore
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
  (event: 'reset:errors'): void;
}>();

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const wrapperClasses: ComputedRef<string[]> = computed(() => [
  styles['radio-button-wrapper'],
  ...makeClasses(ComponentStyles, ConfigProps, props, styles),
]);
const inputClasses: ComputedRef<string[]> = computed(() => [styles['radio-button-input']]);
const displayClasses: ComputedRef<string[]> = computed(() => [styles['radio-button-display']]);
const fakerClasses: ComputedRef<string[]> = computed(() => [styles['radio-button-faker']]);

const isChecked: ComputedRef<boolean> = computed(() => props.value == props.modelValue);
const id: ComputedRef<string> = computed(() => `${props.group}-${props.value}`);

const updateValue = (): void => {
  emit('update:modelValue', props.value);
  emit('reset:errors');
};

const { getErrorId } = useForm();
</script>
