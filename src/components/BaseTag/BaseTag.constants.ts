export const PropKeys: Record<string, string> = {
  SIZE: 'size',
  TAG: 'tag',
  THEME: 'theme',
};

export const PropValues: Record<string, string[]> = {
  SIZE: ['default'],
  [PropKeys.TAG]: ['div', 'span', 'button'],
  [PropKeys.THEME]: ['default'],
};
