// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseAccordion/BaseAccordion.config';

// Package config
import { PropKeys } from './BaseAccordion.constants';
import { PropState } from './BaseAccordion.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.NAME]: {
    required: false,
    type: String as PropType<string>,
    default: 'accordion',
  },
  [PropKeys.DISABLE_TOGGLE]: {
    required: false,
    type: Boolean as PropType<boolean>,
    default: false,
  },
  [PropKeys.STATE]: {
    required: false,
    type: [String, Object] as PropType<PropState>,
    default: 'closed',
  },
  ...config.props,
};
