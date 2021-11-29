import { PropKeys, PropValues } from './BaseButton.constants';

const propButtonType = PropValues[PropKeys.TYPE];
const propColor = PropValues[PropKeys.COLOR];
const propSize = PropValues[PropKeys.SIZE];
const propState = PropValues[PropKeys.STATE];

export type PropButtonType = typeof propButtonType[number];
export type PropColor = typeof propColor[number];
export type PropSize = typeof propSize[number];
export type PropState = typeof propState[number];
