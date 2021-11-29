import { PropKeys, PropValues } from './BaseText.constants';

const propColor = PropValues[PropKeys.COLOR];
const propSize = PropValues[PropKeys.SIZE];
const propTag = PropValues[PropKeys.TAG];
const propFont = PropValues[PropKeys.FONT];
const propTransform = PropValues[PropKeys.TRANSFORM];
const propLineHeight = PropValues[PropKeys.LINE_HEIGHT];
const propLetterSpacing = PropValues[PropKeys.LETTER_SPACING];

export type PropColor = typeof propColor[number];
export type PropSize = typeof propSize[number];
export type PropTag = typeof propTag[number];
export type PropFont = typeof propFont[number];
export type PropTransform = typeof propTransform[number];
export type PropLineHeight = typeof propLineHeight[number];
export type PropLetterSpacing = typeof propLetterSpacing[number];
