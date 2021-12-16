// @ts-ignore
import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli-local/components/BaseFormInput/BaseFormInput.config';

// Package config
import { PropKeys, PropValues } from './BaseFormInput.constants';
// import type { PropColor } from './BaseFormInput.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  /*[PropKeys.COLOR]: {
    generateBreakpoints: true,
    classes: {
      default: 'color-black',
      ...config.styles[PropKeys.COLOR]?.classes,
    } as Record<PropColor, string>,
  },*/
};

export const ConfigProps: ComponentProps = {
  /*[PropKeys.COLOR]: {
    required: false,
    type: [String, Object] as PropType<PropColor>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.COLOR),
  },*/
  ...config.props,
};
