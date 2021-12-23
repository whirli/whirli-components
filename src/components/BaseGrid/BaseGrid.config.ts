// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseGrid/BaseGrid.config';

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
