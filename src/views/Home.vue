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
    <BaseModal :state="modalState" @modal:close="setModalState('closed')">Hello world</BaseModal>

    <BaseDivider />

    <button @click="setModalState('closed')">Close</button>
    <button @click="setModalState('open')">Open</button>

    <BaseList>
      <BaseListItem>Hello world</BaseListItem>
    </BaseList>
    <BaseTag>Hello world</BaseTag>

    <BasePagination :first-page="1" :last-page="30" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

import BaseText from '@/components/BaseText/BaseText.vue';
import BaseSection from '@/components/BaseSection/BaseSection.vue';
import BaseAccordion from '@/components/BaseAccordion/BaseAccordion.vue';
import BaseModal from '@/components/BaseModal/BaseModal.vue';
import BaseList from '@/components/BaseList/BaseList.vue';
import BaseListItem from '@/components/BaseListItem/BaseListItem.vue';
import BaseDivider from '@/components/BaseDivider/BaseDivider.vue';
import BaseTag from '@/components/BaseTag/BaseTag.vue';
import BasePagination from '@/components/BasePagination/BasePagination.vue';

const modalState: Ref<string> = ref('closed');
const setModalState = (state: string) => {
  modalState.value = state;
};
</script>
