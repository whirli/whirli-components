import { PropKeys, PropValues } from './BaseOverlay.constants';

const propColor: string[] = PropValues[PropKeys.COLOR];
const propState: string[] = PropValues[PropKeys.STATE];

export type PropColor = typeof propColor[number];
export type PropState = typeof propState[number];
