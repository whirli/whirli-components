// @ts-ignore
import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli-local/components/BasePagination/BasePagination.config';

// Package config
import { PropKeys, PropValues } from './BasePagination.constants';
// import type { PropColor } from './BasePagination.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.BUSY]: {
    required: false,
    type: [Boolean, null] as PropType<boolean | null>,
    default: null,
  },
  [PropKeys.LAST_PAGE]: {
    required: true,
    type: Number as PropType<number>,
  },
  [PropKeys.DELTA]: {
    required: false,
    type: Number as PropType<number>,
    default: 3,
  },
  [PropKeys.PLACEHOLDER]: {
    required: false,
    type: String as PropType<string>,
    default: '...',
  },
  ...config.props,
};
