// @ts-ignore
import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli-local/components/BaseTag/BaseTag.config';

// Package config
import { PropKeys, PropValues } from './BaseTag.constants';
import type { PropSize, PropTag, PropTheme } from './BaseTag.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.SIZE]: {
    classes: {
      default: 'size-default',
      ...config.styles[PropKeys.SIZE]?.classes,
    } as Record<PropSize, string>,
  },
  [PropKeys.THEME]: {
    classes: {
      default: 'theme-default',
      ...config.styles[PropKeys.THEME]?.classes,
    } as Record<PropTheme, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.SIZE]: {
    required: false,
    type: String as PropType<PropSize>,
    default: 'default',
    ...PropHelpers.stylePropValidation(ConfigStyles, PropKeys.SIZE),
  },
  [PropKeys.TAG]: {
    required: false,
    type: String as PropType<PropTag>,
    validator: (value: PropTag): boolean => PropValues[PropKeys.TAG].includes(value),
    default: 'span',
  },
  [PropKeys.THEME]: {
    required: false,
    type: String as PropType<PropTheme>,
    default: 'default',
    ...PropHelpers.stylePropValidation(ConfigStyles, PropKeys.COLOR),
  },
  ...config.props,
};
