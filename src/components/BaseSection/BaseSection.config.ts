// @ts-ignore
import { PropType } from 'vue';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseSection/BaseSection.config';

// Package config
import { PropKeys } from './BaseSection.constants';
import type { PropBackground } from './BaseSection.types';

// Types
import { PropSize } from './BaseSection.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.BACKGROUND]: {
    generateBreakpoints: true,
    classes: {
      default: 'background-default',
      ...config.styles[PropKeys.BACKGROUND]?.classes,
    } as Record<PropBackground, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.BACKGROUND]: {
    required: false,
    type: [String, Object] as PropType<PropBackground>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.BACKGROUND),
  },
  [PropKeys.SIZE]: {
    required: false,
    type: [String, Object, Array] as PropType<PropSize>,
    default: 'default',
  },
  ...config.props,
};
