import { PropKeys, PropValues } from './BaseSection.constants';

const propBackground = PropValues[PropKeys.BACKGROUND];

export type PropBackground = typeof propBackground[number];

export type PropSize =
  | string
  | Record<string, string>
  | [string | Record<string, string>, string | Record<string, string>];

export interface ComputedSize {
  top: PropSize;
  bottom: PropSize;
}
