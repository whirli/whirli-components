import { mount } from '@vue/test-utils';
import BaseFormRadioButton from '@/components/BaseFormRadioButton/BaseFormRadioButton.vue';
import BaseFormLabel from '@/components/BaseFormLabel/BaseFormLabel.vue';
import BaseFormError from '@/components/BaseFormError/BaseFormError.vue';

let wrapper: any;
const label = 'Hello World';
const content = 'Hello Content';
const error = 'Hello Error';
const group = 'input-group';
const value = 'input-value';
const id = `${group}-${value}`;

describe('BaseFormRadioButton.vue', () => {
  beforeEach(() => {
    wrapper = mount(BaseFormRadioButton, {
      slots: {
        default: content,
      },
      props: {
        label,
        error,
        group,
        value,
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

  it('radio has the correct id', () => {
    expect(wrapper.find('input').element.getAttribute('id')).toBe(id);
  });
});
