// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';
import { createClassesFromPropValues } from '@whirli-components/helpers/classes';

// Local config
import config from '@whirli-local/components/BaseIcon/BaseIcon.config';

// Package config
import { PropKeys, PropValues } from './BaseIcon.constants';
import { PropIcon, PropBackdrop, PropSize, PropTheme, PropRotate } from './BaseIcon.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.BACKDROP]: {
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.BACKDROP),
      ...config.styles[PropKeys.BACKDROP]?.classes,
    } as Record<PropBackdrop, string>,
  },
  [PropKeys.THEME]: {
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.THEME),
      ...config.styles[PropKeys.THEME]?.classes,
    } as Record<PropTheme, string>,
  },
  [PropKeys.SIZE]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.SIZE),
      ...config.styles[PropKeys.SIZE]?.classes,
    } as Record<PropSize, string>,
  },
  [PropKeys.ROTATE]: {
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.ROTATE),
      ...config.styles[PropKeys.ROTATE]?.classes,
    } as Record<PropRotate, string>,
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
    ...PropHelpers.stylePropValidation(ConfigStyles, PropKeys.THEME),
    default: 'default',
  },
  [PropKeys.ROTATE]: {
    required: false,
    type: String as PropType<PropRotate>,
    ...PropHelpers.stylePropValidation(ConfigStyles, PropKeys.ROTATE),
    default: 'default',
  },
  ...config.props,
};
