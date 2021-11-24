import { PropKeys, PropValues } from './BaseSpacer.constants';

const propSize = PropValues[PropKeys.SIZE];

export type PropSize = typeof propSize[number];
