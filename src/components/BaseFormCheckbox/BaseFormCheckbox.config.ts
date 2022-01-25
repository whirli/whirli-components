// @ts-ignore
import { PropType } from '@composition';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseFormCheckbox/BaseFormCheckbox.config';

// Package config
import { PropKeys } from './BaseFormCheckbox.constants';

// Shared Config
import { SharedConfigProps } from '@whirli-components/components/BaseFormInput/BaseFormInput.config';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.MODEL_VALUE]: {
    required: true,
    type: Boolean as PropType<boolean>,
  },
  ...SharedConfigProps,
  ...config.props,
};
