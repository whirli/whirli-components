import { PropKeys, PropValues } from './BaseRow.constants';

const propDirection: string[] = PropValues[PropKeys.DIRECTION];

export type PropDirection = typeof propDirection[number];
