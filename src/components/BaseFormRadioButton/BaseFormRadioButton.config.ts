// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseFormRadioButton/BaseFormRadioButton.config';

// Package config
import { PropKeys, PropValues } from './BaseFormRadioButton.constants';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.MODAL_VALUE]: {
    required: true,
    type: [String, Number] as PropType<string | number>,
  },
  [PropKeys.VALUE]: {
    required: true,
    type: [String, Number] as PropType<string | number>,
  },
  [PropKeys.GROUP]: {
    required: true,
    type: String as PropType<string>,
  },
  ...config.props,
};
