// Local config
import config from '@whirli-local/components/BaseFormGroup/BaseFormGroup.config';

// Helpers
import { getLocalPropValues } from '@whirli-components/helpers/props';

export const PropKeys: Record<string, string> = {
  ERROR: 'error',
  NAME: 'name',
  LABEL: 'label',
  DIRECTION: 'direction',
};

const localValues = getLocalPropValues(PropKeys, config);

export const PropValues: Record<string, string[]> = {
  DIRECTION: ['default', 'reverse', ...localValues[PropKeys.DIRECTION]],
};
