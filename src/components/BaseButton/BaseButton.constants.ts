export const LoadingStates = {
  DEFAULT: 'default',
  LOADING: 'loading',
  PROCESSING: 'processing',
  COMPLETE: 'complete',
};

export const PropKeys = {
  TYPE: 'type',
  URL: 'url',
  COLOR: 'color',
  SIZE: 'size',
  STATE: 'state',
};

export const PropValues = {
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
