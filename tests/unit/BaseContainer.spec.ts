import { shallowMount } from '@vue/test-utils';
import BaseContainer from '@/components/BaseContainer/BaseContainer.vue';

let wrapper: any;
const text = 'Hello World';

describe('BaseContainer.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseContainer, {
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
