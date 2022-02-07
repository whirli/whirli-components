// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';
import { createClassesFromPropValues } from '@whirli-components/helpers/classes';

// Local config
import config from '@whirli-local/components/BaseText/BaseText.config';

// Package config
import { PropKeys, PropValues } from './BaseText.constants';
import {
  PropColor,
  PropSize,
  PropTag,
  PropFont,
  PropTransform,
  PropLetterSpacing,
  PropLineHeight,
  PropAlign,
} from './BaseText.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.COLOR]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.COLOR),
      ...config.styles[PropKeys.COLOR]?.classes,
    } as Record<PropColor, string>,
  },
  [PropKeys.SIZE]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.SIZE),
      ...config.styles[PropKeys.SIZE]?.classes,
    } as Record<PropSize, string>,
  },
  [PropKeys.FONT]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.FONT),
      ...config.styles[PropKeys.FONT]?.classes,
    } as Record<PropFont, string>,
  },
  [PropKeys.TRANSFORM]: {
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.TRANSFORM),
      ...config.styles[PropKeys.TRANSFORM]?.classes,
    } as Record<PropTransform, string>,
  },
  [PropKeys.LETTER_SPACING]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.LETTER_SPACING),
      ...config.styles[PropKeys.LETTER_SPACING]?.classes,
    } as Record<PropLetterSpacing, string>,
  },
  [PropKeys.LINE_HEIGHT]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.LINE_HEIGHT),
      ...config.styles[PropKeys.LINE_HEIGHT]?.classes,
    } as Record<PropLineHeight, string>,
  },
  [PropKeys.ALIGN]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.ALIGN),
      ...config.styles[PropKeys.ALIGN]?.classes,
    } as Record<PropAlign, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.COLOR]: {
    required: false,
    type: [String, Object] as PropType<PropColor>,
    default: 'inherit',
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
  [PropKeys.FONT]: {
    required: false,
    type: [String, Object] as PropType<PropFont>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.FONT),
  },
  [PropKeys.TRANSFORM]: {
    required: false,
    type: String as PropType<PropTransform>,
    default: 'default',
    ...PropHelpers.stylePropValidation(ConfigStyles, PropKeys.TRANSFORM),
  },
  [PropKeys.LETTER_SPACING]: {
    required: false,
    type: [String, Object] as PropType<PropLetterSpacing>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.LETTER_SPACING),
  },
  [PropKeys.LINE_HEIGHT]: {
    required: false,
    type: [String, Object] as PropType<PropLineHeight>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.LINE_HEIGHT),
  },
  [PropKeys.ALIGN]: {
    required: false,
    type: [String, Object] as PropType<PropAlign>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.ALIGN),
  },
  ...config.props,
};
