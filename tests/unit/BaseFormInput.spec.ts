import { mount } from '@vue/test-utils';
import BaseFormInput from '@/components/BaseFormInput/BaseFormInput.vue';
import BaseFormLabel from '@/components/BaseFormLabel/BaseFormLabel.vue';
import BaseFormError from '@/components/BaseFormError/BaseFormError.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any;
const label = 'Hello World';
const content = 'Hello Content';
const error = 'Hello Error';
const name = 'input-name';

describe('BaseFormInput.vue', () => {
  beforeEach(() => {
    wrapper = mount(BaseFormInput, {
      slots: {
        default: content,
      },
      props: {
        label,
        error,
        name,
      },
    });
    wrapper.vm.resetErrors = jest.fn();
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

  it('clears errors on keydown', async () => {
    wrapper.find('input').trigger('keydown');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.resetErrors).toHaveBeenCalled();
  });

  it('updates value on keyup', async () => {
    wrapper.find('input').trigger('keyup');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.updateValue).toHaveBeenCalled();
  });
});
