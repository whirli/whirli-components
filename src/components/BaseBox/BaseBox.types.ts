import { PropKeys, PropValues } from './BaseBox.constants';

const propTag: string[] = PropValues[PropKeys.TAG];
const propPadding: string[] = PropValues[PropKeys.propPadding];

export type PropTag = typeof propTag[number];
export type PropPadding = typeof propPadding[number];
