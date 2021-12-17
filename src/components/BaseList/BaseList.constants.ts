export const PropKeys: Record<string, string> = {
  TAG: 'tag',
  LIST_STYLE: 'list-style',
  DIRECTION: 'direction',
};

export const PropValues: Record<string, string[]> = {
  [PropKeys.TAG]: ['ul', 'ol'],
  [PropKeys.LIST_STYLE]: ['default', 'disc'],
  [PropKeys.DIRECTION]: ['default', 'row'],
};
