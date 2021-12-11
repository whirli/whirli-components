// @ts-ignore
import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli-local/components/BaseOverlay/BaseOverlay.config';

// Package config
import { PropKeys, PropValues } from './BaseOverlay.constants';
import type { PropColor, PropState } from './BaseOverlay.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.COLOR]: {
    generateBreakpoints: true,
    classes: {
      default: 'color-default',
      ...config.styles[PropKeys.COLOR]?.classes,
    } as Record<PropColor, string>,
  },
  [PropKeys.STATE]: {
    classes: {
      closed: 'state-closed',
      open: 'state-open',
      ...config.styles[PropKeys.STATE]?.classes,
    } as Record<PropState, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.COLOR]: {
    required: false,
    type: String as PropType<PropColor>,
    default: 'default',
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, PropKeys.COLOR),
  },
  [PropKeys.STATE]: {
    required: false,
    type: String as PropType<PropState>,
    default: 'closed',
    ...PropHelpers.stylePropValidation(ConfigStyles, PropKeys.STATE),
  },
  ...config.props,
};
