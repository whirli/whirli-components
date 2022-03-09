import { mount } from '@vue/test-utils';

import { propReturnsClass } from '../helpers';

import BaseIcon from '@/components/BaseIcon/BaseIcon.vue';
import IconCross from '@/components/BaseIcon/icons/svg/IconCross.vue';

import { PropKeys } from '@/components/BaseIcon/BaseIcon.constants';
import { ConfigStyles } from '@/components/BaseIcon/BaseIcon.config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any;

describe('BaseIcon.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = mount(BaseIcon, {
      props: {
        size: 'sm',
        icon: 'Cross',
        backdrop: 'circle',
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders the correct icon', () => {
    expect(wrapper.findComponent(IconCross).exists()).toBeTruthy();
  });

  it('has the correct styles', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.SIZE, 'size-sm')).toBe(true);
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.THEME, 'theme-default')).toBe(true);
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.BACKDROP, 'backdrop-circle')).toBe(true);
  });
});
