import { PropKeys, PropValues } from './BaseIcon.constants';

const propIcon: string[] = PropValues[PropKeys.ICON];
const propSize: string[] = PropValues[PropKeys.SIZE];
const propColor: string[] = PropValues[PropKeys.COLOR];

export type PropIcon = typeof propIcon[number];
export type PropSize = typeof propSize[number];
export type PropColor = typeof propColor[number];
