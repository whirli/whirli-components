import { PropKeys, PropValues } from './BaseListItem.constants';

const propTag: string[] = PropValues[PropKeys.TAG];

export type PropTag = typeof propTag[number];
