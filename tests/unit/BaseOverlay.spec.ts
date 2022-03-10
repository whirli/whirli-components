import { shallowMount } from '@vue/test-utils';

import { propReturnsClass } from '../helpers';

import BaseOverlay from '@/components/BaseOverlay/BaseOverlay.vue';
import { PropKeys } from '@/components/BaseOverlay/BaseOverlay.constants';
import { ConfigStyles } from '@/components/BaseOverlay/BaseOverlay.config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any;
const text = 'Hello World';

describe('BaseOverlay.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseOverlay, {
      slots: {
        default: text,
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    expect(wrapper.text()).toMatch(text);
  });

  it('is the correct color', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.COLOR, 'color-default')).toBe(true);
  });
});
