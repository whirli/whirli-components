import { PropType } from '@composition';

export type Props = Readonly<
  {
    [x: string]: unknown;
  } & Record<string, unknown> & {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [x: string]: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [x: number]: any;
    }
>;
export type StyleProp = PropType<string | number>;
export type BreakpointStyleProp =
  | PropType<Record<string, string> | string | number>
  | PropType<string>
  | PropType<number>;
