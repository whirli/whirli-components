<template>
  <BaseFormGroup>
    <BaseGrid>
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
// Vue
import { defineProps } from 'vue';

// Data
import { ConfigProps } from './BaseFormGroupLayout.config';

// Types
import { Props } from '../../@types/props';

const props: Props = defineProps(ConfigProps);

// Components
import BaseFormGroup from '../BaseFormGroup/BaseFormGroup.vue';
import BaseGrid from '../BaseGrid/BaseGrid.vue';
import BaseRow from '../BaseRow/BaseRow.vue';
import BaseFormLabel from '../BaseFormLabel/BaseFormLabel.vue';
import BaseFormError from '../BaseFormError/BaseFormError.vue';
</script>
