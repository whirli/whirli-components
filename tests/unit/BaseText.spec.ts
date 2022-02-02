import { shallowMount } from '@vue/test-utils';
import { propReturnsClass, propReturnsBreakpointClasses } from '../helpers';

import BaseText from '@/components/BaseText/BaseText.vue';
import { PropKeys } from '@/components/BaseText/BaseText.constants';
import { ConfigStyles } from '@/components/BaseText/BaseText.config';

let wrapper: any;
const text = 'Hello World';

describe('BaseText.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseText, {
      slots: {
        default: text,
      },
      props: {
        [PropKeys.TAG]: 'h1',
        [PropKeys.FONT]: 'bold',
        [PropKeys.SIZE]: 'xl',
        [PropKeys.LINE_HEIGHT]: 'xs',
        [PropKeys.LETTER_SPACING]: 'md',
        [PropKeys.TRANSFORM]: 'uppercase',
        [PropKeys.ALIGN]: 'center',
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    expect(wrapper.text()).toMatch(text);
  });

  it('displays the correct tag', () => {
    expect(wrapper.element.tagName).toBe('H1');
  });

  it('maps to the correct styles', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.FONT, 'font-bold')).toBe(true);
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.COLOR, 'color-inherit')).toBe(true);
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.SIZE, 'size-xl')).toBe(true);
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.LINE_HEIGHT, 'lineHeight-xs')).toBe(true);
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.LETTER_SPACING, 'letterSpacing-md')).toBe(true);
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.TRANSFORM, 'transform-uppercase')).toBe(true);
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.ALIGN, 'align-center')).toBe(true);
  });
});

describe('BaseText.vue - Breakpoint classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseText, {
      slots: {
        default: text,
      },
      props: {
        [PropKeys.TAG]: 'p',
        [PropKeys.FONT]: 'bold',
        [PropKeys.SIZE]: { default: 'xl', tablet: '3xl' },
        [PropKeys.LINE_HEIGHT]: { default: 'xs', tablet: 'md' },
        [PropKeys.LETTER_SPACING]: { default: 'md', tablet: 'lg' },
        [PropKeys.TRANSFORM]: 'uppercase',
        [PropKeys.ALIGN]: { default: 'center', tablet: 'default' },
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    expect(wrapper.text()).toMatch(text);
  });

  it('displays the correct tag', () => {
    expect(wrapper.element.tagName).toBe('P');
  });

  it('maps to the correct styles', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.FONT, 'font-bold')).toBe(true);
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.COLOR, 'color-inherit')).toBe(true);
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.TRANSFORM, 'transform-uppercase')).toBe(true);

    expect(
      propReturnsBreakpointClasses(wrapper, ConfigStyles, PropKeys.SIZE, {
        default: 'size-xl',
        tablet: 'size-3xl',
      })
    ).toBe(true);

    expect(
      propReturnsBreakpointClasses(wrapper, ConfigStyles, PropKeys.LINE_HEIGHT, {
        default: 'line-height-xs',
        tablet: 'line-height-md',
      })
    ).toBe(true);

    expect(
      propReturnsBreakpointClasses(wrapper, ConfigStyles, PropKeys.LETTER_SPACING, {
        default: 'letter-spacing-md',
        tablet: 'letter-spacing-lg',
      })
    ).toBe(true);

    expect(
      propReturnsBreakpointClasses(wrapper, ConfigStyles, PropKeys.ALIGN, {
        default: 'align-center',
        tablet: 'align-left',
      })
    ).toBe(true);
  });
});
