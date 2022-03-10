const toKebabCase = (string: string) => {
  return string
    .replace(/\B([A-Z])(?=[a-z])/g, '-$1')
    .replace(/\B([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
};

const toCamelCase = (string: string) => {
  return string.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '');
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export const propReturnsClass = (wrapper: any, configStyles: any, prop: any, className: any): boolean => {
  return configStyles[prop].classes[wrapper.vm[toCamelCase(prop)]] === className;
};

export const propReturnsBreakpointClasses = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  wrapper: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  configStyles: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  prop: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  classNames: any
): boolean => {
  let returnsCorrectClasses = true;
  for (const [key, value] of Object.entries(classNames)) {
    if (!configStyles[prop].classes[wrapper.vm[prop][key]] === value) returnsCorrectClasses = false;
    break;
  }
  return returnsCorrectClasses;
};
