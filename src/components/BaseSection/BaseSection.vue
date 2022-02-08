<template>
  <section :class="classes">
    <BaseSpacer :size="gutter.top" />
    <div>
      <slot />
    </div>
    <BaseSpacer :size="gutter.bottom" />
  </section>
</template>

<script setup lang="ts">
// Vue
import { computed, ComputedRef } from '@composition';

// Types
import { ComputedSize } from './BaseSection.types';

// Components
// @ts-ignore
import BaseSpacer from '@whirli-components/components/BaseSpacer/BaseSpacer.vue';

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseSection/BaseSection.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseSection.config';

// Composables
import useClasses from '@whirli-components/@use/class';

const ComponentStyles = ConfigStyles;

// @ts-ignore
const props = defineProps(ConfigProps);

// Classes
const { makeClasses } = useClasses();
const classes: ComputedRef<string[]> = computed((): string[] => {
  return [styles.section, ...makeClasses(ComponentStyles, ConfigProps, props, styles)];
});

const gutter: ComputedRef<ComputedSize> = computed(() => {
  return {
    top: props.size.top ? props.size.top : props.size.bottom ? undefined : props.size,
    bottom: props.size.bottom ? props.size.bottom : props.size.top ? undefined : props.size,
  };
});
</script>
