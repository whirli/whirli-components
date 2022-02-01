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
import { defineEmits, computed, ComputedRef } from '@composition';
import { useRoute } from 'vue-router';

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BasePageNumber/BasePageNumber.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BasePageNumber.config';
import { PropKeys } from '@whirli-components/components/BasePageNumber/BasePageNumber.constants';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';

// Composables
import useClasses from '@whirli-components/@use/class';

defineEmits(['page-number:click']);
const Route = useRoute();

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

const pageUrl: ComputedRef<string> = computed(() => `${Route.path}?page=${props.pageNumber}`);
const isActivePage: ComputedRef<boolean> = computed(
  () =>
    (Route.query.page && +Route.query.page === props.pageNumber) ||
    (!Route.query.page && props.pageNumber === 1)
);

const tag: ComputedRef<string> = computed(() => (isActivePage.value ? 'div' : 'a'));

// Classes
const { makeClasses } = useClasses();
const defaultClasses = [styles['page-number'], ...makeClasses(ComponentStyles, ConfigProps, props, styles)];
const activeClasses: ComputedRef<string> = computed(() => (isActivePage.value ? styles['is-active'] : ''));
const disabledClasses: ComputedRef<string> = computed(() =>
  props[PropKeys.IS_DISABLED] ? styles['is-disabled'] : ''
);
</script>
