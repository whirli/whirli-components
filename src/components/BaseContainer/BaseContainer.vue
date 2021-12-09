<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup="props" lang="ts">
// Vue
import { defineProps } from 'vue';

// Styles
import styles from '@whirli-local/components/BaseContainer/BaseContainer.module.scss';

const classes = [styles.container];
</script>
