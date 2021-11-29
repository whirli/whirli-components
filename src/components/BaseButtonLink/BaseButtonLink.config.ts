import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli/BaseButtonLink/BaseButtonLink.config';

// Package config
import { PropKeys, PropValues } from './BaseButtonLink.constants';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  url: {
    required: true,
    type: String as PropType<string>,
  },
  ...config.props,
};
