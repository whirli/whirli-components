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

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// constants
import { LoadingStates } from '../BaseButton/BaseButton.constants';

// Data
import { ConfigStyles, ConfigProps } from './BaseButtonDefault.config';

const props = defineProps(ConfigProps);
</script>
