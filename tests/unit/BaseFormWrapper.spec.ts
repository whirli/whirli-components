import { shallowMount } from '@vue/test-utils';
import BaseFormWrapper from '@/components/BaseFormWrapper/BaseFormWrapper.vue';

let wrapper: any;
const text = 'Hello World';

describe('BaseFormWrapper.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseFormWrapper, {
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
