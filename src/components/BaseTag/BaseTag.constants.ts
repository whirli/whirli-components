// Local config
import config from '@whirli-local/components/BaseTag/BaseTag.config';

// Helpers
import { getLocalPropValues } from '@whirli-components/helpers/props';

export const PropKeys: Record<string, string> = {
  SIZE: 'size',
  TAG: 'tag',
  THEME: 'theme',
};

const localValues = getLocalPropValues(PropKeys, config);

export const PropValues: Record<string, string[]> = {
  [PropKeys.SIZE]: ['default'],
  [PropKeys.TAG]: ['div', 'span', 'button'],
  [PropKeys.THEME]: ['default', ...localValues[PropKeys.THEME]],
};
