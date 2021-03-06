// @ts-ignore
import { PropType } from '@composition';
import * as PropHelpers from '@whirli-components/helpers/props';
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';
import { createClassesFromPropValues } from '@whirli-components/helpers/classes';

// Local config
import config from '@whirli-local/components/BaseModal/BaseModal.config';

// Package config
import { PropKeys, PropValues } from './BaseModal.constants';
import { PropColor, PropSize } from './BaseModal.types';

//Dependency config
import { PropKeys as OverlayPropKeys } from '@whirli-components/components/BaseOverlay/BaseOverlay.constants';
import { ConfigProps as OverlayConfigProps } from '@whirli-components/components/BaseOverlay/BaseOverlay.config';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  [PropKeys.COLOR]: {
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.COLOR),
      ...config.styles[PropKeys.COLOR]?.classes,
    } as Record<PropColor, string>,
  },
  [PropKeys.SIZE]: {
    classes: {
      ...createClassesFromPropValues(PropValues, PropKeys.SIZE),
      ...config.styles[PropKeys.SIZE]?.classes,
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
