import { mount } from '@vue/test-utils';
import BaseFormInput from '@/components/BaseFormInput/BaseFormInput.vue';
import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';
import BaseFormLabel from '@/components/BaseFormLabel/BaseFormLabel.vue';
import BaseFormError from '@/components/BaseFormError/BaseFormError.vue';

let wrapper: any;
const label = 'Hello World';
const content = 'Hello Content';
const error = 'Hello Error';
const name = 'select-name';

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

  it('select has the correct name', () => {
    expect(wrapper.find('select').element.getAttribute('name')).toBe(name);
  });
});
