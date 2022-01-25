// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseFormWrapper/BaseFormWrapper.config';

// Package config
import { PropKeys, PropValues } from './BaseFormWrapper.constants';
import type { PropMethod, PropEncode } from './BaseFormWrapper.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigAttributes: Record<string, Record<string, string>> = {
  [PropKeys.ENCODE]: {
    default: 'application/x-www-form-urlencoded',
    media: 'multipart/form-data',
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.ACTION]: {
    required: true,
    type: String as PropType<string>,
  },
  [PropKeys.METHOD]: {
    required: false,
    type: String as PropType<PropMethod>,
    default: 'post',
  },
  [PropKeys.ENCODE]: {
    required: false,
    type: String as PropType<PropEncode>,
    default: 'default',
  },
  ...config.props,
};
