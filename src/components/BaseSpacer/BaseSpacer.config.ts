import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli/BaseSpacer/BaseSpacer.config';

// Package config
import { PropKeys, PropValues } from './BaseSpacer.constants';
import type { PropSize } from './BaseSpacer.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.SIZE]: {
    generateBreakpoints: true,
    classes: {
      default: 'size-default',
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
