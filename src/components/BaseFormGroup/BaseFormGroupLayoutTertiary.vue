<template>
  <BaseFormGroup>
    <BaseGrid gap="0">
      <BaseColumn :direction="columnDirection">
        <BaseRow>
          <BaseGrid gap="0">
            <BaseRow v-if="$slots.preLabel">
              <slot name="preLabel" />
            </BaseRow>
            <BaseRow>
              <BaseFormLabel :name="props.name">{{ props.label }}</BaseFormLabel>
            </BaseRow>
          </BaseGrid>
        </BaseRow>

        <BaseRow>
          <BaseGrid gap="0">
            <BaseRow>
              <slot name="default" />
            </BaseRow>
            <BaseRow v-if="$slots.postInput">
              <slot name="postInput" />
            </BaseRow>
          </BaseGrid>
        </BaseRow>
      </BaseColumn>
    </BaseGrid>
    <BaseGrid gap="0">
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
import BaseFormGroup from '@whirli-components/components/BaseFormGroup/BaseFormGroup.vue';
import BaseGrid from '@whirli-components/components/BaseGrid/BaseGrid.vue';
import BaseRow from '@whirli-components/components/BaseRow/BaseRow.vue';
import BaseFormLabel from '@whirli-components/components/BaseFormLabel/BaseFormLabel.vue';
import BaseFormError from '@whirli-components/components/BaseFormError/BaseFormError.vue';
import BaseColumn from '../BaseColumn/BaseColumn.vue';

// Composables
import useForm from '@whirli-components/@use/form';

// @ts-ignore
const props: Props = defineProps({ ...SharedConfigProps, ...ConfigProps });

const columnDirection: PropDirection = props[PropKeys.DIRECTION] === 'reverse' ? 'column-reverse' : 'default';

const { getErrorId } = useForm();
</script>
