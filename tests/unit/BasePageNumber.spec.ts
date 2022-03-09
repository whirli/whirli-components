import { mount } from '@vue/test-utils';
import BasePageNumber from '@/components/BasePageNumber/BasePageNumber.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any;
const pageNumber = '2';

jest.mock('vue-router', () => ({
  useRoute: () => ({
    query: {
      page: '3',
    },
  }),
}));

describe('BaseFormLabel.vue', () => {
  beforeEach(() => {
    wrapper = mount(BasePageNumber, {
      props: {
        pageNumber,
        tag: 'a',
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    expect(wrapper.text()).toMatch(pageNumber);
  });

  it('has the correct tag', () => {
    expect(wrapper.element.tagName).toBe('A');
  });

  it('emmits page number on click', async () => {
    wrapper.find('a').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('page-number:click'));
  });
});
