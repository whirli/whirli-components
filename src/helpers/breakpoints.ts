import Breakpoints from '../styles/Breakpoints.module.scss';

export const mapBreakpoints = (): Record<string, string> => {
  let mappedBreakpoints = {};
  const mapBreakpoints = Object.entries(Breakpoints)
    .filter(([key, value]: [string, string]) => {
      return key.startsWith(Breakpoints.prefix);
    })
    .map(([key, value]: [string, string]) => {
      return { [key.replace(Breakpoints.prefix, '')]: value };
    });

  mapBreakpoints.forEach((breakpoint: Record<string, string>) => {
    mappedBreakpoints = { ...mappedBreakpoints, ...breakpoint };
  });

  return mappedBreakpoints;
};
