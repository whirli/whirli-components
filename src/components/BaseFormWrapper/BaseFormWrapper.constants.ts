export const PropKeys: Record<string, string> = {
  ACTION: 'action',
  METHOD: 'method',
  ENCODE: 'encode',
};

export const PropValues: Record<string, string[]> = {
  [PropKeys.METHOD]: ['get', 'post'],
  [PropKeys.ENCODE]: ['default', 'media'],
};
