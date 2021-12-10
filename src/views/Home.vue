<template>
  <div class="home">
    <BaseText :line-height="{ default: 'md', tablet: 'lg' }" :letter-spacing="{ default: 'md', tablet: 'lg' }"
      >Hello world</BaseText
    >
    <BaseSection>Hello</BaseSection>
  </div>
</template>

<script setup lang="ts">
import BaseText from '@/components/BaseText/BaseText.vue';
import BaseSection from '@/components/BaseSection/BaseSection.vue';
</script>
