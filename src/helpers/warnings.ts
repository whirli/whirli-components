import { ConsoleWarnings } from '@whirli-components/constants/warnings';

function baseWarning(warningType: string, warningDetail: string, error: string): void {
  console.warn(`[WHIRLI-COMPONENTS WARN]: ${warningType}: ${warningDetail} failed. ${error}`);
}

function invalidPropWarning(warningDetail: string, error: string): void {
  baseWarning(ConsoleWarnings.INVALID_PROP, warningDetail, error);
}

export function invalidBreakpointWarning(propName: string, propValue: string | number): void {
  invalidPropWarning(
    'Breakpoint validation',
    `Breakpoints key "${propValue}" doesn't exist and cannot be used on prop "${propName}"`
  );
}

export function invalidStyleWarning(propName: string, propValue: string | number): void {
  invalidPropWarning('Style validation', `Value "${propValue}" doesn't exist on prop "${propName}"`);
}
