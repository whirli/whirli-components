import { PropKeys, PropValues } from './BaseSpacer.constants';

const propSize: string[] = PropValues[PropKeys.SIZE];

export type PropSize = typeof propSize[number];
