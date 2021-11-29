<template>
  <div>Hello</div>
</template>

<script setup="props" lang="ts">
import { defineProps } from 'vue';
import { test } from './TestComponent';

const props = defineProps(test);
</script>
