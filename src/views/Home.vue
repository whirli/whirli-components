<template>
  <div class="home">
    <BaseFormWrapper action="Test" @submit.prevent="alertMe()">
      <BaseFormInput
        type="email"
        name="email"
        label="Email"
        disabled
        v-model:modelValue="form.email"
        @reset:errors="form.errors.clear('email')"
        :error="form.errors.get('email')"
      />
      <BaseFormInput
        type="password"
        name="password"
        label="Password"
        v-model:modelValue="form.password"
        @reset:errors="form.errors.clear('password')"
        :error="form.errors.get('password')"
      />
      <BaseFormInput
        type="textarea"
        name="content"
        label="Content"
        v-model:modelValue="form.content"
        @reset:errors="form.errors.clear('content')"
        :error="form.errors.get('content')"
      />
      <BaseFormSelect
        name="country"
        label="Country"
        v-model:modelValue="form.country"
        @reset:errors="form.errors.clear('country')"
        :error="form.errors.get('country')"
      >
        <BaseFormSelectOption :selected="form.country" value="eng">England</BaseFormSelectOption>
        <BaseFormSelectOption :selected="form.country" value="scot">Scotland</BaseFormSelectOption>
      </BaseFormSelect>
      <BaseFormCheckbox
        name="consent"
        label="Is it okay if we email you?"
        v-model:modelValue="form.consent"
        @reset:errors="form.errors.clear('consent')"
        :error="form.errors.get('consent')"
      />
      <div class="radio-buttons">
        <BaseFormRadioButton
          group="test"
          value="testing-1"
          label="Label"
          v-model:modelValue="form.radio"
          @reset:errors="form.errors.clear('radio')"
          :error="form.errors.get('radio')"
        >
          <template #preLabel>Before label</template>
          <template #postInput>After input</template>
        </BaseFormRadioButton>
        <BaseFormRadioButton
          group="test"
          label="Label2"
          v-model:modelValue="form.radio"
          value="testing-2"
          @reset:errors="form.errors.clear('radio')"
          :error="form.errors.get('radio')"
        />
      </div>
      <BaseButton type="submit">Login</BaseButton>
    </BaseFormWrapper>
    <BaseText :line-height="{ default: 'md', tablet: 'lg' }" :letter-spacing="{ default: 'md', tablet: 'lg' }"
      >Hello world</BaseText
    >
    <BaseSection>Hello</BaseSection>
    <BaseAccordion :state="{ default: 'closed', tablet: 'open' }" name="test" disable-toggle>
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
import { ref, reactive } from '@composition';
import type { Ref } from '@composition';

import BaseText from '@/components/BaseText/BaseText.vue';
import BaseSection from '@/components/BaseSection/BaseSection.vue';
import BaseAccordion from '@/components/BaseAccordion/BaseAccordion.vue';
import BaseModal from '@/components/BaseModal/BaseModal.vue';
import BaseList from '@/components/BaseList/BaseList.vue';
import BaseListItem from '@/components/BaseListItem/BaseListItem.vue';
import BaseDivider from '@/components/BaseDivider/BaseDivider.vue';
import BaseTag from '@/components/BaseTag/BaseTag.vue';
import BasePagination from '@/components/BasePagination/BasePagination.vue';
import BaseFormWrapper from '@/components/BaseFormWrapper/BaseFormWrapper.vue';
import BaseFormInput from '@/components/BaseFormInput/BaseFormInput.vue';
import BaseFormSelect from '@/components/BaseFormSelect/BaseFormSelect.vue';
import BaseFormSelectOption from '@/components/BaseFormSelectOption/BaseFormSelectOption.vue';
import BaseFormCheckbox from '@/components/BaseFormCheckbox/BaseFormCheckbox.vue';
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import BaseFormRadioButton from '@/components/BaseFormRadioButton/BaseFormRadioButton.vue';

import { FormErrors } from '@whirli-components/helpers/forms';

interface MyForm {
  email: string;
  password: string;
  content: string;
  country: string;
  consent: boolean;
  radio: string | number;
  errors: FormErrors;
}

const form: MyForm = reactive({
  email: '',
  password: '',
  content: '',
  country: '',
  consent: false,
  radio: 'testing-1',
  errors: new FormErrors(),
});
const modalState: Ref<string> = ref('closed');
const setModalState = (state: string) => {
  modalState.value = state;
};

const alertMe = () => alert('LOGGIN');
</script>
