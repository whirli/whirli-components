<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Vue

// Styles
import styles from '@whirli-local/components/BaseContainer/BaseContainer.module.scss';

const classes = [styles.container];
</script>
