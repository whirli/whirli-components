import { PropKeys, PropValues } from './BaseList.constants';

const propTag: string[] = PropValues[PropKeys.Tag];
const propStyle: string[] = PropValues[PropKeys.LIST_STYLE];

export type PropTag = typeof propTag[number];
export type PropStyle = typeof propStyle[number];
