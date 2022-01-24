import { PropKeys, PropValues } from './BaseFormGroup.constants';

const propDirection: string[] = PropValues[PropKeys.DIRECTION];

export type PropDirection = typeof propDirection[number];
