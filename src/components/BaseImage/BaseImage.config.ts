// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

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
