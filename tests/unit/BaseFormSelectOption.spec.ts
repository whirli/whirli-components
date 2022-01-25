import { mount } from '@vue/test-utils';
import BaseFormSelectOption from '@/components/BaseFormSelectOption/BaseFormSelectOption.vue';

let wrapper: any;
const value = 'hello-world';
const selected = 'hello-world';
const slot = 'Hello';

describe('BaseFormSelectOption.vue', () => {
  beforeEach(() => {
    wrapper = mount(BaseFormSelectOption, {
      slots: {
        default: slot,
      },
      props: {
        value,
        selected,
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    expect(wrapper.findComponent(BaseFormSelectOption).text()).toMatch(slot);
  });

  it('has the correct value', () => {
    expect(wrapper.findComponent(BaseFormSelectOption).attributes('value')).toMatch(value);
  });
});
