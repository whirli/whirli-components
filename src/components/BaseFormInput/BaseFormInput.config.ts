// @ts-ignore
import { PropType } from '@composition';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseFormInput/BaseFormInput.config';

// Package config
import { PropKeys } from './BaseFormInput.constants';
import { PropType as PropInputType } from './BaseFormInput.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const SharedConfigProps: ComponentProps = {
  [PropKeys.DISABLED]: {
    required: false,
    type: Boolean as PropType<boolean>,
    default: false,
  },
  [PropKeys.NAME]: {
    required: false,
    type: String as PropType<string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.MULTIPLE]: {
    required: false,
    type: Boolean as PropType<boolean>,
    default: false,
  },

  [PropKeys.TYPE]: {
    required: false,
    type: String as PropType<PropInputType>,
    default: 'text',
  },
  [PropKeys.MODEL_VALUE]: {
    required: true,
    type: String as PropType<string>,
  },
  ...SharedConfigProps,
  ...config.props,
};
