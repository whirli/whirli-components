import { PropKeys, PropValues } from './BaseList.constants';

const propTag: string[] = PropValues[PropKeys.TAG];
const propStyle: string[] = PropValues[PropKeys.LIST_STYLE];
const propDirection: string[] = PropValues[PropKeys.DIRECTION];

export type PropTag = typeof propTag[number];
export type PropStyle = typeof propStyle[number];
export type PropDirection = typeof propDirection[number];
