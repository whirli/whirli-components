import Breakpoints from '../styles/Breakpoints.module.scss';
import { invalidBreakpointWarning, invalidStyleWarning } from './warnings';
import { ComponentStyles } from '../@types/components';

interface PropValidation {
  /* eslint-disable-next-line */
  validator: (value: string) => boolean;
}

export const stylePropValidation = (component: ComponentStyles, propName: string): PropValidation => {
  return {
    validator: (value: string | number) => {
      const passesValidation = Object.keys(component[propName]?.classes).includes(String(value));
      if (!passesValidation) invalidStyleWarning(propName, value);
      return passesValidation;
    },
  };
};

export const breakpointStylePropValidation = (
  component: ComponentStyles,
  propName: string
): PropValidation => {
  return {
    /* eslint-disable-next-line */
    validator: (value: any | string | number): boolean => {
      let passesValidation = true;
      if (typeof value === 'object') {
        Object.entries(value).forEach(
          /* eslint-disable-next-line */
          ([breakpointKey, breakpointString]: [any, any]) => {
            if (!passesValidation) return false;
            const passesBreakpointValidation = ['defaultPrefix', ...Object.keys(Breakpoints)].includes(
              `${breakpointKey}Prefix`
            );
            const passesValueValidation = Object.keys(component[propName]?.classes).includes(
              String(breakpointString)
            );

            if (!passesBreakpointValidation) invalidBreakpointWarning(propName, breakpointKey);
            if (!passesValueValidation) invalidStyleWarning(propName, breakpointString);

            passesValidation = passesBreakpointValidation && passesValueValidation;
          }
        );
      } else {
        passesValidation = Object.keys(component[propName]?.classes).includes(String(value));
        if (!passesValidation) invalidStyleWarning(propName, value);
      }
      return passesValidation;
    },
  };
};
