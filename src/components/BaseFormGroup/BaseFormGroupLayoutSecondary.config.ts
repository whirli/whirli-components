// @ts-ignore
import { PropType } from '@composition';
import { PropDirection } from './BaseFormGroup.types';

import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';

// Local config
import config from '@whirli-local/components/BaseFormGroup/BaseFormGroup.config';
import { PropKeys } from './BaseFormGroup.constants';

export const ConfigProps: ComponentProps = {
  [PropKeys.DIRECTION]: {
    required: false,
    type: String as PropType<PropDirection>,
    default: 'row',
  },
  ...config.props,
};
