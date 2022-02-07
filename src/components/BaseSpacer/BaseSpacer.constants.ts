// Local config
import config from '@whirli-local/components/BaseSpacer/BaseSpacer.config';

// Helpers
import { getLocalPropValues } from '@whirli-components/helpers/props';

export const PropKeys: Record<string, string> = {
  SIZE: 'size',
};

const localValues = getLocalPropValues(PropKeys, config);

export const PropValues: Record<string, string[]> = {
  [PropKeys.SIZE]: [
    '0',
    'none',
    '4xs',
    '3xs',
    '2xs',
    'xs',
    'sm',
    'base',
    'default', // Alias for base
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
    ...localValues[PropKeys.SIZE],
  ],
};
