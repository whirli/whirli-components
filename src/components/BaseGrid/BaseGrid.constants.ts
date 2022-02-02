// Local config
import config from '@whirli-local/components/BaseGrid/BaseGrid.config';

// Helpers
import { getLocalPropValues } from '@whirli-components/helpers/props';

export const PropKeys: Record<string, string> = {
  GAP: 'gap',
};

const localValues = getLocalPropValues(PropKeys, config);

export const PropValues: Record<string, string[]> = {
  [PropKeys.GAP]: ['default', '0', ...localValues[PropKeys.GAP]],
};
