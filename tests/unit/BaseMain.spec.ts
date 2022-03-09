import { shallowMount } from '@vue/test-utils';
import BaseMain from '@/components/BaseMain/BaseMain.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any;
const text = 'Hello World';

describe('BaseMain.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseMain, {
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
