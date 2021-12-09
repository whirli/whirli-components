import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli-local/components/BaseContainer/BaseContainer.config';

// Package config
import { PropKeys, PropValues } from './BaseContainer.constants';
// import type { PropColor } from './BaseContainer.types';

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
