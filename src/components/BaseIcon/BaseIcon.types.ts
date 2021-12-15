import { PropKeys, PropValues } from './BaseIcon.constants';

const propBackdrop: string[] = PropValues[PropKeys.BACKDROP];
const propIcon: string[] = PropValues[PropKeys.ICON];
const propSize: string[] = PropValues[PropKeys.SIZE];
const propTheme: string[] = PropValues[PropKeys.THEME];

export type PropBackdrop = typeof propBackdrop[number];
export type PropIcon = typeof propIcon[number];
export type PropSize = typeof propSize[number];
export type PropTheme = typeof propTheme[number];
