// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseFormSelect/BaseFormSelect.config';

// Shared Config
import { SharedConfigProps } from '@whirli-components/components/BaseFormInput/BaseFormInput.config';

// Package config
import { PropKeys, PropValues } from './BaseFormSelect.constants';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.VALUE]: {
    required: true,
    type: [String, Number] as PropType<string | number>,
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
