// Local config
import config from '@whirli-local/components/BaseRow/BaseRow.config';

// Helpers
import { getLocalPropValues } from '@whirli-components/helpers/props';

export const PropKeys: Record<string, string> = {
  DIRECTION: 'direction',
};

const localValues = getLocalPropValues(PropKeys, config);

export const PropValues: Record<string, string[]> = {
  [PropKeys.DIRECTION]: ['row', 'row-reverse', ...localValues[PropKeys.DIRECTION]],
};
