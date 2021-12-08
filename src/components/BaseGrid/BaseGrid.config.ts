import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli/BaseGrid/BaseGrid.config';

// Package config
import { PropKeys, PropValues } from './BaseGrid.constants';
import type { PropGap } from './BaseGrid.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.GAP]: {
    classes: {
      default: 'gap-default',
      '0': 'gap-0',
      ...config.styles[PropKeys.GAP]?.classes,
    } as Record<PropGap, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.GAP]: {
    required: false,
    type: String as PropType<PropGap>,
    default: 'default',
    ...PropHelpers.stylePropValidation(ConfigStyles, PropKeys.GAP),
  },
  ...config.props,
};
