import { shallowMount } from '@vue/test-utils';

import BaseSection from '@/components/BaseSection/BaseSection.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any;
const text = 'Hello world';

describe('BaseSection.vue - Single classes: Equal top and bottom', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseSection, {
      props: {
        size: 'md',
      },
      slots: {
        default: text,
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('returns the correct top spacer value', () => {
    expect(wrapper.vm.gutter.top).toBe('md');
  });

  it('returns the correct bottom spacer value', () => {
    expect(wrapper.vm.gutter.bottom).toBe('md');
  });

  it('displays the correct content', () => {
    expect(wrapper.find('div').text()).toBe(text);
  });
});

describe('BaseSection.vue - Single classes: Seperate top and bottom', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseSection, {
      props: {
        size: {
          top: 'md',
          bottom: 'lg',
        },
      },
      slots: {
        default: text,
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('returns the correct top spacer value', () => {
    expect(wrapper.vm.gutter.top).toBe('md');
  });

  it('returns the correct bottom spacer value', () => {
    expect(wrapper.vm.gutter.bottom).toBe('lg');
  });

  it('displays the correct content', () => {
    expect(wrapper.find('div').text()).toBe(text);
  });
});
