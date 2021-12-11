<template>
  <div class="home">
    <BaseText :line-height="{ default: 'md', tablet: 'lg' }" :letter-spacing="{ default: 'md', tablet: 'lg' }"
      >Hello world</BaseText
    >
    <BaseSection>Hello</BaseSection>
    <BaseModal :state="modalState" @modal:close="setModalState('closed')">Hello world</BaseModal>

    <button @click="setModalState('closed')">Close</button>
    <button @click="setModalState('open')">Open</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

import BaseText from '@/components/BaseText/BaseText.vue';
import BaseSection from '@/components/BaseSection/BaseSection.vue';
import BaseModal from '@/components/BaseModal/BaseModal.vue';

const modalState: Ref<string> = ref('closed');
const setModalState = (state: string) => {
  modalState.value = state;
};
</script>
