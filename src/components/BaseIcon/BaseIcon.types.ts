import { PropKeys, PropValues } from './BaseIcon.constants';

const propIcon = PropValues[PropKeys.ICON];
const propSize = PropValues[PropKeys.SIZE];
const propColor = PropValues[PropKeys.COLOR];

export type PropIcon = typeof propIcon[number];
export type PropSize = typeof propSize[number];
export type PropColor = typeof propColor[number];
