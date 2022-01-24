<template>
  <form :action="props.action" :method="props.method" :enctype="attributes[PropKeys.ENCODE]">
    <slot />
  </form>
</template>

<script setup lang="ts">
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseFormWrapper/BaseFormWrapper.module.scss?module';

// Data
import { ConfigStyles, ConfigProps, ConfigAttributes } from './BaseFormWrapper.config';

// Constants
import { PropKeys } from './BaseFormWrapper.constants';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;
const ComponentAttributes: Record<string, Record<string, string>> = ConfigAttributes;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = makeClasses(ComponentStyles, props, styles);

// Attributes
const attributes: Record<string, string> = {
  [PropKeys.ENCODE]: ComponentAttributes[PropKeys.ENCODE][props[PropKeys.ENCODE]],
};
</script>
