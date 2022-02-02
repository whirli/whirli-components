// @ts-ignore
import { PropType } from '@composition';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';
import { createClassesFromPropValues } from '@whirli-components/helpers/classes';

// Local config
import config from '@whirli-local/components/BaseBox/BaseBox.config';

// Package config
import { PropKeys, PropValues } from './BaseBox.constants';
import { PropTag, PropPadding } from './BaseBox.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.PADDING]: {
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.PADDING),
      ...config.styles[PropKeys.PADDING]?.classes,
    } as Record<PropPadding, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.TAG]: {
    required: false,
    type: String as PropType<PropTag>,
    default: 'div',
  },
  [PropKeys.PADDING]: {
    required: false,
    type: [String, Array] as PropType<PropPadding | PropPadding[]>,
    default: 'base',
  },
  ...config.props,
};
