<template>
  <component :is="props.tag" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseFlex/BaseFlex.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseFlex.config';

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
const classes = [styles['base-flex'], ...makeClasses(ComponentStyles, ConfigProps, props, styles)];
</script>
