export const createClassesFromPropValues = (
  propValues: Record<string, string[]>,
  key: string,
  customClassKey: string | null = null
): Record<string, string> => {
  const classKey = customClassKey ? customClassKey : key;
  const classMap: Record<string, string> = {};
  for (const value of propValues[key]) {
    classMap[value] = `${classKey}-${value}`;
  }

  return classMap;
};
