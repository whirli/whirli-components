<template>
  <component :is="props.tag" :class="wrapperClasses">
    <div :class="contentClasses"><slot /></div>
  </component>
</template>

<script setup lang="ts">
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseListItem/BaseListItem.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseListItem.config';

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
const wrapperClasses = [styles['list-item'], makeClasses(ComponentStyles, ConfigProps, props, styles)];
const contentClasses = [styles['list-item__content']];
</script>
