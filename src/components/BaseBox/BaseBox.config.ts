// @ts-ignore
import { PropType } from '@composition';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseBox/BaseBox.config';

// Package config
import { PropKeys } from './BaseBox.constants';
import type { PropTag, PropPadding } from './BaseBox.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.TAG]: {
    required: false,
    type: String as PropType<PropTag>,
    default: 'div',
  },
  [PropKeys.PADDING]: {
    required: false,
    type: [String, Array] as PropType<PropPadding | PropPadding[]>,
    default: 'base',
  },
  ...config.props,
};
