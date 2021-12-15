import { shallowMount } from '@vue/test-utils';

import { propReturnsClass } from '../helpers';

import BaseTag from '@/components/BaseTag/BaseTag.vue';
import { PropKeys } from '@/components/BaseTag/BaseTag.constants';
import { ConfigStyles } from '@/components/BaseTag/BaseTag.config';

let wrapper: any;
const text = 'Hello World';

describe('BaseTag.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseTag, {
      slots: {
        default: text,
      },
      props: {
        tag: 'span',
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    expect(wrapper.text()).toMatch(text);
  });

  it('displays the correct element', () => {
    expect(wrapper.find('span').exists()).toBeTruthy();
  });

  it('has correct classes', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.THEME, 'theme-default')).toBe(true);
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.SIZE, 'size-default')).toBe(true);
  });
});
