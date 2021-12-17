<template>
  <hr :class="classes" />
</template>

<script setup lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseDivider/BaseDivider.module.scss';

// Types
import { ComponentStyles as ComponentStylesInterface } from '../../@types/components';
import { Props } from '../../@types/props';

// Data
import { ConfigStyles, ConfigProps } from './BaseDivider.config';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = [styles.divider, ...makeClasses(ComponentStyles, props, styles)];
</script>
