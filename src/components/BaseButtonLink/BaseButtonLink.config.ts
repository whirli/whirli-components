import { PropType } from 'vue';
import { ComponentStyles, ComponentProps } from '../../@types/components';

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
