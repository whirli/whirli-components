// @ts-ignore
import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli-local/components/BaseFormInput/BaseFormInput.config';

// Package config
import { PropKeys, PropValues } from './BaseFormInput.constants';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  ...config.props,
};
