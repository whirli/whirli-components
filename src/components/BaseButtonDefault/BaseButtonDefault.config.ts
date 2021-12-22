import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';
import { ConfigProps as BaseButtonConfigProps } from '@whirli-components/components/BaseButton/BaseButton.config';

// Local config
import config from '@whirli-local/components/BaseButtonDefault/BaseButtonDefault.config';

// Package config
import { PropKeys as BaseButtonPropKeys } from '@whirli-components/components/BaseButton/BaseButton.constants';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [BaseButtonPropKeys.TYPE]: BaseButtonConfigProps[BaseButtonPropKeys.TYPE],
  [BaseButtonPropKeys.STATE]: BaseButtonConfigProps[BaseButtonPropKeys.STATE],
  ...config.props,
};
