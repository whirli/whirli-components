// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseList/BaseList.config';

// Package config
import { PropKeys } from './BaseList.constants';
import { PropStyle, PropTag, PropDirection } from './BaseList.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.LIST_STYLE]: {
    classes: {
      default: 'style-none',
      disc: 'style-disc',
      ...config.styles[PropKeys.LIST_STYLE]?.classes,
    } as Record<PropStyle, string>,
  },
  [PropKeys.DIRECTION]: {
    generateBreakpoints: true,
    classes: {
      default: 'direction-column',
      row: 'direction-row',
      ...config.styles[PropKeys.DIRECTION]?.classes,
    } as Record<PropDirection, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.TAG]: {
    required: false,
    default: 'ul',
    type: String as PropType<PropTag>,
  },
  [PropKeys.DIRECTION]: {
    required: false,
    type: [String, Object] as PropType<PropDirection | Record<string, PropDirection>>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.DIRECTION),
  },
  [PropKeys.LIST_STYLE]: {
    required: false,
    type: String as PropType<PropTag>,
    default: 'default',
    ...PropHelpers.stylePropValidation(ConfigStyles, PropKeys.LIST_STYLE),
  },
  ...config.props,
};
