<template>
  <BaseFormGroup>
    <BaseGrid gap="0">
      <BaseRow>
        <BaseFormLabel :name="props.name">{{ props.label }}</BaseFormLabel>
      </BaseRow>
      <BaseRow>
        <slot />
      </BaseRow>
      <BaseRow v-if="props.error">
        <BaseFormError>{{ props.error }}</BaseFormError>
      </BaseRow>
    </BaseGrid>
  </BaseFormGroup>
</template>

<script setup lang="ts">
// Data
import { ConfigProps } from './BaseFormGroupLayout.config';

// Types
import { Props } from '@whirli-components/@types/props';

// @ts-ignore
const props: Props = defineProps(ConfigProps);

// Components
import BaseFormGroup from '@whirli-components/components/BaseFormGroup/BaseFormGroup.vue';
import BaseGrid from '@whirli-components/components/BaseGrid/BaseGrid.vue';
import BaseRow from '@whirli-components/components/BaseRow/BaseRow.vue';
import BaseFormLabel from '@whirli-components/components/BaseFormLabel/BaseFormLabel.vue';
import BaseFormError from '@whirli-components/components/BaseFormError/BaseFormError.vue';
</script>
