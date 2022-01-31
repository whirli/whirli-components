export const PropKeys: Record<string, string> = {
  SPANS: 'spans',
  ALIGN: 'align',
  JUSTIFY: 'justify',
  DIRECTION: 'direction',
  START: 'start',
};

export const PropValues: Record<string, string[]> = {
  [PropKeys.SPANS]: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  [PropKeys.ALIGN]: ['default', 'end', 'between'],
  [PropKeys.JUSTIFY]: ['default', 'end', 'between'],
  [PropKeys.DIRECTION]: ['default', 'row', 'row-reverse', 'column-reverse'],
  [PropKeys.START]: ['default', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
};
