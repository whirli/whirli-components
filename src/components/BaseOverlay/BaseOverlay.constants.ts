// Local config
import config from '@whirli-local/components/BaseOverlay/BaseOverlay.config';

// Helpers
import { getLocalPropValues } from '@whirli-components/helpers/props';

export const PropKeys: Record<string, string> = {
  COLOR: 'color',
  STATE: 'state',
};

const localValues = getLocalPropValues(PropKeys, config);

export const PropValues: Record<string, string[]> = {
  [PropKeys.COLOR]: ['default', ...localValues[PropKeys.COLOR]],
  [PropKeys.STATE]: ['open', 'closed'],
};
