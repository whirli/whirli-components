import { mount } from '@vue/test-utils';
import BaseFormGroupLayoutDefault from '@/components/BaseFormGroup/BaseFormGroupLayoutDefault.vue';
import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';
import BaseFormLabel from '@/components/BaseFormLabel/BaseFormLabel.vue';
import BaseFormError from '@/components/BaseFormError/BaseFormError.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any;
const label = 'Hello World';
const content = 'Hello Content';
const error = 'Hello Error';

describe('BaseFormGroupLayoutDefault.vue', () => {
  beforeEach(() => {
    wrapper = mount(BaseFormGroupLayoutDefault, {
      slots: {
        default: content,
      },
      props: {
        label,
        error,
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('has the FormGroup wrapper', () => {
    expect(wrapper.findComponent(BaseFormGroup).exists()).toBeTruthy();
  });

  it('label displays the correct text', () => {
    expect(wrapper.findComponent(BaseFormLabel).text()).toMatch(label);
  });

  it('error displays the correct text', () => {
    expect(wrapper.findComponent(BaseFormError).text()).toMatch(error);
  });
});
