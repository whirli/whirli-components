import { shallowMount } from '@vue/test-utils';
import { propReturnsClass } from '../helpers';

import BaseGrid from '@/components/BaseGrid/BaseGrid.vue';
import { PropKeys } from '@/components/BaseGrid/BaseGrid.constants';
import { ConfigStyles } from '@/components/BaseGrid/BaseGrid.config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any;
const text = 'Hello World';

describe('BaseGrid.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseGrid, {
      slots: {
        default: text,
      },
      props: {
        gap: '0',
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    expect(wrapper.text()).toMatch(text);
  });

  it('maps to the correct styles', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.GAP, 'gap-0')).toBe(true);
  });
});
