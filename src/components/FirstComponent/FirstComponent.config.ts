import config from '@whirli/FirstComponent/FirstComponent.config';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  background: {
    classes: {
      background1: 'package-background-1',
      background2: 'package-background-2',
      ...config.styles.background?.classes,
    },
  },
  color: {
    generateBreakpoints: true,
    classes: {
      color1: 'package-color-1',
      color2: 'package-color-2',
      ...config.styles.color?.classes,
    },
  },
};

export const ConfigProps: ComponentProps = {
  background: {
    required: true,
    ...PropHelpers.stylePropValidation(ConfigStyles, 'background'),
  },
  color: {
    required: true,
    ...PropHelpers.breakpointStylePropValidation(ConfigStyles, 'color'),
  },
  ...config.props,
};
