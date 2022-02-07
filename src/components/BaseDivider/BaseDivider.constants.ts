// Local config
import config from '@whirli-local/components/BaseDivider/BaseDivider.config';
// Helpers
import { getLocalPropValues } from '@whirli-components/helpers/props';

export const PropKeys: Record<string, string> = {
  COLOR: 'color',
  SIZE: 'size',
};

const localValues = getLocalPropValues(PropKeys, config);

export const PropValues: Record<string, string[]> = {
  [PropKeys.COLOR]: ['default', ...localValues[PropKeys.COLOR]],
  [PropKeys.SIZE]: ['default', ...localValues[PropKeys.SIZE]],
};
