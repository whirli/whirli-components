import { PropKeys, PropValues } from './BaseFormWrapper.constants';

const propMethod: string[] = PropValues[PropKeys.METHOD];
const propEncode: string[] = PropValues[PropKeys.ENCODE];

export type PropMethod = typeof propMethod[number];
export type PropEncode = typeof propEncode[number];
