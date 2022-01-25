export const PropKeys: Record<string, string> = {
  DISABLED: 'disabled',
  LABEL: 'label',
  MULTIPLE: 'multiple',
  NAME: 'name',
  TYPE: 'type',
  MODAL_VALUE: 'modelValue',
};

export const PropValues: Record<string, string[]> = {
  [PropKeys.TYPE]: ['text', 'number', 'date', 'email', 'password', 'search', 'url', 'file', 'textarea'],
};
