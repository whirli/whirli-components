// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseFormSelect/BaseFormSelect.config';

// Shared Config
import { SharedConfigProps } from '@whirli-components/components/BaseFormInput/BaseFormInput.config';

// Package config
import { PropKeys } from './BaseFormSelect.constants';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.HAS_DROPDOWN_MESSAGE]: {
    required: false,
    type: Boolean as PropType<boolean>,
    default: true,
  },
  [PropKeys.DROPDOWN_MESSAGE]: {
    required: false,
    type: String as PropType<string>,
    default: 'Please select an option',
  },
  [PropKeys.SELECTED]: {
    required: false,
    type: String as PropType<string>,
    default: '',
  },
  ...SharedConfigProps,
  ...config.props,
};
