// Local config
import config from '@whirli-local/components/BaseSection/BaseSection.config';

import { PropValues as SpacerPropValues } from '@whirli-components/components/BaseSpacer/BaseSpacer.constants';

// Helpers
import { getLocalPropValues } from '@whirli-components/helpers/props';

export const PropKeys: Record<string, string> = {
  BACKGROUND: 'background',
  SIZE: 'size',
};

const localValues = getLocalPropValues(PropKeys, config);

export const PropValues: Record<string, string[]> = {
  [PropKeys.BACKGROUND]: ['default', ...localValues[PropKeys.BACKGROUND]],
  [PropKeys.SIZE]: SpacerPropValues.SIZE,
};
