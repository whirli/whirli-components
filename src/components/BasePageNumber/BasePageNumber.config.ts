// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BasePageNumber/BasePageNumber.config';

// Package config
import { PropKeys } from './BasePageNumber.constants';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.PAGE_NUMBER]: {
    required: true,
    type: Number as PropType<number>,
  },
  [PropKeys.IS_DISABLED]: {
    required: false,
    type: Boolean as PropType<boolean>,
    default: false,
  },
  ...config.props,
};
