<template>
  <option :selected="isSelected" :value="props.value"><slot /></option>
</template>

<script setup lang="ts">
import { computed } from '@composition';
import type { ComputedRef } from '@composition';

// Data
import { ConfigProps } from './BaseFormSelectOption.config';

// Types
import { Props } from '@whirli-components/@types/props';

// @ts-ignore
const props: Props = defineProps(ConfigProps);

const isSelected: ComputedRef<boolean> = computed(() => props.value === props.selected);
</script>
