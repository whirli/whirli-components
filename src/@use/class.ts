import Breakpoints from '@whirli-components/styles/Breakpoints.module.scss';
import { ComponentStyles } from '@whirli-components/@types/components';

interface Classes {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  makeClasses: (config: ComponentStyles, props: Readonly<any>, styles: Record<string, string>) => string[];
  /* eslint-enable  @typescript-eslint/no-explicit-any */
}

export default function (): Classes {
  const makeClasses = (
    config: ComponentStyles,
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    props: Readonly<any>,
    /* enable-disable  @typescript-eslint/no-explicit-any */
    styles: Record<string, string>
  ): string[] => {
    const classes: string[] = [];
    Object.keys(props).forEach((propKey: string) => {
      if (!config[propKey]?.classes) return;
      // Generate breakpoint styles if requested
      if (config[propKey].generateBreakpoints) {
        let defaultStyleKey;
        if (!props[propKey]) return;
        if (typeof props[propKey] === 'string') {
          // If only default is needed we should be able to just pass a string
          defaultStyleKey = config[propKey].classes[props[propKey]];
          // Generate the default style
          if (styles[defaultStyleKey]) {
            classes.push(styles[defaultStyleKey]);
          }
          return;
        } else {
          if (props[propKey]?.default) {
            defaultStyleKey = config[propKey].classes[props[propKey].default];
            // Generate the default style
            if (styles[defaultStyleKey]) {
              classes.push(styles[defaultStyleKey]);
            }
          }
        }
        // Generate the breakpoint styles
        Object.entries(props[propKey]).forEach(([propBreakpointKey, propBreakpointStyle]) => {
          const breakpointPrefix: string = Breakpoints[`${propBreakpointKey}Prefix`];
          const styleKey: string = config[propKey].classes[propBreakpointStyle as string];
          const breakpointStyleKey = `${breakpointPrefix}:${styleKey}`;

          if (styles[breakpointStyleKey]) {
            classes.push(styles[breakpointStyleKey]);
          }
        });
      }
      // If there's no need to create breakpoint styles
      else {
        const styleKey = `${config[propKey].classes[props[propKey]]}`;
        if (styles[styleKey]) {
          classes.push(styles[styleKey]);
        }
      }
    });

    return classes;
  };

  return {
    makeClasses,
  };
}
