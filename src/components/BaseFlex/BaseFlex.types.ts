import { PropKeys, PropValues } from './BaseFlex.constants';

const propAlign: string[] = PropValues[PropKeys.ALIGN];
const propJustify: string[] = PropValues[PropKeys.JUSTIFY];
const propDirection: string[] = PropValues[PropKeys.DIRECTION];
const propWrap: string[] = PropValues[PropKeys.WRAP];
const propSpacing: string[] = PropValues[PropKeys.SPACING];
const propTag: string[] = PropValues[PropKeys.TAG];

export type PropAlign = typeof propAlign[number];
export type PropJustify = typeof propJustify[number];
export type PropDirection = typeof propDirection[number];
export type PropWrap = typeof propWrap[number];
export type PropSpacing = typeof propSpacing[number];
export type PropTag = typeof propTag[number];
