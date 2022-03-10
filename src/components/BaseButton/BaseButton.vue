<template>
  <component
    :is="button"
    :type="props.type"
    :url="props.url"
    :class="classes"
    :state="props.state"
    v-bind="$attrs"
  >
    <slot />
    <template #processing>
      <slot name="processing" />
    </template>
    <template #loading>
      <slot name="loading" />
    </template>
    <template #complete>
      <slot name="complete" />
    </template>
  </component>
</template>

<script setup lang="ts">
// Vue
import { computed, ComputedRef } from '@composition';

// components
// @ts-ignore
import BaseButtonDefault from '@whirli-components/components/BaseButtonDefault/BaseButtonDefault.vue';
// @ts-ignore
import BaseButtonLink from '@whirli-components/components/BaseButtonLink/BaseButtonLink.vue';

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseButton/BaseButton.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseButton.config';

// Composables
import useClasses from '@whirli-components/@use/class';

const ComponentStyles = ConfigStyles;

// @ts-ignore
const props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const classes: ComputedRef<string[]> = computed(() => [
  styles.button,
  ...makeClasses(ComponentStyles, ConfigProps, props, styles),
]);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const button: ComputedRef<any> = computed((): any => {
  return props.url !== undefined ? BaseButtonLink : BaseButtonDefault;
});
</script>
