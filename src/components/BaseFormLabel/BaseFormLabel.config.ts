// @ts-ignore
import { PropType } from 'vue';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli-local/components/BaseFormLabel/BaseFormLabel.config';

// Package config
import { PropKeys, PropValues } from './BaseFormLabel.constants';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.NAME]: {
    required: true,
    type: String as PropType<string>,
  },
  [PropKeys.REQUIRED]: {
    required: false,
    type: Boolean as PropType<boolean>,
    default: false,
  },
  ...config.props,
};
