import { mount } from '@vue/test-utils';
import BaseFormCheckbox from '@/components/BaseFormCheckbox/BaseFormCheckbox.vue';
import BaseFormLabel from '@/components/BaseFormLabel/BaseFormLabel.vue';
import BaseFormError from '@/components/BaseFormError/BaseFormError.vue';

let wrapper: any;
const label = 'Hello World';
const error = 'Hello Error';
const name = 'input-name';

describe('BaseFormCheckbox.vue', () => {
  beforeEach(() => {
    wrapper = mount(BaseFormCheckbox, {
      props: {
        label,
        error,
        name,
      },
    });
    wrapper.vm.updateValue = jest.fn();
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays the correct label text', () => {
    expect(wrapper.findComponent(BaseFormLabel).text()).toMatch(label);
  });

  it('displays the correct error text', () => {
    expect(wrapper.findComponent(BaseFormError).text()).toMatch(error);
  });

  it('input has the correct name', () => {
    expect(wrapper.find('input').element.getAttribute('name')).toBe(name);
  });

  it('updates value on change', async () => {
    wrapper.find('input').trigger('change');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.updateValue).toHaveBeenCalled();
  });
});
