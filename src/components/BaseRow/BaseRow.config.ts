// @ts-ignore
import { PropType } from '@composition';
// @ts-ignore
import { ComponentStyles, ComponentProps } from '@whirli-components/@types/components';
import { createClassesFromPropValues } from '@whirli-components/helpers/classes';

// Local config
import config from '@whirli-local/components/BaseRow/BaseRow.config';

// Props
import { PropKeys } from './BaseRow.constants';

// Types
import { PropDirection } from './BaseRow.types';

export const ConfigStyles: ComponentStyles = {
  ...config.styles,
};

export const ConfigProps: ComponentProps = {
  [PropKeys.DIRECTION]: {
    required: false,
    type: String as PropType<PropDirection>,
    default: 'row',
  },
  ...config.props,
};
