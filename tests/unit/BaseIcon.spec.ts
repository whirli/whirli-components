import { mount } from '@vue/test-utils';

import { propReturnsClass } from '../helpers';

import BaseIcon from '@/components/BaseIcon/BaseIcon.vue';
import IconCross from '@/components/BaseIcon/icons/svg/IconCross.vue';

import { PropKeys } from '@/components/BaseIcon/BaseIcon.constants';
import { ConfigStyles } from '@/components/BaseIcon/BaseIcon.config';

let wrapper: any;

describe('BaseIcon.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = mount(BaseIcon, {
      props: {
        size: 'sm',
        icon: 'Cross',
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders the correct icon', () => {
    expect(wrapper.findComponent(IconCross).exists()).toBeTruthy();
  });

  it('is the correct size', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.SIZE, 'size-sm')).toBe(true);
  });

  it('is the correct color', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.COLOR, 'color-inherit')).toBe(true);
  });
});
