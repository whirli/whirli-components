import { PropKeys, PropValues } from './BaseAccordion.constants';

const propState: string[] = PropValues[PropKeys.STATE];

export type PropState = typeof propState[number];
