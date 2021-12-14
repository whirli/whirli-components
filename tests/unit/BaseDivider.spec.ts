import { shallowMount } from '@vue/test-utils';
import { propReturnsClass } from '../helpers';

import BaseDivider from '@/components/BaseDivider/BaseDivider.vue';
import { PropKeys } from '@/components/BaseDivider/BaseDivider.constants';
import { ConfigStyles } from '@/components/BaseDivider/BaseDivider.config';

let wrapper: any;

describe('BaseDivider.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseDivider, {});
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('maps to the correct styles', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.SIZE, 'size-default')).toBe(true);
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.COLOR, 'color-default')).toBe(true);
  });
});
