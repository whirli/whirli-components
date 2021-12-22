import { PropValues as SpacerPropValues } from '@whirli-components/components/BaseSpacer/BaseSpacer.constants';

export const PropKeys: Record<string, string> = {
  BACKGROUND: 'background',
  SIZE: 'size',
};

export const PropValues: Record<string, string[]> = {
  [PropKeys.BACKGROUND]: ['default'],
  [PropKeys.SIZE]: SpacerPropValues.SIZE,
};
