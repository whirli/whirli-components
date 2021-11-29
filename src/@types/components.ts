export interface ComponentStyles {
  [key: string]: {
    generateBreakpoints?: boolean;
    classes: Record<string, string>;
  };
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface ComponentProps {
  [key: string]: {
    required?: boolean;
    type?: any;
    default?: any;
    validator?: (value: string) => boolean;
  };
}
/* eslint-enable  @typescript-eslint/no-explicit-any */

export interface ComponentConfig {
  styles: ComponentStyles;
  props: ComponentProps;
}
