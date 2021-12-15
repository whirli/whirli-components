import { mount } from '@vue/test-utils';

import { propReturnsClass } from '../helpers';

import BaseList from '@/components/BaseList/BaseList.vue';

import { PropKeys } from '@/components/BaseList/BaseList.constants';
import { ConfigStyles } from '@/components/BaseList/BaseList.config';

let wrapper: any;
const text = 'Hello world';

describe('BaseList.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = mount(BaseList, {
      props: {
        tag: 'ul',
      },
      slots: {
        default: text,
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders the correct element', () => {
    expect(wrapper.find('ul').exists()).toBeTruthy();
  });

  it('renders the correct text', () => {
    expect(wrapper.text()).toBe(text);
  });

  it('is the correct classes', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.LIST_STYLE, 'style-none')).toBe(true);
  });
});
