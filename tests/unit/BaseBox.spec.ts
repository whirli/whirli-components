import { shallowMount } from '@vue/test-utils';

import BaseBox from '@/components/BaseBox/BaseBox.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any;
const text = 'Hello world';

describe('BaseBox.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseBox, {
      props: {
        padding: 'md',
      },
      slots: {
        default: text,
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays the correct content', () => {
    expect(wrapper.find('div').text()).toBe(text);
  });
});
