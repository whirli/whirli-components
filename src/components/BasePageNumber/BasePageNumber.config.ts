// @ts-ignore
import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

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
  ...config.props,
};
