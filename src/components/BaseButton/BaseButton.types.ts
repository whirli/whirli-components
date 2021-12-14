import { PropKeys, PropValues } from './BaseButton.constants';

const propButtonType: string[] = PropValues[PropKeys.TYPE];
const propColor: string[] = PropValues[PropKeys.COLOR];
const propSize: string[] = PropValues[PropKeys.SIZE];
const propState: string[] = PropValues[PropKeys.STATE];

export type PropButtonType = typeof propButtonType[number];
export type PropColor = typeof propColor[number];
export type PropSize = typeof propSize[number];
export type PropState = typeof propState[number];
