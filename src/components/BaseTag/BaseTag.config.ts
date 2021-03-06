// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';
import { createClassesFromPropValues } from '@whirli-components/helpers/classes';

// Local config
import config from '@whirli-local/components/BaseTag/BaseTag.config';

// Package config
import { PropKeys, PropValues } from './BaseTag.constants';
import { PropSize, PropTag, PropTheme } from './BaseTag.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.SIZE]: {
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.SIZE),
      ...config.styles[PropKeys.SIZE]?.classes,
    } as Record<PropSize, string>,
  },
  [PropKeys.THEME]: {
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.THEME),
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
    default: 'div',
  },
  [PropKeys.THEME]: {
    required: false,
    type: String as PropType<PropTheme>,
    default: 'default',
    ...PropHelpers.stylePropValidation(ConfigStyles, PropKeys.THEME),
  },
  ...config.props,
};
