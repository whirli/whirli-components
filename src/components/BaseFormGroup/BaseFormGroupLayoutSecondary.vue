<template>
  <BaseFormGroup>
    <BaseGrid gap="0">
      <BaseRow :direction="rowDirection">
        <BaseFormLabel :name="props.name">{{ props.label }}</BaseFormLabel>
        <slot />
      </BaseRow>
      <BaseRow v-if="props.error">
        <BaseFormError :id="getErrorId(props.name, props.error)">{{ props.error }}</BaseFormError>
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

// Constants
import { PropKeys } from './BaseFormGroup.constants';

// Components
// @ts-ignore
import BaseFormGroup from '@whirli-components/components/BaseFormGroup/BaseFormGroup.vue';
// @ts-ignore
import BaseGrid from '@whirli-components/components/BaseGrid/BaseGrid.vue';
// @ts-ignore
import BaseRow from '@whirli-components/components/BaseRow/BaseRow.vue';
// @ts-ignore
import BaseFormLabel from '@whirli-components/components/BaseFormLabel/BaseFormLabel.vue';
// @ts-ignore
import BaseFormError from '@whirli-components/components/BaseFormError/BaseFormError.vue';

// Composables
import useForm from '@whirli-components/@use/form';

// @ts-ignore
const props: Props = defineProps({ ...SharedConfigProps, ...ConfigProps });

const rowDirection: PropDirection = props[PropKeys.DIRECTION] === 'reverse' ? 'row-reverse' : 'row';

const { getErrorId } = useForm();
</script>
