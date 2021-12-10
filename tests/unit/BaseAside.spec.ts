import { shallowMount } from '@vue/test-utils';
import BaseAside from '@/components/BaseAside/BaseAside.vue';

let wrapper: any;
const text = 'Hello World';

describe('BaseAside.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseAside, {
      slots: {
        default: text,
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    expect(wrapper.text()).toMatch(text);
  });
});
