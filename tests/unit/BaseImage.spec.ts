import { shallowMount } from '@vue/test-utils';
import BaseImage from '@/components/BaseImage/BaseImage.vue';

let wrapper: any;

describe('BaseImage.vue - Single classes', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseImage, {
      props: {
        image: {
          url: 'my-image.jpg',
          width: '400',
          height: '400',
          title: 'Hello world',
        },
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders the correct src', async () => {
    expect(wrapper.find('img').attributes('src')).toBe('my-image.jpg');
  });

  it('renders the correct alt', async () => {
    expect(wrapper.find('img').attributes('alt')).toBe('Hello world');
  });

  it('returns the correct ratio', () => {
    expect(wrapper.element.style.getPropertyValue('padding-top')).toBe('100%');
  });
});
