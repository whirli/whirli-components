import { PropKeys, PropValues } from './BaseText.constants';

const propColor: string[] = PropValues[PropKeys.COLOR];
const propSize: string[] = PropValues[PropKeys.SIZE];
const propTag: string[] = PropValues[PropKeys.TAG];
const propFont: string[] = PropValues[PropKeys.FONT];
const propTransform: string[] = PropValues[PropKeys.TRANSFORM];
const propLineHeight: string[] = PropValues[PropKeys.LINE_HEIGHT];
const propLetterSpacing: string[] = PropValues[PropKeys.LETTER_SPACING];
const propAlign: string[] = PropValues[PropKeys.ALIGN];

export type PropColor = typeof propColor[number];
export type PropSize = typeof propSize[number];
export type PropTag = typeof propTag[number];
export type PropFont = typeof propFont[number];
export type PropTransform = typeof propTransform[number];
export type PropLineHeight = typeof propLineHeight[number];
export type PropLetterSpacing = typeof propLetterSpacing[number];
export type PropAlign = typeof propAlign[number];
