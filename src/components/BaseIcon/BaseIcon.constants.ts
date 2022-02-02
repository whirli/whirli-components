// Local config
import config from '@whirli-local/components/BaseIcon/BaseIcon.config';

// Helpers
import { getLocalPropValues } from '@whirli-components/helpers/props';

export const PropKeys: Record<string, string> = {
  ICON: 'icon',
  SIZE: 'size',
  BACKDROP: 'backdrop',
  THEME: 'theme',
  ROTATE: 'rotate',
};

const localValues = getLocalPropValues(PropKeys, config);

export const PropValues: Record<string, string[]> = {
  [PropKeys.BACKDROP]: ['default', 'circle', 'square', ...localValues[PropKeys.BACKDROP]],
  [PropKeys.ICON]: ['default'],
  [PropKeys.SIZE]: ['3xs', '2xs', 'xs', 'sm', 'default', 'md', 'lg', 'xl', ...localValues[PropKeys.SIZE]],
  [PropKeys.THEME]: ['default', ...localValues[PropKeys.THEME]],
  [PropKeys.ROTATE]: [
    'default',
    '45',
    '90',
    '135',
    '180',
    '225',
    '270',
    '315',
    ...localValues[PropKeys.ROTATE],
  ],
};
