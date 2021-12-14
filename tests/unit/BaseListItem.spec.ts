import { mount } from '@vue/test-utils';

import BaseListItem from '@/components/BaseListItem/BaseListItem.vue';

let wrapper: any;
const text = 'Hello world';

describe('BaseListItem.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = mount(BaseListItem, {
      props: {
        tag: 'li',
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
    expect(wrapper.find('li').exists()).toBeTruthy();
  });

  it('renders the correct text', () => {
    expect(wrapper.text()).toBe(text);
  });
});
