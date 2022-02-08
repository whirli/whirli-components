// Local config
import config from '@whirli-local/components/BaseColumn/BaseColumn.config';
// Helpers
import { getLocalPropValues } from '@whirli-components/helpers/props';

export const PropKeys: Record<string, string> = {
  SPANS: 'spans',
  ALIGN: 'align',
  JUSTIFY: 'justify',
  DIRECTION: 'direction',
  START: 'start',
};

const localValues = getLocalPropValues(PropKeys, config);

export const PropValues: Record<string, string[]> = {
  [PropKeys.SPANS]: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  [PropKeys.ALIGN]: ['default', 'end', 'between', 'center', 'normal', ...localValues[PropKeys.ALIGN]],
  [PropKeys.JUSTIFY]: ['default', 'end', 'between', 'center', 'normal', ...localValues[PropKeys.JUSTIFY]],
  [PropKeys.DIRECTION]: [
    'default',
    'row',
    'row-reverse',
    'column-reverse',
    'reverse',
    ...localValues[PropKeys.DIRECTION],
  ],
  [PropKeys.START]: ['default', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
};
