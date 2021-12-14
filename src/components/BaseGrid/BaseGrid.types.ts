import { PropKeys, PropValues } from './BaseGrid.constants';

const propGap: string[] = PropValues[PropKeys.GAP];

export type PropGap = typeof propGap[number];
