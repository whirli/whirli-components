export interface ComponentStyles {
  [key: string]: {
    generateBreakpoints?: boolean;
    classes: Record<string, string>;
  };
}

export interface ComponentProps {
  [key: string]: {
    required?: boolean;
    type?: any;
    default?: string;
    validator?: (value: string) => boolean;
  };
}

export interface ComponentConfig {
  styles: ComponentStyles;
  props: ComponentProps;
}
