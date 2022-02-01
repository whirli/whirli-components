<template>
  <component :is="props.tag" :class="classes"><slot /></component>
</template>

<script setup lang="ts">
// Vue
import { computed, ComputedRef } from '@composition';
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseBox/BaseBox.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseBox.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

// Composables
import useClasses from '@whirli-components/@use/class';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();

const padding = (size: string, side: string) => styles[`padding-${side}-${size}`];

const paddingClasses: ComputedRef<string[]> = computed(() => {
  if (props.padding.length === 1 || typeof props.padding === 'string') {
    return [
      padding(props.padding, 'top'),
      padding(props.padding, 'right'),
      padding(props.padding, 'bottom'),
      padding(props.padding, 'left'),
    ];
  }
  if (padding.length === 2) {
    return [
      padding(props.padding[0], 'top'),
      padding(props.padding[1], 'right'),
      padding(props.padding[0], 'bottom'),
      padding(props.padding[1], 'left'),
    ];
  }
  if (padding.length === 3) {
    return [
      padding(props.padding[0], 'top'),
      padding(props.padding[1], 'right'),
      padding(props.padding[2], 'bottom'),
      padding(props.padding[1], 'left'),
    ];
  }
  if (padding.length === 4) {
    return [
      padding(props.padding[0], 'top'),
      padding(props.padding[1], 'right'),
      padding(props.padding[2], 'bottom'),
      padding(props.padding[3], 'left'),
    ];
  }
  return [];
});

const classes: ComputedRef<string[]> = computed(() => [
  styles['base-box'],
  ...paddingClasses.value,
  makeClasses(ComponentStyles, props, styles),
]);
</script>
