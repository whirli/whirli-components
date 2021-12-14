import { PropKeys, PropValues } from './BaseModal.constants';

const propColor: string[] = PropValues[PropKeys.COLOR];
const propSize: string[] = PropValues[PropKeys.SIZE];

export type PropColor = typeof propColor[number];
export type PropSize = typeof propSize[number];
