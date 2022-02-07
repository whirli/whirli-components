import {
  PropKeys as SpacerPropKeys,
  PropValues as SpacerPropValues,
} from '@whirli-components/components/BaseSpacer/BaseSpacer.constants';

import {
  PropKeys as ColumnPropKeys,
  PropValues as ColumnPropValues,
} from '@whirli-components/components/BaseColumn/BaseColumn.constants';

// Local config
import config from '@whirli-local/components/BaseFlex/BaseFlex.config';

// Helpers
import { getLocalPropValues } from '@whirli-components/helpers/props';

export const PropKeys: Record<string, string> = {
  ALIGN: 'align',
  JUSTIFY: 'justify',
  DIRECTION: 'direction',
  WRAP: 'wrap',
  SPACING: 'spacing',
  TAG: 'tag',
  SPANS: 'spans',
};

const localValues = getLocalPropValues(PropKeys, config);

export const PropValues: Record<string, string[]> = {
  [PropKeys.ALIGN]: [
    'start',
    'center',
    'end',
    'baseline',
    'stretch',
    'normal',
    ...localValues[PropKeys.ALIGN],
  ],
  [PropKeys.JUSTIFY]: [
    'center',
    'left',
    'right',
    'between',
    'around',
    'evenly',
    ...localValues[PropKeys.JUSTIFY],
  ],
  [PropKeys.DIRECTION]: [
    'row',
    'row-reverse',
    'column',
    'column-reverse',
    ...localValues[PropKeys.DIRECTION],
  ],
  [PropKeys.WRAP]: [
    'nowrap',
    'wrap',
    'wrap-reverse',
    'inherit',
    'initial',
    'unset',
    ...localValues[PropKeys.WRAP],
  ],
  [PropKeys.SPACING]: SpacerPropValues[SpacerPropKeys.SIZE],
  [PropKeys.SPANS]: ['auto', ...ColumnPropValues[ColumnPropKeys.SPANS]],
  [PropKeys.TAG]: ['div'],
};
