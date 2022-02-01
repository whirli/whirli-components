// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';
import { createClassesFromPropValues } from '@whirli-components/helpers/classes';

// Local config
import config from '@whirli-local/components/BaseSpacer/BaseSpacer.config';

// Package config
import { PropKeys, PropValues } from './BaseSpacer.constants';
import type { PropSize } from './BaseSpacer.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.SIZE]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.SIZE),
      ...config.styles[PropKeys.SIZE]?.classes,
    } as Record<PropSize, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.SIZE]: {
    required: false,
    type: [String, Object] as PropType<PropSize | Record<string, PropSize>>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.SIZE),
  },
  ...config.props,
};
