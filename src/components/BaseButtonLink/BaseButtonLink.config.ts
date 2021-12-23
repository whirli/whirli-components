// @ts-ignore
import { PropType } from '@composition';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseButtonLink/BaseButtonLink.config';

// Package config
import { PropKeys } from './BaseButtonLink.constants';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.URL]: {
    required: true,
    type: String as PropType<string>,
  },
  ...config.props,
};
