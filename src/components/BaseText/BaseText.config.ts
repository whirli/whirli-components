import config from '@whirli/BaseText/BaseText.config';
import * as PropHelpers from '../../helpers/props';
import { ComponentStyles, ComponentProps } from '../../@types/components';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
  /*
  Example:
  background: {
    classes: {
      background1: 'package-background-1',
      background2: 'package-background-2',
      ...config.styles.background?.classes,
    },
  },
  */
};

export const ConfigProps: ComponentProps = {
  /*
  Example:
  background: {
    required: true,
    ...PropHelpers.stylePropValidation(ConfigStyles, 'background'),
  },
  */
  ...config.props,
};
