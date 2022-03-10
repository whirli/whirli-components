import { shallowMount } from '@vue/test-utils';
import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any;
const text = 'Hello World';

describe('BaseFormGroup.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseFormGroup, {
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
