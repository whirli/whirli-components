import { shallowMount } from '@vue/test-utils';
import { propReturnsClass, propReturnsBreakpointClasses } from '../helpers';

import BaseSpacer from '@/components/BaseSpacer/BaseSpacer.vue';
import { PropKeys } from '@/components/BaseSpacer/BaseSpacer.constants';
import { ConfigStyles } from '@/components/BaseSpacer/BaseSpacer.config';

let wrapper: any;

describe('BaseSpacer.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseSpacer, {
      props: {
        size: 'md',
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('maps to the correct styles', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.SIZE, 'size-md')).toBe(true);
  });
});

describe('BaseSpacer.vue - Breakpoint classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseSpacer, {
      props: {
        size: { default: 'md', tablet: 'lg' },
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('maps to the correct styles', () => {
    expect(
      propReturnsBreakpointClasses(wrapper, ConfigStyles, PropKeys.SIZE, {
        default: 'size-md',
        tablet: 'size-lg',
      })
    ).toBe(true);
  });
});
