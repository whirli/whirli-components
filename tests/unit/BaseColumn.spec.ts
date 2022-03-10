import { shallowMount } from '@vue/test-utils';
import { propReturnsClass, propReturnsBreakpointClasses } from '../helpers';

import BaseColumn from '@/components/BaseColumn/BaseColumn.vue';
import { PropKeys } from '@/components/BaseColumn/BaseColumn.constants';
import { ConfigStyles } from '@/components/BaseColumn/BaseColumn.config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any;

describe('BaseColumn.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseColumn, {
      props: {
        spans: '6',
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('maps to the correct styles', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.SPANS, 'spans-6')).toBe(true);
  });
});

describe('BaseColumn.vue - Breakpoint classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseColumn, {
      props: {
        spans: { default: '12', tablet: '6' },
        start: { default: '1', tablet: '2' },
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('maps to the correct styles', () => {
    expect(
      propReturnsBreakpointClasses(wrapper, ConfigStyles, PropKeys.SPANS, {
        default: 'spans-12',
        tablet: 'spans-6',
      })
    ).toBe(true);

    expect(
      propReturnsBreakpointClasses(wrapper, ConfigStyles, PropKeys.START, {
        default: 'start-1',
        tablet: 'start-2',
      })
    ).toBe(true);
  });
});
