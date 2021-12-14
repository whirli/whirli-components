// @ts-ignore
import { PropType } from 'vue';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

// Local config
import config from '@whirli-local/components/BaseModal/BaseModal.config';

// Package config
import { PropKeys, PropValues } from './BaseModal.constants';
import type { PropColor, PropSize } from './BaseModal.types';

//Dependency config
import { PropKeys as OverlayPropKeys } from '../BaseOverlay/BaseOverlay.constants';
import { ConfigProps as OverlayConfigProps } from '../BaseOverlay/BaseOverlay.config';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.COLOR]: {
    classes: {
      default: 'color-default',
      ...config.styles[PropKeys.COLOR]?.classes,
    } as Record<PropColor, string>,
  },
  [PropKeys.SIZE]: {
    classes: {
      default: 'size-default',
      small: 'size-small',
      ...config.styles[PropKeys.COLOR]?.classes,
    } as Record<PropColor, string>,
  },
};

export const ConfigProps: ComponentProps = {
  [PropKeys.COLOR]: {
    required: false,
    type: String as PropType<PropColor>,
    default: 'default',
    ...PropHelpers.stylePropValidation(ConfigStyles, PropKeys.COLOR),
  },
  [PropKeys.SIZE]: {
    required: false,
    type: String as PropType<PropSize>,
    default: 'default',
    ...PropHelpers.stylePropValidation(ConfigStyles, PropKeys.SIZE),
  },
  [OverlayPropKeys.STATE]: OverlayConfigProps.state,
  ...config.props,
};
