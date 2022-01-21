<template>
  <component :is="routerComponent" v-if="isInternal" :to="props.url"><slot /></component>
  <a :href="props.url" v-else target="_blank" rel="nofollow noopener"><slot /></a>
</template>

<script setup lang="ts">
// Vue
import { computed } from '@composition';
import type { ComputedRef } from '@composition';

// Data
import { ConfigProps } from './BaseButtonLink.config';

// @ts-ignore
const props = defineProps(ConfigProps);

// Component
const isInternal: ComputedRef<boolean> = computed((): boolean => {
  return props.url.startsWith('/');
});

// @ts-ignore
const routerComponent = typeof $nuxt !== 'undefined' ? 'NuxtLink' : 'RouterLink';
</script>
