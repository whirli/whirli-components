import { mount } from '@vue/test-utils';

import { propReturnsClass, propReturnsBreakpointClasses } from '../helpers';

import BaseAccordion from '@/components/BaseAccordion/BaseAccordion.vue';
import { PropKeys } from '@/components/BaseAccordion/BaseAccordion.constants';
import { ConfigStyles } from '@/components/BaseAccordion/BaseAccordion.config';

let wrapper: any;
const title = 'Title';
const content = 'Hello World';

describe('BaseAccordion.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = mount(BaseAccordion, {
      slots: {
        title,
        content,
      },
      props: {
        name: 'accordion',
        state: 'open',
      },
    });
    wrapper.vm.updateAccordionState = jest.fn();
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders the correct title', () => {
    expect(wrapper.find('#accordion-header-id').text()).toBe(title);
  });

  it('renders the correct content', () => {
    expect(wrapper.find('#accordion-content-id').text()).toBe(content);
  });

  it('calls updateAccordionState on Button click', async () => {
    wrapper.find('#accordion-header-id').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.updateAccordionState).toHaveBeenCalled();
  });
});

describe('BaseAccordion.vue - Breakpoint classes', () => {
  beforeEach(() => {
    wrapper = mount(BaseAccordion, {
      slots: {
        title,
        content,
      },
      props: {
        name: 'accordion',
        state: { default: 'open', tablet: 'closed' },
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders the correct title', () => {
    expect(wrapper.find('#accordion-header-id').text()).toBe(title);
  });

  it('renders the correct content', () => {
    expect(wrapper.find('#accordion-content-id').text()).toBe(content);
  });
});
