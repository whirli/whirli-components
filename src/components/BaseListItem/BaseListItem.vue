<template>
  <component :is="props.tag" :class="wrapperClasses">
    <div :class="contentClasses"><slot /></div>
  </component>
</template>

<script setup lang="ts">
// Vue
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseListItem/BaseListItem.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseListItem.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const wrapperClasses = [styles['list-item'], makeClasses(ComponentStyles, props, styles)];
const contentClasses = [styles['list-item__content']];
</script>
