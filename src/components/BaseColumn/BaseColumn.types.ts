import { PropKeys, PropValues } from './BaseColumn.constants';

const propSpans = PropValues[PropKeys.SPANS];

export type PropSpans = typeof propSpans[number];
