// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseListItem/BaseListItem.config';

// Package config
import { PropKeys } from './BaseListItem.constants';
import { PropTag } from './BaseListItem.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.TAG]: {
    required: false,
    type: String as PropType<PropTag>,
    default: 'li',
  },
  ...config.props,
};
