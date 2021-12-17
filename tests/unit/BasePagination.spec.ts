import { mount } from '@vue/test-utils';
import BasePagination from '@/components/BasePagination/BasePagination.vue';
import BasePageNumber from '@/components/BasePageNumber/BasePageNumber.vue';
import BaseFormSelect from '@/components/BaseFormSelect/BaseFormSelect.vue';

let wrapper: any;
const firstPage = 1;
const lastPage = 30;
const pageNumber = '3';

jest.mock('vue-router', () => ({
  useRoute: () => ({
    path: '/browse',
    query: {
      page: '3',
    },
  }),
}));

describe('BasePagination.vue', () => {
  beforeEach(() => {
    wrapper = mount(BasePagination, {
      props: {
        firstPage,
        lastPage,
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('emmits next on prev button click', async () => {
    wrapper.findComponent({ ref: 'previousButton' }).trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('pagination:previous'));
  });

  it('emmits next on next button click', async () => {
    wrapper.findComponent({ ref: 'nextButton' }).trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('pagination:next'));
  });

  it('emits page select on PageNumber change', async () => {
    wrapper.findComponent(BasePageNumber).trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('pagination:go-to'));
  });

  it('emits page select on BaseSelect change', async () => {
    wrapper.findComponent(BaseFormSelect).trigger('change');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('pagination:go-to'));
  });

  it('has the correct number of page select options', async () => {
    expect(wrapper.findAll('option').length).toBe(30);
  });

  it('has the correct pageCount text', async () => {
    expect(wrapper.findComponent({ ref: 'pageCount' }).text()).toBe(`Page ${pageNumber} of ${lastPage}`);
  });
});
