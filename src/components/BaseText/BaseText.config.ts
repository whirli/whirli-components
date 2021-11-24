import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli/BaseText/BaseText.config';

// Package config
import { PropKeys, PropValues } from './BaseText.constants';
import type { PropColor, PropSize, PropTag, PropFamily } from './BaseText.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.COLOR]: {
    generateBreakpoints: true,
    classes: {
      default: 'color-black',
      ...config.styles[PropKeys.COLOR]?.classes,
    } as Record<PropColor, string>,
  },
  [PropKeys.SIZE]: {
    generateBreakpoints: true,
    classes: {
      default: 'size-base',
      ...config.styles[PropKeys.SIZE]?.classes,
    } as Record<PropColor, string>,
  },
  [PropKeys.FAMILY]: {
    generateBreakpoints: true,
    classes: {
      default: 'family-arial',
      ...config.styles[PropKeys.FAMILY]?.classes,
    } as Record<PropColor, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.COLOR]: {
    required: false,
    type: [String, Object] as PropType<PropColor>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.COLOR),
  },
  [PropKeys.TAG]: {
    required: false,
    type: String as PropType<PropTag>,
    validator: (value: PropTag): boolean => PropValues[PropKeys.TAG].includes(value),
    default: 'span',
  },
  [PropKeys.SIZE]: {
    required: false,
    type: [String, Object] as PropType<PropSize>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.SIZE),
  },
  [PropKeys.FAMILY]: {
    required: false,
    type: [String, Object] as PropType<PropFamily>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.FAMILY),
  },

  ...config.props,
};
