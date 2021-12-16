import type { PropType } from 'vue';

export type Props = Readonly<
  {
    [x: string]: unknown;
  } & Record<string, unknown> & {
      [x: string]: any;
      [x: number]: any;
    }
>;
export type StyleProp = PropType<string | number>;
export type BreakpointStyleProp =
  | PropType<Record<string, string> | string | number>
  | PropType<string>
  | PropType<number>;
