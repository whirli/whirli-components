// @ts-ignore
import type { PropType } from 'vue';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli-local/components/BaseIconButton/BaseIconButton.config';

// Package config
import { PropKeys, PropValues } from './BaseIconButton.constants';
import type { PropTag } from './BaseIconButton.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.IS_DISABLED]: {
    required: false,
    type: Boolean as PropType<boolean>,
    default: false,
  },
  [PropKeys.TAG]: {
    required: false,
    type: String as PropType<PropTag>,
    validator: (value: PropTag): boolean => PropValues[PropKeys.TAG].includes(value),
    default: 'button',
  },
  ...config.props,
};
