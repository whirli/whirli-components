import { mount } from '@vue/test-utils';

import { propReturnsClass } from '../helpers';

import BaseButton from '@/components/BaseButton/BaseButton.vue';
import { PropKeys, LoadingStates } from '@/components/BaseButton/BaseButton.constants';
import { ConfigStyles } from '@/components/BaseButton/BaseButton.config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any;
const slots = {
  [LoadingStates.DEFAULT]: 'default',
  [LoadingStates.PROCESSING]: 'processing',
  [LoadingStates.LOADING]: 'loading',
  [LoadingStates.COMPLETE]: 'complete',
};

type LoadingStateKey = keyof typeof LoadingStates;

Object.keys(LoadingStates).forEach((loadingKey): void => {
  describe(`BaseButton.vue - Default - State: ${LoadingStates[loadingKey as LoadingStateKey]}`, () => {
    beforeEach(() => {
      wrapper = mount(BaseButton, {
        slots,
        props: {
          state: LoadingStates[loadingKey as LoadingStateKey],
        },
      });
    });

    it('renders the component', () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it('renders the correct element', () => {
      expect(wrapper.element.tagName).toBe('BUTTON');
    });

    it('displays the correct text', () => {
      expect(wrapper.text()).toMatch(slots[LoadingStates[loadingKey as LoadingStateKey]]);
    });

    it('is the correct color', () => {
      expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.COLOR, 'color-default')).toBe(true);
    });

    it('is the correct size', () => {
      expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.SIZE, 'size-default')).toBe(true);
    });
  });
});

describe('BaseButton.vue - Link: Internal', () => {
  beforeEach(() => {
    wrapper = mount(BaseButton, {
      slots,
      props: {
        url: '/internal',
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders the correct element', () => {
    expect(wrapper.element.tagName).toBe('ROUTERLINK');
  });

  it('displays the correct text', () => {
    expect(wrapper.text()).toMatch(slots[LoadingStates.DEFAULT]);
  });

  it('is the correct color', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.COLOR, 'color-default')).toBe(true);
  });

  it('is the correct size', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.SIZE, 'size-default')).toBe(true);
  });
});

describe('BaseButton.vue - Link: External', () => {
  beforeEach(() => {
    wrapper = mount(BaseButton, {
      slots,
      props: {
        url: 'https://www.whirli.com',
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders the correct element', () => {
    expect(wrapper.element.tagName).toBe('A');
  });

  it('displays the correct text', () => {
    expect(wrapper.text()).toMatch(slots[LoadingStates.DEFAULT]);
  });

  it('is the correct color', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.COLOR, 'color-default')).toBe(true);
  });

  it('is the correct size', () => {
    expect(propReturnsClass(wrapper, ConfigStyles, PropKeys.SIZE, 'size-default')).toBe(true);
  });
});
