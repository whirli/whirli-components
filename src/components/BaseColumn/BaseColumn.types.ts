import { PropKeys, PropValues } from './BaseColumn.constants';

const propSpans = PropValues[PropKeys.SPANS];
const propAlign = PropValues[PropKeys.ALIGN];
const propJustify = PropValues[PropKeys.JUSTIFY];
const propDirection = PropValues[PropKeys.DIRECTION];
const propStart = PropValues[PropKeys.START];

export type PropSpans = typeof propSpans[number];
export type PropAlign = typeof propAlign[number];
export type PropJustify = typeof propJustify[number];
export type PropDirection = typeof propDirection[number];
export type PropStart = typeof propStart[number];
