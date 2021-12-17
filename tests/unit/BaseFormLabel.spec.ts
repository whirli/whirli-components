import { shallowMount } from '@vue/test-utils';
import BaseFormLabel from '@/components/BaseFormLabel/BaseFormLabel.vue';

let wrapper: any;
const text = 'Hello World';
const name = 'hello-world';

describe('BaseFormLabel.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseFormLabel, {
      slots: {
        default: text,
      },
      props: {
        name: name,
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    expect(wrapper.text()).toMatch(text);
  });

  it('has the correct tag', () => {
    expect(wrapper.element.tagName).toBe('LABEL');
  });

  it('has the correct for property', () => {
    expect(wrapper.element.getAttribute('for')).toBe(name);
  });
});
