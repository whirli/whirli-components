import type { PropType } from 'vue';

export type StyleProp = PropType<string | number>;
export type BreakpointStyleProp =
  | PropType<Record<string, string> | string | number>
  | PropType<string>
  | PropType<number>;
