<template>
  <BaseColumn direction="row" v-bind="$attrs" :class="classes"><slot /></BaseColumn>
</template>

<script setup lang="ts">
// Vue
;

// Styles
import styles from '@whirli-local/components/BaseRow/BaseRow.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseRow.config';

// Components
import BaseColumn from '@whirli-components/components/BaseColumn/BaseColumn.vue';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const classes = makeClasses(ComponentStyles, props, styles);
</script>
