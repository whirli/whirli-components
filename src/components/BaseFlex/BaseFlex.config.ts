// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { createClassesFromPropValues } from '@whirli-components/helpers/classes';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseFlex/BaseFlex.config';

// Package config
import { PropKeys, PropValues } from './BaseFlex.constants';
import {
  PropAlign,
  PropJustify,
  PropDirection,
  PropWrap,
  PropSpacing,
  PropTag,
  PropSpans,
} from './BaseFlex.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.ALIGN]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.ALIGN),
      ...config.styles[PropKeys.ALIGN]?.classes,
    } as Record<PropAlign, string>,
  },
  [PropKeys.JUSTIFY]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.JUSTIFY),
      ...config.styles[PropKeys.JUSTIFY]?.classes,
    } as Record<PropJustify, string>,
  },
  [PropKeys.DIRECTION]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.DIRECTION),
      ...config.styles[PropKeys.DIRECTION]?.classes,
    } as Record<PropDirection, string>,
  },
  [PropKeys.WRAP]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.WRAP),
      ...config.styles[PropKeys.WRAP]?.classes,
    } as Record<PropWrap, string>,
  },
  [PropKeys.SPACING]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.SPACING),
      ...config.styles[PropKeys.SPACING]?.classes,
    } as Record<PropSpacing, string>,
  },
  [PropKeys.SPANS]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.SPANS),
      ...config.styles[PropKeys.SPANS]?.classes,
    } as Record<PropSpacing, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.ALIGN]: {
    required: false,
    type: [String, Object] as PropType<PropAlign>,
    default: 'middle',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.ALIGN),
  },
  [PropKeys.JUSTIFY]: {
    required: false,
    type: [String, Object] as PropType<PropJustify>,
    default: 'center',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.JUSTIFY),
  },
  [PropKeys.DIRECTION]: {
    required: false,
    type: [String, Object] as PropType<PropDirection>,
    default: 'row',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.DIRECTION),
  },
  [PropKeys.WRAP]: {
    required: false,
    type: [String, Object] as PropType<PropWrap>,
    default: 'unset',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.WRAP),
  },
  [PropKeys.SPACING]: {
    required: false,
    type: String as PropType<PropSpacing>,
    default: 'lg',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.SPACING),
  },
  [PropKeys.TAG]: {
    required: false,
    type: String as PropType<PropTag>,
    default: 'div',
  },
  [PropKeys.SPANS]: {
    required: false,
    type: [String, Object] as PropType<PropSpans | Record<string, PropSpans>>,
    default: 'auto',
  },
  ...config.props,
};
