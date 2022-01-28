<template>
  <component :is="tag">
    <div :class="classes"><slot /></div>
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

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = [styles['base-flex'], ...makeClasses(ComponentStyles, props, styles)];
</script>
