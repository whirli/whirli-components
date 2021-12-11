// @ts-ignore
import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli-local/components/BaseIcon/BaseIcon.config';

// Package config
import { PropKeys, PropValues } from './BaseIcon.constants';
import type { PropIcon, PropColor, PropSize } from './BaseIcon.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.COLOR]: {
    generateBreakpoints: true,
    classes: {
      default: 'color-inherit',
      ...config.styles[PropKeys.COLOR]?.classes,
    } as Record<PropColor, string>,
  },
  [PropKeys.SIZE]: {
    generateBreakpoints: true,
    classes: {
      '3xs': 'size-3xs',
      '2xs': 'size-2xs',
      xs: 'size-xs',
      sm: 'size-sm',
      default: 'size-default',
      md: 'size-md',
      lg: 'size-lg',
      xl: 'size-xl',
      ...config.styles[PropKeys.SIZE]?.classes,
    } as Record<PropSize, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.ICON]: {
    required: true,
    type: String as PropType<PropIcon>,
  },
  [PropKeys.COLOR]: {
    required: false,
    type: String as PropType<PropColor>,
    default: 'default',
    ...PropHelpers.stylePropValidation(ConfigStyles, PropKeys.COLOR),
  },
  [PropKeys.SIZE]: {
    required: false,
    type: [String, Object] as PropType<PropSize>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.SIZE),
  },
  ...config.props,
};
