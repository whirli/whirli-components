import { PropKeys, PropValues } from './BaseText.constants';

const propColor = PropValues[PropKeys.COLOR];
const propSize = PropValues[PropKeys.SIZE];
const propTag = PropValues[PropKeys.TAG];
const propFamily = PropValues[PropKeys.FAMILY];

export type PropColor = typeof propColor[number];
export type PropSize = typeof propSize[number];
export type PropTag = typeof propTag[number];
export type PropFamily = typeof propFamily[number];
