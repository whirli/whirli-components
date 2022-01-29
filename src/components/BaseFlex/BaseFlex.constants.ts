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

export const PropKeys: Record<string, string> = {
  ALIGN: 'align',
  JUSTIFY: 'justify',
  DIRECTION: 'direction',
  WRAP: 'wrap',
  SPACING: 'spacing',
  TAG: 'tag',
  SPANS: 'spans',
};

const localValues = {
  [PropKeys.ALIGN]: config.styles[PropKeys.ALIGN]?.classes
    ? Object.keys(config.styles[PropKeys.ALIGN].classes)
    : [],
  [PropKeys.JUSTIFY]: config.styles[PropKeys.JUSTIFY]?.classes
    ? Object.keys(config.styles[PropKeys.JUSTIFY].classes)
    : [],
  [PropKeys.DIRECTION]: config.styles[PropKeys.DIRECTION]?.classes
    ? Object.keys(config.styles[PropKeys.DIRECTION].classes)
    : [],
  [PropKeys.WRAP]: config.styles[PropKeys.WRAP]?.classes
    ? Object.keys(config.styles[PropKeys.WRAP].classes)
    : [],
};

export const PropValues: Record<string, string[]> = {
  [PropKeys.ALIGN]: [
    'top',
    'middle',
    'bottom',
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
