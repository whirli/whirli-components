import { PropKeys, PropValues } from './BaseTag.constants';

const propSize: string[] = PropValues[PropKeys.SIZE];
const propTag: string[] = PropValues[PropKeys.TAG];
const propTheme: string[] = PropValues[PropKeys.THEME];

export type PropSize = typeof propSize[number];
export type PropTag = typeof propTag[number];
export type PropTheme = typeof propTheme[number];
