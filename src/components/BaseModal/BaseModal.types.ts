import { PropKeys, PropValues } from './BaseModal.constants';

const propColor = PropValues[PropKeys.COLOR];
const propSize = PropValues[PropKeys.SIZE];

export type PropColor = typeof propColor[number];
export type PropSize = typeof propSize[number];
