export const PropKeys: Record<string, string> = {
  ICON: 'icon',
  SIZE: 'size',
  BACKDROP: 'backdrop',
  THEME: 'theme',
};

export const PropValues: Record<string, string[]> = {
  [PropKeys.BACKDROP]: ['default', 'circle', 'square'],
  [PropKeys.ICON]: ['default'],
  [PropKeys.SIZE]: ['3xs', '2xs', 'xs', 'sm', 'default', 'md', 'lg', 'xl'],
  [PropKeys.THEME]: ['default'],
};
