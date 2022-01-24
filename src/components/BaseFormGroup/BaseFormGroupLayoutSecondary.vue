<template>
  <BaseFormGroup>
    <BaseGrid gap="0">
      <BaseRow :direction="rowDirection">
        <BaseFormLabel :name="props.name">{{ props.label }}</BaseFormLabel> <slot />
      </BaseRow>
      <BaseRow v-if="props.error">
        <BaseFormError>{{ props.error }}</BaseFormError>
      </BaseRow>
    </BaseGrid>
  </BaseFormGroup>
</template>

<script setup lang="ts">
// Data
import { ConfigProps as SharedConfigProps } from './BaseFormGroupLayout.config';
import { ConfigProps } from './BaseFormGroupLayoutSecondary.config';

// Types
import { Props } from '@whirli-components/@types/props';
import { PropDirection } from './BaseFormGroup.types';

// @ts-ignore
const props: Props = defineProps({ ...SharedConfigProps, ...ConfigProps });

// Constants
import { PropKeys } from './BaseFormGroup.constants';

// Components
import BaseFormGroup from '@whirli-components/components/BaseFormGroup/BaseFormGroup.vue';
import BaseGrid from '@whirli-components/components/BaseGrid/BaseGrid.vue';
import BaseRow from '@whirli-components/components/BaseRow/BaseRow.vue';
import BaseFormLabel from '@whirli-components/components/BaseFormLabel/BaseFormLabel.vue';
import BaseFormError from '@whirli-components/components/BaseFormError/BaseFormError.vue';

const rowDirection: PropDirection = props[PropKeys.DIRECTION] === 'reverse' ? 'row-reverse' : 'row';
</script>
