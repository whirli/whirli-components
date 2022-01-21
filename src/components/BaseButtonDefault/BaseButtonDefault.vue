<template>
  <button :type="props.type" v-bind="$attrs">
    <template v-if="props.state === LoadingStates.LOADING">
      <slot name="loading">Loading&hellip;</slot>
    </template>
    <template v-else-if="props.state === LoadingStates.PROCESSING">
      <slot name="processing">Processing&hellip;</slot>
    </template>
    <template v-else-if="props.state === LoadingStates.COMPLETE">
      <slot name="complete">Complete</slot>
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
</template>

<script setup lang="ts">
// constants
import { LoadingStates } from '@whirli-components/components/BaseButton/BaseButton.constants';

// Data
import { ConfigStyles, ConfigProps } from './BaseButtonDefault.config';

// @ts-ignore
const props = defineProps(ConfigProps);
</script>
