// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';
import { createClassesFromPropValues } from '@whirli-components/helpers/classes';

// Local config
import config from '@whirli-local/components/BaseOverlay/BaseOverlay.config';

// Package config
import { PropKeys, PropValues } from './BaseOverlay.constants';
import { PropColor, PropState } from './BaseOverlay.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.COLOR]: {
    generateBreakpoints: true,
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.COLOR),
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
