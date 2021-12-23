// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseText/BaseText.config';

// Package config
import { PropKeys, PropValues } from './BaseText.constants';
import type {
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
      '2xl': 'size-2xl',
      '3xl': 'size-3xl',
      '4xl': 'size-4xl',
      '5xl': 'size-5xl',
      ...config.styles[PropKeys.SIZE]?.classes,
    } as Record<PropSize, string>,
  },
  [PropKeys.FONT]: {
    generateBreakpoints: true,
    classes: {
      default: 'font-sans',
      bold: 'font-bold',
      mono: 'font-mono',
      ...config.styles[PropKeys.FONT]?.classes,
    } as Record<PropFont, string>,
  },
  [PropKeys.TRANSFORM]: {
    classes: {
      default: 'transform-default',
      uppercase: 'transform-uppercase',
      ...config.styles[PropKeys.TRANSFORM]?.classes,
    } as Record<PropTransform, string>,
  },
  [PropKeys.LETTER_SPACING]: {
    generateBreakpoints: true,
    classes: {
      default: 'letter-spacing-default',
      md: 'letter-spacing-md',
      lg: 'letter-spacing-lg',
      xl: 'letter-spacing-xl',
      ...config.styles[PropKeys.LETTER_SPACING]?.classes,
    } as Record<PropLetterSpacing, string>,
  },
  [PropKeys.LINE_HEIGHT]: {
    generateBreakpoints: true,
    classes: {
      '3xs': 'line-height-3xs',
      '2xs': 'line-height-2xs',
      xs: 'line-height-xs',
      sm: 'line-height-sm',
      default: 'line-height-default',
      md: 'line-height-md',
      lg: 'line-height-lg',
      xl: 'line-height-xl',
      '2xl': 'line-height-2xl',
      '3xl': 'line-height-3xl',
      '4xl': 'line-height-4xl',
      '5xl': 'line-height-5xl',
      ...config.styles[PropKeys.LINE_HEIGHT]?.classes,
    } as Record<PropLineHeight, string>,
  },
  [PropKeys.ALIGN]: {
    generateBreakpoints: true,
    classes: {
      default: 'align-default',
      center: 'align-center',
      right: 'align-right',
      ...config.styles[PropKeys.ALIGN]?.classes,
    } as Record<PropAlign, string>,
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
