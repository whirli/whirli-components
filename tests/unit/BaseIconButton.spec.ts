import { mount } from '@vue/test-utils';

import BaseIconButton from '@/components/BaseIconButton/BaseIconButton.vue';
import IconCross from '@/components/BaseIcon/icons/svg/IconCross.vue';

let wrapper: any;

describe('BaseIconButton.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = mount(BaseIconButton, {
      props: {
        icon: 'Cross',
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders the correct icon', () => {
    expect(wrapper.findComponent(IconCross).exists()).toBeTruthy();
  });
});
