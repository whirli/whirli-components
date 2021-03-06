// @ts-ignore
import { PropType } from '@composition';

import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseFormGroup/BaseFormGroup.config';
import { PropDirection } from '@whirli-components/components/BaseColumn/BaseColumn.types';
import { PropKeys } from './BaseFormGroup.constants';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.NAME]: {
    required: true,
    type: String as PropType<string>,
  },
  [PropKeys.LABEL]: {
    required: true,
    type: String as PropType<string>,
  },
  [PropKeys.ERROR]: {
    required: false,
    type: String as PropType<string>,
    default: null,
  },
  ...config.props,
};
