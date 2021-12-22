// @ts-ignore
import { PropType } from 'vue';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/SkeletonComponent/SkeletonComponent.config';

// Package config
import { PropKeys, PropValues } from './SkeletonComponent.constants';
// import type { PropColor } from './SkeletonComponent.types';

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
