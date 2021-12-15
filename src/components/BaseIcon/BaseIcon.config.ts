// @ts-ignore
import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli-local/components/BaseIcon/BaseIcon.config';

// Package config
import { PropKeys, PropValues } from './BaseIcon.constants';
import type { PropIcon, PropBackdrop, PropSize, PropTheme } from './BaseIcon.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.BACKDROP]: {
    classes: {
      default: 'backdrop-default',
      circle: 'backdrop-circle',
      square: 'backdrop-square',
      ...config.styles[PropKeys.BACKDROP]?.classes,
    } as Record<PropBackdrop, string>,
  },
  [PropKeys.THEME]: {
    classes: {
      default: 'theme-default',
      ...config.styles[PropKeys.THEME]?.classes,
    } as Record<PropTheme, string>,
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
  [PropKeys.BACKDROP]: {
    required: false,
    type: String as PropType<PropBackdrop>,
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.BACKDROP),
    default: 'default',
  },
  [PropKeys.SIZE]: {
    required: false,
    type: [String, Object] as PropType<PropSize>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.SIZE),
  },
  [PropKeys.THEME]: {
    required: false,
    type: String as PropType<PropTheme>,
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.THEME),
    default: 'default',
  },
  ...config.props,
};
