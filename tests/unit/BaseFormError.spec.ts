import { mount } from '@vue/test-utils';
import BaseFormError from '@/components/BaseFormError/BaseFormError.vue';
import BaseText from '@/components/BaseText/BaseText.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any;
const text = 'Hello World';

describe('BaseFormLabel.vue - With Slot', () => {
  beforeEach(() => {
    wrapper = mount(BaseFormError, {
      slots: {
        default: text,
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays BaseText', () => {
    expect(wrapper.findComponent(BaseText).exists()).toBeTruthy();
  });

  it('displays the correct text', () => {
    expect(wrapper.text()).toMatch(text);
  });
});

describe('BaseFormLabel.vue - Without Slot', () => {
  beforeEach(() => {
    wrapper = mount(BaseFormError, {});
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays BaseText', () => {
    expect(wrapper.findComponent(BaseText).exists()).toBeFalsy();
  });
});
