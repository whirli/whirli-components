import { ComponentStyles, ComponentProps } from '../../@types/components';
import { ConfigProps as BaseButtonConfigProps } from '../BaseButton/BaseButton.config';

// Local config
import config from '@whirli-local/BaseButtonDefault/BaseButtonDefault.config';

// Package config
import { PropKeys as BaseButtonPropKeys } from '../BaseButton/BaseButton.constants';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [BaseButtonPropKeys.TYPE]: BaseButtonConfigProps[BaseButtonPropKeys.TYPE],
  [BaseButtonPropKeys.STATE]: BaseButtonConfigProps[BaseButtonPropKeys.STATE],
  ...config.props,
};
