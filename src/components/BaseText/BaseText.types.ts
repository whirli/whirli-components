import { PropKeys, PropValues } from './BaseText.constants';

const propColor = PropValues[PropKeys.COLOR];
const propSize = PropValues[PropKeys.SIZE];
const propTag = PropValues[PropKeys.TAG];
const propFont = PropValues[PropKeys.FONT];

export type PropColor = typeof propColor[number];
export type PropSize = typeof propSize[number];
export type PropTag = typeof propTag[number];
export type PropFont = typeof propFont[number];
