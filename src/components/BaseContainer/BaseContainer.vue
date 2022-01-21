<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseContainer/BaseContainer.module.scss?module';

const classes = [styles.container];
</script>
