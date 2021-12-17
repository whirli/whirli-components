<template>
  <BaseColumn direction="row" v-bind="$attrs" :class="classes"><slot /></BaseColumn>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseRow/BaseRow.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseRow.config';

// Components
import BaseColumn from '../BaseColumn/BaseColumn.vue';

// Types
import { ComponentStyles as ComponentStylesInterface } from '../../@types/components';
import { Props } from '../../@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = makeClasses(ComponentStyles, props, styles);
</script>
