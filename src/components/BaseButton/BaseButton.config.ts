// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';
import { createClassesFromPropValues } from '@whirli-components/helpers/classes';

// Local config
import config from '@whirli-local/components/BaseButton/BaseButton.config';

// Package config
import { PropKeys, PropValues } from './BaseButton.constants';
import { PropButtonType, PropColor, PropSize, PropState } from './BaseButton.types';

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
};

export const ConfigProps: ComponentProps = {
  [PropKeys.TYPE]: {
    required: false,
    type: [String, Object] as PropType<PropButtonType>,
    default: 'button',
    validator: (value: string) => PropValues[PropKeys.TYPE].includes(value),
  },
  [PropKeys.URL]: {
    required: false,
    type: String as PropType<string>,
  },
  [PropKeys.COLOR]: {
    required: false,
    type: [String, Object] as PropType<PropColor>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.COLOR),
  },
  [PropKeys.SIZE]: {
    required: false,
    type: [String, Object] as PropType<PropSize>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.SIZE),
  },
  [PropKeys.STATE]: {
    required: false,
    type: [String, Object] as PropType<PropState>,
    default: 'default',
    validator: (value: string) => PropValues[PropKeys.STATE].includes(value),
  },
  ...config.props,
};
