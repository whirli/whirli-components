// Local config
import config from '@whirli-local/components/BaseText/BaseText.config';

// Helpers
import { getLocalPropValues } from '@whirli-components/helpers/props';

export const PropKeys = {
  COLOR: 'color',
  TAG: 'tag',
  SIZE: 'size',
  FONT: 'font',
  TRANSFORM: 'transform',
  LETTER_SPACING: 'letterSpacing',
  LINE_HEIGHT: 'lineHeight',
  ALIGN: 'align',
};

const localValues = getLocalPropValues(PropKeys, config);

export const PropValues = {
  [PropKeys.COLOR]: ['inherit'],
  [PropKeys.TAG]: [
    'a',
    'nuxt-link',
    'router-link',
    'address',
    'time',
    'span',
    'strong',
    'div',
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'address',
    'li',
    'blockquote',
    'dt',
    'dd',
    'figcaption',
  ],
  [PropKeys.SIZE]: [
    '3xs',
    '2xs',
    'xs',
    'sm',
    'base',
    'default',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    ...localValues[PropKeys.SIZE],
  ],
  [PropKeys.FONT]: ['default', 'bold', 'mono', ...localValues[PropKeys.FONT]],
  [PropKeys.TRANSFORM]: ['default', 'uppercase', ...localValues[PropKeys.TRANSFORM]],
  [PropKeys.LETTER_SPACING]: ['default', 'md', 'lg', 'xl', ...localValues[PropKeys.LETTER_SPACING]],
  [PropKeys.LINE_HEIGHT]: [
    '3xs',
    '2xs',
    'xs',
    'sm',
    'base',
    'default',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    ...localValues[PropKeys.LINE_HEIGHT],
  ],
  [PropKeys.ALIGN]: ['default', 'center', 'right', ...localValues[PropKeys.ALIGN]],
};
