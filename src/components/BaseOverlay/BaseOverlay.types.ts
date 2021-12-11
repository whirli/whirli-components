import { PropKeys, PropValues } from './BaseOverlay.constants';

const propColor = PropValues[PropKeys.COLOR];
const propState = PropValues[PropKeys.STATE];

export type PropColor = typeof propColor[number];
export type PropState = typeof propState[number];
