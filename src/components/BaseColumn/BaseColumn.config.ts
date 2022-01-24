// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseColumn/BaseColumn.config';

// Package config
import { PropKeys } from './BaseColumn.constants';
import type { PropSpans, PropAlign, PropJustify, PropDirection } from './BaseColumn.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.SPANS]: {
    generateBreakpoints: true,
    classes: {
      '1': 'span-1',
      '2': 'span-2',
      '3': 'span-3',
      '4': 'span-4',
      '5': 'span-5',
      '6': 'span-6',
      '7': 'span-7',
      '8': 'span-8',
      '9': 'span-9',
      '10': 'span-10',
      '11': 'span-11',
      '12': 'span-12',
      ...config.styles[PropKeys.SPANS]?.classes,
    } as Record<PropSpans, string>,
  },
  [PropKeys.ALIGN]: {
    generateBreakpoints: true,
    classes: {
      default: 'align-default',
      center: 'align-center',
      end: 'align-end',
      between: 'align-between',
      ...config.styles[PropKeys.ALIGN]?.classes,
    } as Record<PropAlign, string>,
  },
  [PropKeys.JUSTIFY]: {
    generateBreakpoints: true,
    classes: {
      default: 'justify-default',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      ...config.styles[PropKeys.JUSTIFY]?.classes,
    } as Record<PropJustify, string>,
  },
  [PropKeys.DIRECTION]: {
    generateBreakpoints: true,
    classes: {
      default: 'direction-default',
      row: 'direction-row',
      'row-reverse': 'direction-row-reverse',
      ...config.styles[PropKeys.DIRECTION]?.classes,
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
  ...config.props,
};
