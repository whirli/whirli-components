export const PropKeys = {
  COLOR: 'color',
  TAG: 'tag',
  SIZE: 'size',
  FONT: 'font',
  TRANSFORM: 'transform',
  LETTER_SPACING: 'letter-spacing',
  LINE_HEIGHT: 'line-height',
};

export const PropValues = {
  [PropKeys.COLOR]: ['default'],
  [PropKeys.TAG]: [
    'span',
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
  [PropKeys.SIZE]: ['3xs', '2xs', 'xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
  [PropKeys.FONT]: ['default'],
  [PropKeys.TRANSFORM]: ['default', 'uppercase'],
  [PropKeys.LETTER_SPACING]: ['default', 'md', 'lg', 'xl'],
  [PropKeys.LINE_HEIGHT]: ['3xs', '2xs', 'xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
};
