<template>
  <hr :class="classes" />
</template>

<script setup lang="ts">
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseDivider/BaseDivider.module.scss?module';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

// Data
import { ConfigStyles, ConfigProps } from './BaseDivider.config';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = [styles.divider, ...makeClasses(ComponentStyles, props, styles)];
</script>
