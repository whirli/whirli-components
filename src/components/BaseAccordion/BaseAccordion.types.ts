import { PropKeys, PropValues } from './BaseAccordion.constants';

const propState = PropValues[PropKeys.STATE];

export type PropState = typeof propState[number];
