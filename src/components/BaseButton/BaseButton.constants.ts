export const LoadingStates: Record<string, string> = {
  DEFAULT: 'default',
  LOADING: 'loading',
  PROCESSING: 'processing',
  COMPLETE: 'complete',
};

export const PropKeys: Record<string, string> = {
  TYPE: 'type',
  URL: 'url',
  COLOR: 'color',
  SIZE: 'size',
  STATE: 'state',
};

export const PropValues: Record<string, string[]> = {
  [PropKeys.TYPE]: ['button', 'submit'],
  [PropKeys.COLOR]: ['default'],
  [PropKeys.SIZE]: ['default'],
  [PropKeys.STATE]: [
    LoadingStates.DEFAULT,
    LoadingStates.LOADING,
    LoadingStates.PROCESSING,
    LoadingStates.COMPLETE,
  ],
};
