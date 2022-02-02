// Local config
import config from '@whirli-local/components/BaseButton/BaseButton.config';

// Helpers
import { getLocalPropValues } from '@whirli-components/helpers/props';

export const LoadingStates: Record<string, string> = {
  DEFAULT: 'default',
  LOADING: 'loading',
  PROCESSING: 'processing',
  COMPLETE: 'complete',
};

export const PropKeys: Record<string, string> = {
  TYPE: 'type',
  URL: 'url',
  COLOR: 'color',
  SIZE: 'size',
  STATE: 'state',
};

const localValues = getLocalPropValues(PropKeys, config);

export const PropValues: Record<string, string[]> = {
  [PropKeys.TYPE]: ['button', 'submit'],
  [PropKeys.COLOR]: ['default', ...localValues[PropKeys.COLOR]],
  [PropKeys.SIZE]: ['default', ...localValues[PropKeys.SIZE]],
  [PropKeys.STATE]: [
    LoadingStates.DEFAULT,
    LoadingStates.LOADING,
    LoadingStates.PROCESSING,
    LoadingStates.COMPLETE,
  ],
};
