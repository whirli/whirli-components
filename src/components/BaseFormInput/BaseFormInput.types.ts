import { PropKeys, PropValues } from './BaseFormInput.constants';

const propType: string[] = PropValues[PropKeys.TYPE];

export type PropType = typeof propType[number];
