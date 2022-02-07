// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseColumn/BaseColumn.config';

// Package config
import { PropKeys, PropValues } from './BaseColumn.constants';
import { PropSpans, PropAlign, PropJustify, PropDirection, PropStart } from './BaseColumn.types';
import { createClassesFromPropValues } from '@whirli-components/helpers/classes';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.SPANS]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.SPANS),
      ...config.styles[PropKeys.SPANS]?.classes,
    } as Record<PropSpans, string>,
  },
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
  [PropKeys.START]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.START),
      ...config.styles[PropKeys.START]?.classes,
    } as Record<PropDirection, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.SPANS]: {
    required: false,
    type: [String, Object] as PropType<PropSpans | Record<string, PropSpans>>,
    default: '12',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.SPANS),
  },
  [PropKeys.ALIGN]: {
    required: false,
    type: [String, Object] as PropType<PropAlign | Record<string, PropAlign>>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.ALIGN),
  },
  [PropKeys.JUSTIFY]: {
    required: false,
    type: [String, Object] as PropType<PropJustify | Record<string, PropJustify>>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.JUSTIFY),
  },
  [PropKeys.DIRECTION]: {
    required: false,
    type: [String, Object] as PropType<PropDirection | Record<string, PropDirection>>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.DIRECTION),
  },
  [PropKeys.START]: {
    required: false,
    type: [String, Object] as PropType<PropStart | Record<string, PropStart>>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.START),
  },
  ...config.props,
};
