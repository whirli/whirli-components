// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseFormSelectOption/BaseFormSelectOption.config';

// Package config
import { PropKeys } from './BaseFormSelectOption.constants';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.SELECTED]: {
    required: true,
    type: [String, Number] as PropType<string | number>,
  },
  [PropKeys.VALUE]: {
    required: true,
    type: [String, Number] as PropType<string | number>,
  },
  ...config.props,
};
