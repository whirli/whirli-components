<template>
  <div class="home">
    <BaseText :line-height="{ default: 'md', tablet: 'lg' }" :letter-spacing="{ default: 'md', tablet: 'lg' }"
      >Hello world</BaseText
    >
    <BaseSection>Hello</BaseSection>
    <BaseAccordion :state="{ default: 'closed', tablet: 'open' }" name="test">
      <template v-slot:title>TESTING</template>
      <template v-slot:content>HELLO</template>
    </BaseAccordion>
  </div>
</template>

<script setup lang="ts">
import BaseText from '@/components/BaseText/BaseText.vue';
import BaseSection from '@/components/BaseSection/BaseSection.vue';
import BaseAccordion from '@/components/BaseAccordion/BaseAccordion.vue';
</script>
