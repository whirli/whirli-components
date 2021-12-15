// @ts-ignore
import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli-local/components/BaseList/BaseList.config';

// Package config
import { PropKeys, PropValues } from './BaseList.constants';
import type { PropStyle, PropTag } from './BaseList.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.LIST_STYLE]: {
    classes: {
      default: 'style-none',
      disc: 'style-disc',
      ...config.styles[PropKeys.LIST_STYLE]?.classes,
    } as Record<PropStyle, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.TAG]: {
    required: false,
    default: 'ul',
    type: String as PropType<PropTag>,
  },
  [PropKeys.LIST_STYLE]: {
    required: false,
    type: String as PropType<PropTag>,
    default: 'default',
    ...PropHelpers.stylePropValidation(ConfigStyles, PropKeys.LIST_STYLE),
  },
  ...config.props,
};
