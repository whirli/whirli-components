import { mount } from '@vue/test-utils';

import BaseRow from '@/components/BaseRow/BaseRow.vue';
import BaseColumn from '@/components/BaseColumn/BaseColumn.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any;
const text = 'Hello World';

describe('BaseRow.vue', () => {
  beforeEach(() => {
    wrapper = mount(BaseRow, {
      slots: {
        default: text,
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders a column component', () => {
    expect(wrapper.findComponent(BaseColumn).exists()).toBeTruthy();
  });

  it('displays the correct text', () => {
    expect(wrapper.findComponent(BaseColumn).text()).toMatch(text);
  });
});
