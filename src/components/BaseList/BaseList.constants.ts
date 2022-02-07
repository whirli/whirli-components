// Local config
import config from '@whirli-local/components/BaseList/BaseList.config';

// Helpers
import { getLocalPropValues } from '@whirli-components/helpers/props';

export const PropKeys: Record<string, string> = {
  TAG: 'tag',
  LIST_STYLE: 'listStyle',
  DIRECTION: 'direction',
};

const localValues = getLocalPropValues(PropKeys, config);

export const PropValues: Record<string, string[]> = {
  [PropKeys.TAG]: ['ul', 'ol'],
  [PropKeys.LIST_STYLE]: ['none', 'disc', ...localValues[PropKeys.LIST_STYLE]],
  [PropKeys.DIRECTION]: ['default', 'row', ...localValues[PropKeys.DIRECTION]],
};
