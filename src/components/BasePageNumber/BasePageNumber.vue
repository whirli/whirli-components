<template>
  <component
    :is="tag"
    :href="pageUrl"
    :class="[defaultClasses, activeClasses, disabledClasses]"
    @click.prevent="$emit('page-number:click', props.pageNumber)"
  >
    {{ props.pageNumber }}
  </component>
</template>

<script setup lang="ts">
// Vue
import { defineProps, defineEmits, computed } from 'vue';
import type { ComputedRef } from 'vue';
import { useRoute } from 'vue-router';

defineEmits(['page-number:click']);
const Route = useRoute();

// Styles
import styles from '@whirli-local/components/BasePageNumber/BasePageNumber.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BasePageNumber.config';
import { PropKeys } from '../BasePageNumber/BasePageNumber.constants';

// Types
import { ComponentStyles as ComponentStylesInterface } from '../../@types/components';
import { Props } from '../../@types/props';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

const pageUrl: ComputedRef<string> = computed(() => `${Route.path}?page=${props.pageNumber}`);
const isActivePage: ComputedRef<boolean> = computed(
  () =>
    (Route.query.page && +Route.query.page === props.pageNumber) ||
    (!Route.query.page && props.pageNumber === 1)
);

const tag: ComputedRef<string> = computed(() => (isActivePage.value ? 'div' : 'a'));

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const defaultClasses = [styles['page-number'], ...makeClasses(ComponentStyles, props, styles)];
const activeClasses: ComputedRef<string> = computed(() => (isActivePage.value ? styles['is-active'] : ''));
const disabledClasses: ComputedRef<string> = computed(() =>
  props[PropKeys.IS_DISABLED] ? styles['is-disabled'] : ''
);
</script>
