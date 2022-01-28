import { shallowMount } from '@vue/test-utils';

import BaseFlex from '@/components/BaseFlex/BaseFlex.vue';

import { propReturnsClass } from '../helpers';

import { PropKeys } from '@/components/BaseFlex/BaseFlex.constants';
import { ConfigStyles } from '@/components/BaseFlex/BaseFlex.config';

let wrapper: any;
const text = 'Hello world';

describe('BaseFlex.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseFlex, {
      props: {
        tag: 'div',
        align: 'middle',
        justify: 'center',
        direction: 'column',
        wrap: 'nowrap',
        spacing: 'sm',
      },
      slots: {
        default: text,
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays the correct content', () => {
    expect(wrapper.find('div').text()).toBe(text);
  });

  it('is the correct align', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.ALIGN, 'align-middle')).toBe(true);
  });

  it('is the correct justify', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.JUSTIFY, 'justify-center')).toBe(true);
  });

  it('is the correct direction', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.DIRECTION, 'direction-column')).toBe(true);
  });

  it('is the correct wrap', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.WRAP, 'wrap-nowrap')).toBe(true);
  });
});
