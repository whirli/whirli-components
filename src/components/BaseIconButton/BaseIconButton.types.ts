import { PropKeys, PropValues } from './BaseIconButton.constants';

const propTag: string[] = PropValues[PropKeys.TAG];

export type PropTag = typeof propTag[number];
