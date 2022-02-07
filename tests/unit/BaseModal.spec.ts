import { mount } from '@vue/test-utils';

import { propReturnsClass } from '../helpers';

import BaseModal from '@/components/BaseModal/BaseModal.vue';
import BaseIconButton from '@/components/BaseIconButton/BaseIconButton.vue';

import { PropKeys } from '@/components/BaseModal/BaseModal.constants';
import { ConfigStyles } from '@/components/BaseModal/BaseModal.config';

let wrapper: any;
const title = 'Modal title';
const content = 'Hello World';

describe('BaseModal.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = mount(BaseModal, {
      slots: {
        title: title,
        content: content,
      },
    });
    wrapper.vm.uniqueId = 'abc';
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders the close button', () => {
    expect(wrapper.findComponent(BaseIconButton).exists()).toBeTruthy();
  });

  it('close button emits close event', async () => {
    wrapper.findComponent(BaseIconButton).trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('item:click'));
  });

  it('is the correct color', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.COLOR, 'color-default')).toBe(true);
  });

  it('is the correct size', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.SIZE, 'size-default')).toBe(true);
  });
});
