// @ts-ignore
import { PropType } from 'vue';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseSpacer/BaseSpacer.config';

// Package config
import { PropKeys } from './BaseSpacer.constants';
import type { PropSize } from './BaseSpacer.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.SIZE]: {
    generateBreakpoints: true,
    classes: {
      '0': 'size-0',
      '4xs': 'size-4xs',
      '3xs': 'size-3xs',
      '2xs': 'size-2xs',
      xs: 'size-xs',
      sm: 'size-sm',
      default: 'size-default',
      md: 'size-md',
      lg: 'size-lg',
      xl: 'size-xl',
      '2xl': 'size-2xl',
      '3xl': 'size-3xl',
      '4xl': 'size-4xl',
      '5xl': 'size-5xl',
      ...config.styles[PropKeys.SIZE]?.classes,
    } as Record<PropSize, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.SIZE]: {
    required: false,
    type: [String, Object] as PropType<PropSize>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.SIZE),
  },
  ...config.props,
};
