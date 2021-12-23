<template>
  <component :is="props.tag" :class="classes"><slot /></component>
</template>

<script setup lang="ts">
// Vue
// Styles
import styles from '@whirli-local/components/BaseTag/BaseTag.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseTag.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = [styles.tag, ...makeClasses(ComponentStyles, props, styles)];
</script>
