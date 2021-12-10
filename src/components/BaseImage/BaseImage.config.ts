// @ts-ignore
import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli-local/components/BaseImage/BaseImage.config';

// Package config
import { PropKeys } from './BaseImage.constants';
import type { PropImage } from './BaseImage.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.IMAGE]: {
    required: true,
    type: Object as PropType<PropImage>,
  },
  ...config.props,
};
